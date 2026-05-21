const prompt = require('prompt-sync')();

const c = parseFloat(prompt("Enter value of celcius "));

// logic
let f = (c*(9/5))+32;
f = f.toFixed(2)
 
console.log("value in fahrenheit=" + f);