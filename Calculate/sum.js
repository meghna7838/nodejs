console.log("Sum module");
const x=6;
function CalculateSum(a,b){
    const sum = a+b;
    console.log(sum);
};

//module.exports = CalculateSum
module.exports = {
   x:x,
   CalculateSum:CalculateSum
};
