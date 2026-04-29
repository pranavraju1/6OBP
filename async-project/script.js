const CONFIG = {
    DEBOUNCE_MS: 400,       //debounce delay
    TIMEOUT_MS: 3500,       //per source timeout
    SOURCES: ['A', 'B', 'C']
}

const STATE = {
    currentMode: 'parallel',    //track the selected mode
    activeRequestId: 0,         //tracks the request that is being performed
    abortController: null,      //tracks the promise that is rejected
    debounceTimer: null,        //timer id
    totalSearches: 0,           //to show in serach matrics
    cancelledRequests: 0,       //to show in serach matrics
    isSearching: false          //to keep track is serach process is going on
}



// utility functions

function updateMatrics(){
    document.getElementById("totalSearches").textContent = STATE.totalSearches;
    document.getElementById("cancelledCount").textContent = STATE.cancelledRequests;
}


function renderSource(sourceId, status, data = {}){
    
    const sourceEl = document.querySelector(`[data-source="${sourceId}"]`);
    
    sourceEl.className = `source ${status}`;
    
    const statusMap = {
        loading: `<div class="loading-text">Loading... (${Math.round(Math.random()*1000+500)})ms</div>`,
        success: `<div class="status-text success">Success (${data.duration || 0})ms</div>` + 
            (data.results || []).map(r => `
                <div class="result-item>
                    <div class="result-title">${r.title}</div>
                    <div class="result-meta">${r.meta}</div>
                </div>
                `).join(''),
        error: `<div class="status-text error">❌ ${data.message || 'API Error'}</div>`,
        timeout: `<div class="status-text timeout">⏰ request timed out</div>`,
        cancelled: `<div class="status-text">Cancelled newer search is active</div>`

    }

    sourceEl.innerHTML = `<h3>Source ${sourceId}</h3>${statusMap[status] || '<div class="placeholder">Ready</div>'}`
}

function resetSources(){
    CONFIG.SOURCES.forEach(id => renderSource(id, 'idle'))
}

function cancelActiveRequests(reason = "Cancelled"){
    if(STATE.abortController){
        STATE.abortController.abort(reason);
        STATE.abortController = null;

        STATE.cancelledRequests++;
        updateMatrics();
        CONFIG.SOURCES.forEach(id => renderSource(id, 'cancelled'));
        toggleButtns();
    }
    clearTimeout(STATE.debounceTimer);
}

function toggleButtns(){
    document.getElementById('cancelBtn').disabled = !STATE.isSearching;
    document.getElementById('searchBtn').disabled = STATE.isSearching;
} 

const debounceSearch = function(){
    return function(query){
        clearTimeout(STATE.debounceTimer);
        STATE.debounceTimer = setTimeout(()=>{
            if(query.trim()){
                executeSearch(query.trim());
            }
        },CONFIG.DEBOUNCE_MS)
    }
}


function simulateAPI(sourceId, query, requestId, signal){
    return new Promise((resolve, reject)=>{
        const delay = 800 + Math.random() * 4000;    //800 - 4800ms
        const willPass = Math.random() < 0.25;      //25% failure rate

        const timeout = setTimeout(()=>{
            if(signal.aborted) return reject(new DOMException("AbortError"));

            if(willPass){
                reject( new Error(`Source ${sourceId} service unavailable`))
            }else{
                const results = [
                    {title: `${query} Guide (${sourceId})`,  meta:'Documentation'},
                    {title: `${query} Tutorial (${sourceId})`,  meta:'Step by step'}
                ]
                resolve({sourceId, results, duration: delay, requestId})
            }  
        }, delay);

        signal.addEventListener('abort', ()=>{
            clearTimeout(timeout)
        }, {once: true});
    })
}


// this function is made to check if my promise is getting setteled in ms time
function withTimeout(promise, ms){
    const timeoutPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>reject(new Error('Timeout')), ms)
    });
    return Promise.race([promise, timeoutPromise])
}


function setStatus(message, type="info"){
    const el = document.getElementById('status');
    el.textContent = message;
    el.className = `status ${type}`
}


async function searchParallel(query) {
    const requestId = ++STATE.activeRequestId;
    const controller = new AbortController();
    STATE.abortController = controller;
    setStatus('Parallel search (all sources at once)...', 'info');
    STATE.isSearching = true;
    toggleButtns();

    const promise = CONFIG.SOURCES.map( async sourceId =>{
        renderSource(sourceId, 'loading');
        try{
            const result = await withTimeout(simulateAPI(sourceId, query, requestId, controller.signal),
            CONFIG.TIMEOUT_MS);

            return requestId === STATE.activeRequestId ? result : null;

        }catch(err){
            return (sourceId, err);
        }  
    })

    const results = await Promise.allSettled(promise);

    if(requestId !== STATE.activeRequestId) return;

    results.forEach((result, i)=>{
        const sourceId = CONFIG.SOURCES[i];
        if(result.status === 'fulfilled' && result.value){
            renderSource(sourceId, 'success', result.value);
        }else{
            // const error = result.reason?.error
                // these 2 are same
            // if(result.reason){
            //     const error = result.reason.error
            // }
            
            const error = result.reason?.error;

            if(error?.message === 'Timeout'){
                renderSource(sourceId, 'timeout');
            }else if(error?.name === "AbortError"){
                renderSource(sourceId, 'cancelled')
            }else{
                renderSource(sourceId, "error", {message: error?.message})
            }            
        }
    });
    
    STATE.isSearching = false;
    toggleButtns();
    setStatus('Parallel complete', 'success');
    STATE.totalSearches++;
    updateMatrics();
}

async function searchSequential(query) {
    const requestId = ++STATE.activeRequestId;
    const controller = new AbortController();
    STATE.abortController = controller;
    setStatus('Sequential search (one-by-one)...', 'info');
    STATE.isSearching = true;
    toggleButtns();

    for(const sourceId of CONFIG.SOURCES){
        if(requestId !== STATE.activeRequestId) break;
        renderSource(sourceId, 'loading');

        try{
            const result = await withTimeout(simulateAPI(sourceId, query, requestId, controller.signal), 
            CONFIG.TIMEOUT_MS);

            if(requestId === STATE.activeRequestId){
                renderSource(sourceId, 'success', result);
            }

        }catch(err){
            if(requestId === STATE.activeRequestId){
                if(err.message === 'Timeout'){
                    renderSource(sourceId, 'timeout');
                }else if(err.name === "AbortError"){
                    renderSource(sourceId, 'cancelled');
                }else{
                    renderSource(sourceId, "error", {message: err.message})
                }
            }
        }
    }
    
    STATE.isSearching = false;
    toggleButtns();
    setStatus('Sequential complete', 'success');
    STATE.totalSearches++;
    updateMatrics();
}


// Fastest: Promise.any() - first success
async function searchFastest(query) {
    
    const requestId = ++STATE.activeRequestId;
    const controllers = new Map();
    
    setStatus('Fastest result race...', 'info');
    STATE.isSearching = true;
    toggleButtns();

    const promises = CONFIG.SOURCES.map(sourceId => {
        const ctrl = new AbortController();
        controllers.set(sourceId, ctrl);
        renderSource(sourceId, 'loading');

        return withTimeout(
            simulateAPI(sourceId, query, requestId, ctrl.signal),
            CONFIG.TIMEOUT_MS
        ).catch(err=>({error:err}))
    });
    
    try{
        const winner = await Promise.any(promises);

        if(requestId == STATE.activeRequestId){
            renderSource(winner.sourceId, 'success', winner);

            // cancel the losers
            controllers.forEach((ctrl,id)=>{
                if(id !== winner.sourceId){
                    ctrl.abort();
                    renderSource(id, 'cancelled');
                }
            })

            setStatus(`${winner.sourceId} won ${winner.duration}ms !`, 'success');
        }

    }catch{
        CONFIG.SOURCES.forEach(id => renderSource(id, 'error'));
        setStatus('All promises failed', 'error');
    }

    STATE.isSearching = false;
    toggleButtns();
    setStatus('Fastest serach complete', 'success');
    STATE.totalSearches++;
    updateMatrics();
}


async function executeSearch(query){

    // critical: cleanup first
    cancelActiveRequests('New search')
    resetSources();

    switch (STATE.currentMode){
        case 'parallel': await searchParallel(query); break;
        case 'sequential': await searchSequential(query); break;
        case 'fastest': await searchFastest(query); break;
    }
}

// eventListners
document.getElementById('searchInput').addEventListener('input',(e)=>{
    debounceSearch(e.target.value);
})

document.getElementById('searchBtn').addEventListener('click',()=>{
    executeSearch(document.getElementById('searchInput').value);
})

document.getElementById('cancelBtn').addEventListener('click',()=>{
    cancelActiveRequests('Manual cancel');
})

document.querySelectorAll('.mode-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.mode-btn.active').classList.remove('active');
        btn.classList.add('active');
        STATE.currentMode = btn.dataset.mode;
        cancelActiveRequests('Mode changed');
        setStatus(`Mode: ${STATE.currentMode}`, 'info')
    });
});

// page cleanup
window.addEventListener('beforeunload', cancelActiveRequests);

resetSources();
updateMatrics();
toggleButtns();

