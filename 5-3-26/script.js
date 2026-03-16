
// class User{
//     constructor(userName, email){
//         this.userName = userName,
//         this.email = email
//     }
//     greet(){
//         console.log(`Hello ${this.userName}`)
//     }
// }

// const user1 = new User('pranav', 'pranav@gmail.com');
// console.log(user1)
// user1.greet()


// task: create the class for the below code
// const laptop = new Product('Laptop', 50000);
// laptop.displayInfo()

// class Product{
//     constructor(device, price){
//         this.device = device,
//         this.price = price
//     }
//     displayInfo(){
//         console.log(`${this.device} : ${this.price}`)
//     }
// }

// const laptop = new Product('Laptop', 50000);
// laptop.displayInfo()



// task2
// const account = new BankAccount('akash', 10000)
// account.deposit(5000)
// account.getBalance()         //15000


// *************************Getters and Setters**************

// class Circle{
//     constructor(radius){
//         this._radius = radius
//     }
//     get radius(){
//         return this._radius;
//     }
//     set radius(value){
//         if(value > 0){
//             this._radius = value;
//         }
//     }
//     get area(){
//         return Math.PI*this._radius*this._radius
//     }
// }

// const circle = new Circle(5);
// console.log(circle.radius);
// console.log(circle.area);
// circle.radius = 10;
// console.log(circle.area);

// ********************Static mehods *******************

// class MathHelper{
//     static add(a,b){
//         return a+b
//     }
//     static square(num){
//         return num*num
//     }
// }

// // no need to create an insance to call static method
// console.log(MathHelper.add(5,2))
// console.log(MathHelper.square(4))


// ********************Privatre fields *******************

// class BankAccount{
//     #balance; //private field
//     constructor(name, initialBalance){
//         this.name = name
//         this.#balance = initialBalance 
//     }
//     deposite(amount){
//         this.#balance += amount
//     }
//     getBalance(){
//         return this.#balance
//     }
// }

// const account = new BankAccount('pranav', 1000);
// account.deposite(500);
// console.log(account.getBalance());

// ********************Privatre vs public fields *******************

// class DataComparison{
//     // public property anyone can read and write
//     publicData = "i am public"

//     // private property - only class methods can access
//     #privateData = "i am private";

//     // public method
//     publicMethod(){
//         console.log("Public method is called")
//         this.#privateMethod();      //you can call a private method from public method
//     }

//     // private mehtod
//     #privateMethod(){
//         console.log("private method is called")
//         console.log(this.#privateData) //can access private data from a method
//     }

//     testAccess(){
//         console.log(this.publicData)
//         console.log(this.#privateData)
//         this.publicMethod();
//         this.#privateMethod();
//     }
// }

// const obj = new DataComparison();
// console.log(obj)
// // console.log(obj.publicData) //can access
// // obj.publicMethod(); //public method is called

// // console.log(obj.#privateData) //cannot  access
// // obj.#privateMethod()      //cannot  access


// obj.testAccess()


//*************************configure options */

// classes can accept configuration objects to provide flexible initialization.

class Timer{
    constructor(options={}){
        this.duration = options.duration || 60;
        this.autoStart = options.autoStart || false;
        this.time = this.duration;
    }
    start(){
        console.log(`Timer has started ${this.time}s`)
    }
    reset(){
        this.time = this.duration;
    }
}

// w/o options
const timer1 = new Timer();
console.log(timer1.duration);

const timer2 = new Timer({duration: 30, autoStart: true});
console.log(timer2.duration)
if(timer2.autoStart)timer2.start();
