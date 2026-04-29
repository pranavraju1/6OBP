// display the candidated in the list who can vote after
//  the user clicks on submit

import { voteFilter } from "./script.js";
import {displayContent} from "./displayUl.js"

let name = document.getElementById("name");
let age = document.getElementById("age");
let submit = document.getElementById("submit");
let ul = document.getElementById("display");


let arr = [];
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    let obj = {};
    obj.name = name.value;
    obj.age = parseInt(age.value);
    arr.push(obj);
    console.log(arr);
    let result = voteFilter(arr);
    console.log("result", result)
    displayContent(result, ul)

})


