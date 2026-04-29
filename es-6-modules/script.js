// class User {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// function printName(user){
//     console.log(`User name is: ${user.name}`)
// }

// function printAge(user){
//     console.log(`User age is: ${user.age}`)
// }

// // 1.
// // default export
// // this is going to export the user class as a defualt thing in script.js file
// // you cannot have more than one default exports
// export default User;

// // 2. particular function exports
// export  {printAge, printName }



// 3. inline exports
export default class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

export function printName(user){
    console.log(`User name is: ${user.name}`)
}

export function printAge(user){
    console.log(`User age is: ${user.age}`)
}
