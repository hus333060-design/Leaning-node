// What is a backend??
// it is that part of application that is not visible to user,but it handles logics and server-side works.
// What is a node.js??
// It is a CLI Application that runs outside of browser for bankend/server.

// Node.js vs Js
// 1.Access to files system:- Provides Apis to interact with the file system, write,delete ,munipulate and etc more.  But browser can't do it.
// ye tasks kar sakte hai only these files:- .txt,html,css,csv,xml,pdf,jpg ,png ,mp4
// Example with .txt

// const fs=require("fs");


// const data=fs.readFileSync("text.txt","utf-8");
// console.log(data); // you see error ENOENT: no such file or directory mtlb text.txt nhi mili, dekh0 node.js terminal yah par run kar rha hai;-
// C:\Program Files\nodejs\node.exe .\01_Basic\script.js
// aur autual me node.exe does npt exist that it is showing error

// Solution:- __dianame :- ye curent JS file ke ander folder ka naam console.log(__dirname);==C:\Users\AN\Desktop\Node.js\01_Basic
// const { log } = require("console");
// const fs=require("fs");

// const data=fs.readFileSync(__dirname + "/text.txt");

// // console.log(data); // this .tex return BUffer array it is binary respresention of character what you wrote inside the .tex file to take in user understand use 1.utf-8 in readfileSync 2. data.tostring()

// console.log(data.toString());

// 2.network capabilities:- it can send request in netwrok/network and also recieve them, also  exchange data thruoght it that how server it creates.
// Eg:- create server
const http = require("http");

const server = http.createServer((req,res)=>{
   res.end("Hello");
});

server.listen(5000,()=>{
    console.log("Running");
    
});



 // Node .js can do:-
//  Node.js
// ├── File System
// ├── Networking
// ├── Process Management
// ├── Streams
// ├── Event Loop
// ├── Child Processes
// └── Server Runtime