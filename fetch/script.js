// https://jsonplaceholder.typicode.com/posts/1


// this is how we fetch data from the network
// GET request
// fetch('https://jsonplaceholder.tyicode.com/posts/1')
// .then((res,rej)=>{
//     // this gives a promise
//     // console.log(res.json())

//     return res.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((errr)=>{
//     console.log("Netwrok error", errr)
// })

///////////////////////// OR //////////////////////////

// async function fetchData(){
//     try{
//         let res = await fetch('https://jsonplacehor.typicode.com/posts/1');
//         let data = await res.json();
//         console.log(data)

//     }catch(error){
//         console.log("network error", error)
//     }
// }

// fetchData()


///////////////////////// Options /////////////////////////

// method
// GET: fetch data from the network
// POST: send data data or add data to the network
// PUT: updating the whole data in network
// PATCH: updating a particular part of the data in network

// async function fetchData(){

//     try{
//         let res = await fetch('https://jsonplaceolder.typicode.com/posts/1');
//         console.log(res)
//         // to show the error from the server
//         if(!res.ok){
//             throw new Error("Error from the server")
//         } 

//         let data = await res.json();
//         console.log(data)
//     }catch (err){
//         console.log("something went wrong", err)
//     }
    
// }

// fetchData()




// fetch data from the url and print the title of each post
// https://jsonplaceholder.typicode.com/posts

// async function fetchData(){

//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         // to show the error from the server
//         if(!res.ok){
//             throw new Error("Error from the server")
//         } 

//         let data = await res.json();
//         return data;
//         // return data
//     }catch (err){
//         console.log("something went wrong", err)
//     }
    
// }
// let data =  fetchData();
// console.log(data)



/////////////////////////////////// showing data in UI fromt network /////////////
// https://jsonplaceholder.typicode.com/posts?_limit=5
// async function renderPosts(){
//     const output = document.getElementById('posts');
//     try{
//         output.innerHTML = "Loading....";
    
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    
//         const data = await res.json();
        
//         console.log(data);
//         if(!data){
//             output.innerHTML = "Failed to get data"
//             return;
//         }
    
//         output.innerHTML = data.map(p => 
//             `<div>
//                 <b>${p.title}</b>
//                 <p>${p.body.slice(0,100)}...</p>
//             </div>`
//         ).join("");
//     }catch(err){
//          output.innerHTML = "wrong api link"
//     }
// }

// renderPosts();










