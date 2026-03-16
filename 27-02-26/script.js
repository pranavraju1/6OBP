// function marry(man, woman){
//     woman.husband = man;
//     man.wife = woman;


//     return{
//         father: man,
//         mother: woman
//     }
// }

// let family = marry({name: "John"},{name: "Ann"})

// delete family.father



// let user = {
//     name: "John",
//     age: 30,
//     greet: ()=>{
//         console.log("hello")
//     }
// }
// function greet2(){
//     console.log("hello2")
// }
// user.greetTwo = greet2;

// user.greet()
// user.greetTwo()


// let user = {
//     name: "prnav",

//     greet(){
//         // console.log("hello", user.name )
//         console.log("hello", this.name )
//     }
// }


// function greetTwo(){
//     console.log(this.name)
// }

// user.greet2 = greetTwo;
// user.greet2()


// here we cannot access this
// this happens bc the rules that set "this" do not look at object
// defination. Only the moment of the call matters.
// here the value of this inside makeUser() is undefined bc it is called as a function, 
// not as a method with "dot" syntax.
// function makeUser(){
//     return{
//         name:"John",
//         ref: this
//     }
// }
// let user = makeUser();
// console.log(user.ref.name)

// function makeUser(){
//     return{
//         name:"John",
//         ref(){
//             return this
//         } 
//     }
// }
// let user = makeUser();
// console.log(user.ref().name)









