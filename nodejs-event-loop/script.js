// Async code execution
// JS -> single threaded
// to make async operation possible -> we have the event loop (libuv) in nodejs

// Execution order in event loop
// all the sync tasks are first completed till the call stack is empty
// only after that the event loop comes into picture

// 1.any callback(CB) in microtask Q is executed. Fisrt tasks in nextTick Q and only then task in promise Q

// 2. all CB within the timer Q are executed.
// CB in the microTask Q  if present are executed. Again Fisrt tasks in nextTick Q and only then task in promise Q

// 3. all CB within the I/O Q are executed.
// CB in the microTask Q  if present are executed. Again Fisrt tasks in nextTick Q and only then task in promise Q

// 4. all CB within the check Q are executed.
// CB in the microTask Q  if present are executed. Again Fisrt tasks in nextTick Q and only then task in promise Q

// 5. all Close within the check Q are executed.
// CB in the microTask Q  if present are executed. Again Fisrt tasks in nextTick Q and only then task in promise Q

// this loop will keep on going until there are no CB left inside any of the Q's




// console.log(1);
// process.nextTick(()=>console.log("nextTick code"));
// console.log(2);
// 1
// 2
// nextTick code


// Promise.resolve().then(()=>console.log("this is a promise"));
// process.nextTick(()=>console.log("nextTick code"));
// nextTick code
// this is a promise

// // Note: all CB inside nextTick Q are executed before CB in promise Q

process.nextTick(()=>console.log("nextTick code 1"));
process.nextTick(()=>{
    console.log("nextTick code 2");
    process.nextTick(()=>{
        console.log("inner nextTick code 1");
    });
});
process.nextTick(()=>console.log("nextTick code 3"));

Promise.resolve().then(()=>console.log("this is a promise code 1"));
Promise.resolve().then(()=>{
    console.log("this is a promise code 2")
    process.nextTick(()=>{
        console.log("inner nextTick code 2");
    });
});
Promise.resolve().then(()=>console.log("this is a promise code 3"));

// nextTick code 1
// nextTick code 2
// nextTick code 3
// inner nextTick code 1
// this is a promise code 1
// this is a promise code 2
// this is a promise code 3
// inner nextTick code 2

// Note: use of nextTick is discouraged as it can cause the rest of the eventloop to starve
// 2 main reasons to use nextTick 
// 1. to allow users to handle errors, cleanup any uneeded resources or request again before the eventloop starts
// 2. to allow CB to run after the call stack has unwound but before the event loop continues

