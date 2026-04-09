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
    return new Promise((resole, reject)=>{
        const delay = 800 + Math.random() * 4000;    //800 - 4800ms
        const willFail = Math.random() < 0.25;      //25% failure rate

        const timeout = setTimeout(()=>{
            if(signal.aborted) return reject(new DOMException("AbortError"));
            
            
            
        })
    })
}