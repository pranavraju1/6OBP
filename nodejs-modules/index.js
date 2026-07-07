// const fs = require("fs");

// method1
// fs.writeFileSync('notes.txt', 'Hello, Node fs 2!');
// console.log("File written");

// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log('File contents: ', data);


// method2
// Async fs read/write
// fs.writeFile('log.txt', 'Async write example', (err)=>{
//     if(err){
//         return console.log('Error in writting the file')
//     }
//     console.log("File wrritten successully");
// })
// fs.readFile('log.txt', 'utf-8', (err, data)=>{
//     if(err){
//         return console.log('Error in writting the file')
//     }
//     console.log("File read successully", data);
// })

// method 3
// const fs = require("fs/promises");

// async function demo(){
//     try{
//         await fs.writeFile('config.json', JSON.stringify({theme: 'dark'}));
//         console.log("congig is written")

//         const data = await fs.readFile('config.json', 'utf-8');
//         const config = JSON.parse(data)
//         console.log("read data: ", config)
//     }catch(error){
//         console.log("FS error", error)
//     }
// }
// demo();

//writeFileSync and readFileSync: blocks the thread until the operation is complete
// writeFile and readFile is async in nature and lets other code run while operation is going on



// strams
const fs = require("fs");

// const readStream = fs.createReadStream('bigfile.txt', {
//     encoding: 'utf-8',
//     highWaterMark: 16   //16 byts per chunk
// })

// // when you read stream begins
// readStream.on('data', (chunck)=>{
//     console.log("new chunk", JSON.stringify(chunck))
// })

// // when you read stream ends
// readStream.on('end', ()=>{
//     console.log("Finished reading file")
// })

// readStream.on('error', (error)=>{
//     console.log("Error in reading file", error)
// })


// const source = fs.createReadStream('bigfile.txt');
// const destination = fs.createWriteStream('bigfile-copy.txt');

// // pipe connects a readable stream to a writable stream
// source.pipe(destination);

// destination.on('finish',()=>{
//     console.log("File copied using streams")
// })

// destination.on('error', (error)=>{
//     console.log("Error in writing file", error)
// })



// stream transformation


// const readStream = fs.createReadStream('bigfile.txt', {encoding: 'utf-8'});
// const writeStream = fs.createWriteStream('bigfile-copy.txt');

// readStream.on('data',(chunck)=>{
//     const upper = chunck.toUpperCase();
//     writeStream.write(upper);
// });

// readStream.on('end',(chunck)=>{
//     writeStream.end();
//     console.log("Uppercase converstion done")
// })

// readStream.on('error',(error)=> console.log(error))
// writeStream.on('error',(error)=> console.log(error))

// // streams: data flowing in chunks over time, instead of loading everything at once
// // highWaterMark: controls the chunk size

// // source.pipe(destination) -> it forwards chunks from readable stream to the writable stream and manages
// //backpressures, pausing and resuming the readable if needed 



// const path = require('path');

// const filePath = path.join(__dirname, 'data','user.json');

// console.log("joined path", filePath)    //C:\Users\chatw\Desktop\6OBP\nodejs-modules\data\user.json
// console.log("Base name", path.basename(filePath))   // user.json
// console.log("Dir name", path.dirname(filePath)) //C:\Users\chatw\Desktop\6OBP\nodejs-modules\data
// console.log("Extension", path.extname(filePath)) //.json


const crypto = require('crypto');

// function hashPassword(password){
//     return crypto.createHash('sha256')
//     .update(password).digest('hex')
// }

// const password = 'mypassword123';
// const hash = hashPassword(password);

// console.log("Password: ", password)
// console.log("Hashed Password: ", hash)

// function signData(data, secret){
//     return crypto.createHmac('sha256', secret)
//     .update(data).digest('hex')
// }

// const payload = 'userID=23';
// const secretKey = "my-secrete-key";

// const signature = signData(payload, secretKey);
// console.log("Payload", payload)
// console.log("signature", signature);


const os = require("os");
console.log("Platform", os.platform());
console.log("architure", os.arch());
console.log("CPU count", os.cpus().length);
console.log("Total memory (MB)", o);