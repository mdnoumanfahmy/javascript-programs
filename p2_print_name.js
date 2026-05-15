const prompt = require('prompt-sync')();

const name = prompt("What is your name? ");
console.log("Hello " + name);
console.log(`Hello ${name}`);