const prompt = require('prompt-sync')();

const radius = parseFloat(prompt("Enter radius? "));

const area = Math.PI * radius * radius;

console.log(`The area of the circle is: ${area}`);