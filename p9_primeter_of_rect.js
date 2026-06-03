import promptSync from 'prompt-sync';

const prompt = promptSync();

let height = +prompt("Enter height : ");
let width = +prompt("Enter width : ");

//logic 

let perimeter = 2*(height + width);

console.log("perimeter = "+ perimeter);