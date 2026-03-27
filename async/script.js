// Synchronous -> code runs sequentially, each statement awaits for the previous one


// Asynchronous -> Some operations run in the background, JS continues executing the rest of the code
// while waiting for the background process to finsh its execution.


// Sync
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// 1 2 3 4
// next code is waiting for the execution of the previous one 

// Async
// console.log(1);
// setTimeout(()=>{
//     console.log(2)
// },1000)
// console.log(3)
// 1 3 2 
// 3 does not wait for 2 to excute, 2 is executed in the background and waits for the rest to execute




////////// setTimeout ////////////////

// setTimout -> allows us to run a function after a certain period of time
// it is not a part of JS specefication but are provided by either nodeJs or the browser

// Syntax w/o args
// setTimeout(fn,sec)

// sec is in milli seconds ie. is sec = 1000 that means function will run after 1 sec

// function sayHi(){
//     console.log("hi")
// }
// setTimeout(sayHi, 3000);

// setTimeout(()=>{
//     console.log("hi")
// }, 3000);

// Syntax with args
// setTimeout(fn,sec , arg1, arg2, arg3)
// eg
// setTimeout((greet, name)=>{
//     console.log(`${greet} ${name}`)
// }, 1000, "Hello", "John")


// timer id
// let a  = setTimeout(()=>{
//     console.log("some process")
// },1000)

// let b  = setTimeout(()=>{
//     console.log("some process2")
// },1000)
// console.log(a)  //shows timerID
// console.log(b) //shows timerID

// this is how you clear your timer
// clearTimeout(a)
// clearTimeout(b)




///////////// setInterval ///////////

// setInterval allows us to run a function repeatedly. starting after the interval of time,
// then repeating continously at that interval


// sybtax w/o args
// setInterval(fn,delay)

// hello will keep printing after 1 sec
// setInterval(()=>{
//     console.log("hello")
// }, 1000)



// i want to run this 5 times 
// let count = 0
// let a = setInterval(()=>{
//     console.log("timer is running", count)
//     count++;
//     if(count>4){
//         clearInterval(a)
//     }
//  }, 1000)


// task run setInterval for 5 seconds (combine both setInerval and setTimeout)
// aproach 1 (better)
let intervalId = setInterval(()=>{
    console.log("interval is running")
},1000);

setTimeout(()=>{
    clearInterval(intervalId)
},5000);






