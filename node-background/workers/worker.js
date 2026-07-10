const {parentPort} = require("worker_threads");

function heavyComputation(iterations){
    let count = 0;
    for(let i=0; i<iterations; i++){
        count += i;
    }
    return count;
}

parentPort.on('message', (msg)=>{
    console.log("Worker recieved message", msg);
    const result = heavyComputation(msg.iterations);
    parentPort.postMessage({result})
})