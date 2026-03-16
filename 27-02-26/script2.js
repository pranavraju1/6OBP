// function SetUsername(username){
//     console.log("hello")
//     this.username = username
// }

// function CreateUser(username, email, password){
//     SetUsername(username);
//     this.email = email;
//     this.password = password
// }

// const person1 = new CreateUser("pranav", "abc@gmail.com", "qwer");
// console.log(person1)

//a function cannot directly access the this of another function




// call

// let person1 = {
//     fname: "abc",
//     lname: "zxc"
// }

// let person2 = {
//     fname: "iop",
//     lname: "jkl"
// }

// let person = {
//     fullname: function(){
//         return this.fname + " " + this.lname
//     }
// }
// //syntax -> function.call(this ie. object ref)          
// let result = person.fullname.call(person1)
// let result2 = person.fullname.call(person2)
// console.log(result)
// console.log(result2)

// *************************************************

// apply

// let person1 = {
//     fname: "abc",
// }

// let person = {
//     fullname: function(lname , arg){
//         console.log(arg)
//         return this.fname + " " + lname
//     }
// }
// // //syntax -> function.apple(this ie. object ref, array of arguments)   
// let result = person.fullname.apply(person1, ["qwert", "qweqw"]);
// console.log(result);


// *************************************************

// const person1 = {name: "John"}
// const person2 = {name: "Paul"}
// const person3 = {name: "Ringo"}

// function greet(){
//     return "Hello " + this.name
// }

// // let result = greet.call(person1);
// // console.log(result)

// const greetJohn = greet.bind(person1);
// const greetPaul = greet.bind(person2)
// console.log(greetJohn())
// console.log(greetPaul())
