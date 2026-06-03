import promptSync from 'prompt-sync';
const prompt = promptSync()

//const prompt = prompt('prompt-sync')();


const f = parseInt(prompt("Enter farhenheit = "));

let c = (f-32)*5/9;

c = c.toFixed(2)

console.log("value in celcius = "+ c);

