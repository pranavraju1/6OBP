const fs = require("fs");
const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("this is readable stream close event")
})

setImmediate(()=>console.log("this is a immidiate CB 1"))
Promise.resolve().then(()=>console.log("this is a promise code"));
setTimeout(()=>console.log("this is setTimeout 1"),0)
process.nextTick(()=>console.log("inner nextTick code inside read file"));

// Note: close Q CB's are executed after all the Q CB's in a given iteration of the loop are completed 
