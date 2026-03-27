// callback
// when you pass a function inside another function as an argument then its called a callback function

// const calculate = (a,b, operation) => {
//     return operation(a,b)
// }

// // method 1
// const addition = calculate(3,4, (num1, num2)=>{
//     return num1 + num2
// })
// console.log(addition)


// // method2
// const subtraction = (a,b) => a-b ;
// const subresult = calculate(8, 3, subtraction);
// console.log(subresult)


// // method3
// function multiply(a,b){
//     return a*b;
// }
// const multResult = calculate(8,3, multiply);
// console.log(multResult)
///////////////////////////////////////////////////////

// problem:
// function getCheese(){
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log("here is the ", cheese);
//         return cheese
//     },2000)
// }

// console.log(getCheese())
// this gives the output as
// undefined
// here is the  🧀
// we get undefined bc return is happening after 2 sec


// solution
// function getCheese(callback){
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log("here is the ", cheese);
//         callback(cheese)
//     },2000)
// }

// function getDough(cheese, callback){
//     setTimeout(()=>{
//         const dough = cheese + "🫓";
//         console.log("here is the ", dough);
//         callback(dough)
//     },2000)
// }


// getCheese((cheese)=>{
//     getDough(cheese, (dough)=>{
//         console.log("got my dough", dough)
//     })
// })
// getChesse will execute after 2 seconds
// getDough will execute after 4 secods ie. 2 secods after
// getCheese has been executed









function getCheese(callback){
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("here is the ", cheese);
        callback(cheese)
    },2000)
}

function getDough(cheese, callback){
    setTimeout(()=>{
        const dough = cheese + "🫓";
        console.log("here is the ", dough);
        callback(dough)
    },2000)
}

function bakePizza(dough, callback){
    setTimeout(()=>{
        const pizza = dough + "🍕";
        console.log("here is the ", pizza);
        callback(pizza)
    },2000)
}


// call back hell
// multiple nested callback functions make code the difficult to read, understand
// debug and maintain. This occurs when when a series of async  operations needs
// to be performed in a specefic sequence and each operation depends on the 
// execution of the previous one.
getCheese((cheese)=>{
    getDough(cheese, (dough)=>{
        bakePizza(dough,(pizza)=>{
            console.log("got my pizza", pizza)
        })
    })
})