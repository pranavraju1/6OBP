const cluster = require("node:cluster");
const express = require("express");
const app = express();
const PORT = 8000;
const os =  require("node:os");
const {Worker} = require("node:worker_threads");


if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);

    // creating 2 workers
    const numCPUs = os.cpus().length;
    for(let i=0; i<numCPUs; i++){
        cluster.fork();
    }

    // creating new worker as soon a a worker dies
    cluster.on("exit", (worker, code, signal)=>{
        console.log(`Worker ${worker.process.pid} died. Forking a new one...`)
         cluster.fork();
    })
  
}else{
    console.log(`Worker in ${process.pid} has started`);
    
    app.get("/", (req, res)=>{
        res.send("Home Route")
    })
    
    app.get("/slow-page", (req, res)=>{

        const worker = new Worker("./worker_threads.js");
        worker.on("message", (j)=>{
            res.send(j)
        })



        // let j = 0;
        // for(let i=0; i<6000000000; i++){
        //     j++;
        // } // blocing the route 
        // res.json(j)
    })
    
    app.listen(5000, ()=>{
        console.log("Server is running on PORT: ", 5000)
    })
    
}