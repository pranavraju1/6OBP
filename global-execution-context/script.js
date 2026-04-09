// // var a = "a"
// // func(); //error func is not defined
// // var func = function(){
// //     console.log(1)
// // }
// // console.log(a);


// // // x = 30
// // console.log(x);

// // let x = 40
// // // console.log(x)


// // console.log(1)

// // setTimeout(()=>{
// //     console.log(2)
// // },0)

// // console.log(3)



// // console.log("start")
// // setTimeout(()=>{
// //     console.log("A")
// // },0)
// // setTimeout(()=>{
// //     console.log("B")
// // },2000)
// // setTimeout(()=>{
// //     console.log("C")
// // },0)
// // console.log("end")


// console.log("Start")
// console.log(1)
// setTimeout(()=>{
//     console.log(3)
// })
// Promise.resolve().then(()=>{
//     console.log(4)
// })
// Promise.resolve().then(()=>{
//     console.log(5)
// })
// Promise.resolve().then(()=>{
//     console.log(6)
// })
// console.log("end")


// function first(){
//     console.log(1)
//     second();
//     console.log(2)
// }

// function second(){
//     console.log(3);
//     third();
//     console.log(4)
// }

// function third(){
//     console.log(5)
// }

// first();



// function a(){
//     console.log(1)
//     b();
//     console.log(2)
// }

// function b(){
//     console.log(3)
// }

// a();


// console.log(1);
// setTimeout(function a(){console.log(2)},0);
// Promise.resolve().then(function b(){console.log(3)})
// Promise.resolve().then(function c(){
//     console.log(4);
//     setTimeout( function d(){console.log(5)}, 0)
// })

// console.log(6)
// 1 6 3 4 2 5

// console.log(1);
// setTimeout(function a(){console.log(2)},1000);
// Promise.resolve().then(function b(){console.log(3)})
// Promise.resolve().then(function c(){
//     console.log(4);
//     setTimeout( function d(){console.log(5)}, 0)
// })

// console.log(6)
// // 1 6 3 4 5 2



// console.log(1)
// Promise.resolve().then( function a(){
//     console.log(2)
//     setTimeout(function c(){console.log(3)}, 0)
// })
// setTimeout(function b(){
//     console.log(4);
//     Promise.resolve().then(function d(){console.log(5)}) 
// }, 0)
// console.log(6)
// // 1 6 2 4 5 3


// setTimeout(() => console.log("timeout1"), 0);
// Promise.resolve().then(()=>{
//     console.log("promise1");
//     setTimeout(()=> console.log("timeout2"), 0)
// })
// Promise.resolve().then(()=>console.log("promise2"));
// console.log("sync")

// sync
// promise1
// promise2
// timeout1
// timeout2

////////////////////////// starvation //////////////////////

// Note: do not run the below code
// function again(){
//     Promise.resolve().then(again)
// }
// again();
// setTimeout(()=>console.log("timer"), 0)

// in the above code the timer never executes as it will be in web api till the micro task que empties
// and calling the same function inside the promise keeps filling the microtask que.
// so in the above code the setTimeout starves to finish the execution of micro task que this is called starvation

// Note: as micro task que finishes first the imporatant data in the web page should be provided in the promises
// and the less important which can be shown later on should be in the setTimeout so that the UI is not Blocked.

/////////////////////////////////////////

