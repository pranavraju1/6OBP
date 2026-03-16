// // storing value inside local storage
// localStorage.setItem('key', 'value');
// localStorage.setItem('key2', 'value2');

// // updaating local storage data
// localStorage.setItem('key', 'value3');

// // accessing storage value
// const value = localStorage.getItem("key")

// // this is how you remove local storage item
// // localStorage.removeItem("key2")

// // this remover all localstorage items
// // localStorage.clear();

// // gives the number of itmes inside the local storage
// const length = localStorage.length;

// let person1 = {
//     name: 'akash',
//     password: "asdasd"
// }

// localStorage.setItem(`${person1.name}`, JSON.stringify(person1))

// let value1 = localStorage.getItem('pranav')
// console.log(value1)
// console.log(typeof value1) //string

// value1 = JSON.parse(value1)
// console.log(value1)



// let text = document.getElementById('editor');
// let button = document.getElementById('submit');
// let heading = document.getElementById('heading');
// let username;


// function showValue(){
//     username = localStorage.getItem('username');
//     if(username){
//         heading.innerText = `Hello: ${username}`
//     }
// }
// showValue()

// button.addEventListener('click',handleClick);

// function handleClick(){
//     let value = text.value;
//     localStorage.setItem('username', value);
//     showValue()
// }


// localStorage.setItem("a","a")
// localStorage.setItem("b","b")
// localStorage.setItem("c","c")

// console.log(localStorage.length)
// // console.log(localStorage.key(0))
// // console.log(localStorage.key(1))
// // console.log(localStorage.key(2))

// for(let i=0; i<localStorage.length; i++){
//     console.log(localStorage.key(i), localStorage.getItem(localStorage.key(i)))
// }



// sessionStorage.setItem("testKey", "test value")

// let value = sessionStorage.getItem("testKey")

// console.log(value)

//******************** autosaving and debouncing *****/

// always avoid storing or fetching data in storage
// on input as this would result in unnesesary operations
// to solve you can either use debouncing or submit the data on a click of a button



// let saveTimeout;
// const input = document.getElementById('editor');
// input.addEventListener('input', ()=>{
//     saveTimeout = setTimeout(()=>{
//         clearTimeout(saveTimeout);
//         const data = {content: input.value, savedAt: Date.now()};
//         localStorage.setItem('draft', JSON.stringify(data));
//         console.log("auto saved");
//     }, 1000)
// })

// const saved = JSON.parse(localStorage.getItem('draft'));
// if(saved){
//     input.value = saved.content
// }



// window.onstorage = event => {
//     console.log("hello")
//     event.preventDefault();
//     console.log(event)
//     if(event.key != 'now') return;
//     alert(event.key + " : " + event.newValue + " at " + event.url)
// }

// localStorage.setItem('now', Date.now());