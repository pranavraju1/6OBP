// setTimeout(()=>console.log("this is setTimeout 1"),0)
// setTimeout(()=>{
//     console.log("this is setTimeout 2")
//     process.nextTick(()=>{
//         console.log("inner nextTick inside a timeout");
//     });
// },0)
// setTimeout(()=>console.log("this is setTimeout 3"),0)
// this is setTimeout 1
// this is setTimeout 2
// inner nextTick inside a timeout
// this is setTimeout 3

// Note: CB in microTask Q are executed in between the execution of CB's in timer Q

// setTimeout(()=>console.log("this is setTimeout 1"),1000)
// setTimeout(()=>console.log("this is setTimeout 2"),500)
// setTimeout(()=>console.log("this is setTimeout 3"),0)
// // this is setTimeout 3
// // this is setTimeout 2
// // this is setTimeout 1
// // Note: CB in Timer Q works on FIFO order
