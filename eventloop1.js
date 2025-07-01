const fs = require("fs");
setImmediate(()=>{console.log("SetImmediate")});
setTimeout(()=>{
    console.log("SET TIMEOUT")
});

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reeading CB")
});

process.nextTick(()=>console.log("Process.nextTick"));
