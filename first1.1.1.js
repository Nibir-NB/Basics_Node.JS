console.log('Hello World! the node is working fine now...');
//lets  make a function

const sum = (a,b)=> a+b;

// another function

const multiply = (a, b) => a * b;

module.exports.sum = sum;
module.exports.multiply = multiply;
//or we can write it as 
module.exports = { sum:sum, multiply:multiply };