// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
// it will always return a number less than 1

// this will give me random numbers between 0(inclusive) to 9(inclusive)
// console.log(Math.floor(Math.random() * 10));

// this will give me values form 1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);

// this will give me values from 1 to 100
// console.log(Math.floor(Math.random() * 100) + 1);


// (max - min) defines your range
// Math.random() * (max-min) -> give you values form 0 t0 range
// + min -> sets the starting point to the min value
// min(included) and max(excluded)
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}


// min(included) and max(included)
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min
}

