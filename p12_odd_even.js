import promptSync from 'prompt-sync';

const prompt = promptSync();

let num = +prompt("Enter Num : ");

//logic
 if (num%2==0){
    console.log("even")
 }
 else {
    console.log("odd");
 }