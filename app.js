require("./xyz");

//const {x1,CalculateSum1} = require("./Calculate/sum")
//const Sum = require("./sum")

//import {x,CalculateSum} from "./sum.js";
var name = "Namaste Node JS";
var a =10;
var b=20;

const {CalculateSum, CalculateMultiply} = require("./Calculate")
// console.log(name);
// console.log(a+b);

// console.log(globalThis);

// console.log(this);
// console.log(global);

//CalculateSum(a,b);
CalculateSum(a,b);
CalculateMultiply(a,b);
console.log("x");
// console.log(x1)

