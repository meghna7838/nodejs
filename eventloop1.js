const fs = require("fs");
setImmediate(()=>{console.log("SetImmediate")});
setTimeout(()=>{
    console.log("SET TIMEOUT")
});


fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reeading CB");
    Promise.resolve("Promise3").then(console.log);
    process.nextTick(()=>{
        console.log("Next TICK")
    });
    setImmediate(()=>console.log("SetImmediate2"));
    setTimeout(()=>console.log("SetTimeout2"));
});

process.nextTick(()=>{
    Promise.resolve("Promise2").then(console.log);
    console.log("Process.nextTick")
});

Promise.resolve("Promise").then(console.log);
