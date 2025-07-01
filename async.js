const fs= require("fs");
const http = require("https");

console.log("Hello World");
const a=100026;
const b=5546;

setTimeout(()=>console.log("Wait for 5 seconds"),5000);
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("File read error:", err.message);
    return;
  }
  console.log("File read complete:\n", data);
});

http.get("https://dummyjson.com/products/1",(res)=>{console.log("API responded")});

function mutiply(x,y){
    const result=x*y;
    return result;
}

const c= mutiply(a,b);

console.log(c);