const fs= require("fs");
const http = require("https");

console.log("Hello World");
const a=100026;
const b=5546;

setTimeout(()=>console.log("Wait for 5 seconds"),5000);
fs.readFile("./file.txt", "utf8",
    console.log("File read complete")
);

http.get("https://dummyjson.com/products",(yes)=>console.log("API responded");

function mutiply(x,y){
    const result=x*y;
}

const c= mutiply(a,b);

console.log(c);