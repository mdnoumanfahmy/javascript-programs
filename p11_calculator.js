import promptSync from 'prompt-sync';

const prompt = promptSync();
 
let num1 = +prompt("Enter num1 : ");
let op = prompt("Enter op : ");
let num2 = +prompt("Enter num2 : ");



//logic
let output = 0;

if (op=='+') {
    output = num1+num2;
} else if (op=='-'){
    output = num1-num2;
} else if (op=='*'){
    output = num1*num2;
} else if (op=='/'){
    output = num1/num2;
} else if (op=='**'){
    output = num1**num2;
} else {
    console.log("invalid operator");
    process.exit(0);
}

console.log("output = "+ output);
