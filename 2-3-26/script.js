// // this is you constructor function
// // function Car(brand, model, year, wheels){
// //     this.brand = brand;
// //     this.model = model;
// //     this.year = year;
// //     this.wheels = wheels || 4;
// // }

// // const car1 = new Car("Toyota", "etios", 2020);
// // const car2 = new Car("Honda", "amaze", 2019, 6);

// // console.log(car1)
// // console.log(car2)




// // function Calculator(brand){
// //     this.brand = brand;
// //     this.currentVlaue = 0;

// //     this.add = function(number){
// //         this.currentVlaue = this.currentVlaue + number
// //         return this.currentVlaue
// //     }

// //     this.reset = function(){
// //         this.currentVlaue = 0;
// //     }
// // }


// // const calc1 = new Calculator("Casio");
// // console.log(calc1.add(10))
// // console.log(calc1.add(10))
// // calc1.reset()
// // console.log(calc1.currentVlaue)




// function ShoppingCart(customerName){
//     this.customerName = customerName;
//     this.items = [];
//     this.total = 0;

//     // adds items to the cart
//     this.add = function(itemName, price, quantity){
//         const item = {
//             name:itemName,
//             price:price,
//             quantity: quantity || 1
//         }
//         this.items[this.items.length] = item;
//         this.calculateTotal();
//         return itemName + " added to cart"
//     }

//     // calculate total
//     this.calculateTotal = function(){
//         this.total = 0;
//         let i=0;
//         while(i<this.items.length){
//             this.total = this.total + (this.items[i].price * this.items[i].quantity);
//             i=i+1;
//         }
//     }

//     // cart summary
//     this.getSummary = function(){
//         return this.customerName + "s Cart:" + this.items.length + "items, Total ₹" + this.total
//     }

//     //clear cart
//     this.clearCart = function(){
//         this.items = [];
//         this.total = 0;
//         return "Cart cleared"
//     } 
// }

// const cart1 = new ShoppingCart("Neha");
// // console.log(cart1.add("Laptop", "45000", 1));
// // console.log(cart1.add("Mouse", 500, 2));
// // console.log(cart1.add("Keyboard", 1500, 1));

// // console.log(cart1.getSummary());

// // console.log(cart1.clearCart());

// // console.log(cart1.getSummary());


// // let arr = new Array()
// // let obj = new Object()



//************************************* */
function Car(brand, model){
    this.brand = brand,
    this.model = model
}

Car.prototype.displayInfo = function(){
    return this.brand + " " + this.model
}

const car1 = new Car("Toyota", "etios");
const car2 = new Car("Honda", "amaze");

console.log(car1)
console.log(car2)

console.log(car1.displayInfo())
console.log(car2.displayInfo())