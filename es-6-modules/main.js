// below is a default export fromt script.js
// you can any name below instead of User as it is a defualt export
// form script.js ie there will be only one defualt export
import User from "./script.js";

// here is has to be the same name as mentioned in the script.js file
// import {printAge, printName} from "./script.js"

// incase if you want to use different names
import {printAge as printUserAge, printName as printUserName} from "./script.js"

const user = new User("pranav", 20);

// printAge(user)
// printName(user)
printUserAge(user)
printUserName(user)

console.log(user)