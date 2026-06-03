import promptSync from 'prompt-sync';
const prompt = promptSync();

function checkEven(value){
    return value % 2 == 0 ? "Even": "Odd";
}

while(true){
    let num = +prompt("Enter number: ");
    if(num == -1){ break; }
    console.log(checkEven(num))
}


