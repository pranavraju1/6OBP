// Promise -> its an object that represents the eventual completion or failure of an
// async operation and its resulting value

// A promise has 3 states
// 1. pending : initial state, neither fulfilled nor rejected. 
// 2. fulfilled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.


// How to create a promise?
// const promise1 = new Promise(function(resolve, reject){
//     // do async tasks
//     // eg: DB calls, crytography

//     setTimeout(()=>{
//         console.log("async operation is completed")

//         // you have to write resolve here to connect with your .then
//         resolve();
//     },2000)
// })

// consuming a promise
// promise1.then(function(){
//     // this will be executed after the promise has bees resolved
//     console.log("promise is resolved")
// })

// .then() -> executes the callback, when the promise is is successfully fulfilled
// .catch() -> executes the callback, when the promise is rejected or an error occurs
// .finally() -> executes the callback, when the promise is either resolved or rejected

//////////////////////////////// or /////////////////////////////////

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("async operation is completed")
//         resolve();
//     },2000)
// }).then(()=>{
//      console.log("promise is resolved")
// })


//////////////////// data consumption //////////////

// let promise2 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         console.log("async operation is completed")
//         res({username: "pranav", email: "pranav@gmail.com"});
//     },2000)
// })

// promise2.then((user)=>{
//     console.log("promise resolved", user)
// })



/////////////////////  error and finally //////////////////

// const promise3 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             res({username: "pranav", email: "pranav@gmail.com"});
//         }else{
//             // the data here goes to .catch
//             rej("Error: Something went wrong")
//         }
//     },1000)
// })

// promise3.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise has taken place")
// })


////////////////////////////////// solving callback hell /////////////////////////

// function getCheese(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const cheese = "🧀";
//             res(cheese)
//         },2000)
//     })
// }

// function getDough(cheese){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const dough = cheese + "🫓";
//             // res(dough)
//             rej("Something went wrong")
//         },2000)
//     })

// }

// function bakePizza(dough){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const pizza = dough + "🍕";
//             res(pizza)
//         },2000)
//     })

// }

// getCheese((cheese)=>{
//     getDough(cheese, (dough)=>{
//         bakePizza(dough,(pizza)=>{
//             console.log("got my pizza", pizza)
//         })
//     })
// })


// ///////// using .then(), .catch(), .finally() /////////
// below is called promise chaining 
// getCheese().then((cheese)=>{
//     console.log("here is the cheese", cheese);
//     return getDough(cheese)
// }).then((dough)=>{
//     console.log("here is the dough", dough);
//     return bakePizza(dough)
// }).then((pizza)=>{
//     console.log("here is the pizza", pizza)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise is executed")
// })



/////////////////// async await //////////////////

// the async keyword before a function means that function is going to return a promise.
// await makes JS wait until the promise has been settled and returns its result
// you cannot write await inside a function that is not async

// for handling error in async await we use try catch blocks 

// async function orderPizza(){

//     try{
//         const cheese = await getCheese();
//         console.log("here is the cheese", cheese);

//         const dough = await getDough(cheese);
//         console.log("here is the dough", dough);

//         const pizza = await getDough(cheese);
//         console.log("here is the pizza", pizza)

//     }catch(error){
//         console.log(error)
//     }finally{
//         console.log("finally ")
//     }


// }
// orderPizza()





// task print the below in the interval of 3 seconds between them using promises
//  step1 completed
//  step2 completed
//  step3 completed


function step1(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("step1 is executed")
        },2000)
    })
}
function step2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("step2 is executed")
        },2000)
    })
}
function step3(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("step3 is executed")
        },2000)
    })
}


// step1().then((data)=>{
//     console.log(data)
//     return step2()
// }).then((data)=>{
//     console.log(data)
//     return step3()
// }).then((data)=>{
//     console.log(data)
// })


async function runSteps(){
   let res1 =  await step1();
   console.log(res1)
   let res2 =  await step2();
   console.log(res2)
   let res3 = await step3();
   console.log(res3)
}

runSteps();
