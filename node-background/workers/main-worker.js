const {Worker} = require("worker_threads");

function runWorker(iterations){
    return new Promise((res, rej)=>{
        const worker = new Worker('./worker.js');
        worker.on('message', (msg)=>{
            console.log("Main thread recieved result from worker: ", msg.result);
            res(msg.result);
        })
        worker.on('error', (err)=>{
            rej(err)
        })
        worker.on('exit', (code)=>{
            console.log('worker exited from code', code);
        })
        worker.postMessage({iterations})
    })
}

console.log("Start worker....");
runWorker(1e7).then((result)=>{
    console.log("Final result: ", result)
}).catch((error)=>{
    console.log("Worker error", error)
})