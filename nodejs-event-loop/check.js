// const fs = require("fs");
// fs.readFile(__filename, ()=>{
//     console.log("this is a readFile")
// })
// process.nextTick(()=>console.log("inner nextTick code"));
// Promise.resolve().then(()=>console.log("this is a promise code"));
// setTimeout(()=>console.log("this is setTimeout 1"),0)

// setImmediate(()=>console.log("this is a immidiate CB"))
// for(let i=0; i<2000000000; i++){}

// // Note:
// // to queue CB inside a check Q we can use a func called setImmediate
// IO events are polled and CB func are added IO Q only after the IO operation is complete




// const fs = require("fs");
// fs.readFile(__filename, ()=>{
//     console.log("this is a readFile")
//     setImmediate(()=>console.log("this is a immidiate CB"))
// })
// process.nextTick(()=>console.log("inner nextTick code"));
// Promise.resolve().then(()=>console.log("this is a promise code"));
// setTimeout(()=>console.log("this is setTimeout 1"),0)

// for(let i=0; i<2000000000; i++){}

// // Note: Check Q CB are executed after the IO Q CB's execution


// const fs = require("fs");

// fs.readFile(__filename, ()=>{
//     console.log("this is a readFile 1")
//     setImmediate(()=>console.log("this is a immidiate CB"))
//     process.nextTick(()=>console.log("inner nextTick code inside read file"));
//     Promise.resolve().then(()=>console.log("this is a promise code inside read file"));
// })
// process.nextTick(()=>console.log("this is a nextTick code"));
// Promise.resolve().then(()=>console.log("this is a promise code"));
// setTimeout(()=>console.log("this is setTimeout 1"),0)
// for(let i=0; i<2000000000; i++){}

// // MicroTask Q's CB are executed after IO CB's and before Check Q CB's (ie. in between them)



    // setImmediate(()=>console.log("this is a immidiate CB 1"))
    // setImmediate(()=>{
    //     console.log("this is a immidiate CB 2")
    //     process.nextTick(()=>console.log("inner nextTick code"));
    //     Promise.resolve().then(()=>console.log("this is a promise code"));
    // })
    // setImmediate(()=>console.log("this is a immidiate CB 3"))
