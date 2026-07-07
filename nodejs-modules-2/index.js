// //OS module
// const os = require('os');

// console.log('Platform', os.platform()); //return os type -> win32, linux, darwin etc
// console.log('Achitecture', os.arch());  
// console.log('CPU count', os.cpus().length); //.cpus() gives you the cpu info
// console.log('Total memory (MB)', (os.totalmem() / 1024 / 1024).toFixed(2)); //converting in MB
// console.log('Free memory (MB)', (os.freemem() / 1024 / 1024).toFixed(2));
// console.log('Home directory', os.homedir());


// const freemb = (os.freemem() / 1024 / 1024).toFixed(2);
// if(freemb < 500){
//     console.log("Please free up space to perform this action")
// }else{
//     console.log("sufficient space is there")
// }



// //readline (CLI inputs)
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// }) ;

// rl.question('What is your name ? ', (name)=>{
//     console.log(`Hello! ${name}`)
//     rl.close();
// })
// createInterface -> connects readline to standard input and output
// rl.question -> prints prompt and passes user input to the call back

// taking multiple inputs
// rl.question('Enter first number: ',(a)=>{
//     rl.question('Enter second number: ', (b)=>{
//         const sum = Number(a) + Number(b);
//         console.log("Sum is: ", sum)
//         rl.close();
//     })
// })


// // line by line file reading
// const readline = require('readline');
// const fs = require("fs");

// const rl = readline.createInterface({
//     input: fs.createReadStream('students.txt'),
//     crlfDelay: Infinity
// })

// let count = 0;

// rl.on('line', (line)=>{
//     count++;
//     console.log(`Student ${count}: ${line}`)
// })

// rl.on('close', (line)=>{
//     console.log(`Total students: ${count}`)
// })


// URL
// const myURL = new URL('https://example.com:8080/products?category=book&sort=asc#top');
// console.log("Protocol: ", myURL.protocol);  // https:
// console.log("Host: ", myURL.host);  //  example.com:8080
// console.log("Hostname: ", myURL.hostname);  //  example.com
// console.log("PORT: ", myURL.port);  //  8080
// console.log("Pathname: ", myURL.pathname);  //   /products
// console.log("Search: ", myURL.search);  //   ?category=book&sort=asc
// console.log("Hash: ", myURL.hash);  //   #top

// console.log('Category:', myURL.searchParams.get('category')); //book
// console.log('All params:',Array.from(myURL.searchParams.entries()) );  
//  //[ [ 'category', 'book' ], [ 'sort', 'asc' ] ]


// const apiUrl = new URL("https://api.example.com/search");

// apiUrl.searchParams.set('q','nodejs');
// apiUrl.searchParams.set('page','2');
// apiUrl.searchParams.set('limit','10');
// console.log('Final URL:', apiUrl.toString());
// //  https://api.example.com/search?q=nodejs&page=2&limit=10


// const querystring = require('querystring');

// const qs = 'category=book&sort=asc&limit=10';
// const parsed = querystring.parse(qs);
// console.log('Parsed object', parsed); //{ category: 'book', sort: 'asc', limit: '10' }

// const stringfied = querystring.stringify({
//     category: 'movies',
//     sort: 'desc',
//     page: 3
// })
// console.log("Stringfied", stringfied) // category=movies&sort=desc&page=3

// // querystring.parse -> converts key1=value1&key2=value2 in to an object
// // querystring.stringify -> converts key value pairs in and object into a combined url string


// const express = require("express");
// const fs = require("fs");
// const app = express();
// app.get('/',(req, res)=>{
//     fs.readFile('bigfile.txt', 'utf-8', (err, data)=>{
//         if(err){
//             console.log('File read error: ', err)
//             return res.status(500).send('Server error')
//         }
//         res
//         .status(200)
//         .type('text/plain')
//         .send(data)
//     })
// })

// app.listen(5000, ()=>{
//     console.log("Server is running on port 5000")
// })



// Event and emit


// const EventEmitter = require("events");

// class Logger extends EventEmitter{
//     log(message){
//         console.log("Log", message)
//         this.emit('messageLogged', {message, timeStamp: new Date()});
//     }
// }

// const logger = new Logger();

// // listner 1
// logger.on('messageLogged', (info)=>{
//     console.log('Listner 1 recieved: ', info)
// })

// // listner 2
// logger.on('messageLogged', (info)=>{
//     console.log('Listner 2 storing in DB: ', info.message)
//     // pretend you are storing indb
// })

// logger.log("User signed in");
// // Log User signed in
// // Listner 1 recieved:  { message: 'User signed in', timeStamp: 2026-07-07T08:52:20.571Z }
// // Listner 2 storing in DB:  User signed in

// // Difference between on and emit
// // on registers a listner for an event; emit triggers that event and calls all registered listners

// // Why is EventEmitter useful
// // it helps decouple components: one part events, other parts subscribe; they don't need direct
// // reference to each other.



const EventEmitter = require("events");

const emitter = new EventEmitter();

function greetOnce(name){
    console.log("Greeting once: ", name);
}

emitter.once('greet', greetOnce);
emitter.emit('greet', 'Alice');
emitter.emit('greet', 'Bob');   //this will not be emitted if once is used, 
// ie if i use 'on' both emits are triggred 

function hello(name){
    console.log("Hello! ", name)
}

emitter.on('greet2', hello);
emitter.emit('greet2', 'Alice');
emitter.removeListener('greet2', hello);
emitter.emit('greet2', 'Bob');  ////this will not be emitted