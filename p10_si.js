import promptSync from 'prompt-sync';

const prompt = promptSync();

let princple = +prompt("Enter princple : ");

let rate = +prompt("Enter rate : ");

let time = +prompt("Enter time : ");

// logic

let si = (princple * rate * time)/100;

console.log("si = "+ si);