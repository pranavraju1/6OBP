const express = require("express");
const {Worker} = require("worker_threads");

const app = express();
const PORT = 3000;

function runHeavyTask(iterations){
    return new Promise((res, rej)=>{
        const worker = new Worker('./workers/worker.js');
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

app.get('/compute', async (req,res)=>{
    try{
        const result = await runHeavyTask(1e7);
        res.json({result});
    }catch(err){
        res.status(500).send('error computing')
    }
})

app.use((req,res)=>{
    res.send('hello from main thread')
})

app.listen(PORT, ()=>{
    console.log("Server is running on port: ", PORT)
})