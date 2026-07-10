// const fs = require("fs");

// // fs.readFile(__filename, ()=>{
// //     console.log("this is a readFile 1")
// // })
// // process.nextTick(()=>console.log("nextTick code"));
// // Promise.resolve().then(()=>console.log("this is a promise code"));
// // nextTick code
// // this is a promise code
// // this is a readFile 1


// setTimeout(()=>console.log("this is setTimeout"),0)
// fs.readFile(__filename, ()=>{
//     console.log("this is a readFile 1")
// })
// // this is setTimeout
// // this is a readFile 1

// setTimeout(()=>console.log("this is setTimeout"),1000)
// fs.readFile(__filename, ()=>{
//     console.log("this is a readFile 1")
// })
// // this is a readFile 1
// // this is setTimeout

// // Note:
// // most of the async mehtods from built in modules queue the CB func in th I/O Q
// // When running setTimeout with delay on 0ms and an IO async method, 
// // the order of the execution can never be guaranteed


const fs = require("fs");
fs.readFile(__filename, ()=>{
    console.log("this is a readFile")
})
process.nextTick(()=>console.log("inner nextTick code"));
Promise.resolve().then(()=>console.log("this is a promise code"));
setTimeout(()=>console.log("this is setTimeout 1"),0)

for(let i=0; i<2000000000; i++){}
// inner nextTick code
// this is a promise code
// this is setTimeout 1
// this is a readFile

// Note: I/O Q CB are executed after the microtask Q CB's and Timer CB's

