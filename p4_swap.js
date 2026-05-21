let a = 3;
let b = 7;
console.log("A = "+a);
console.log("B = "+b);
// logic 1
// let temp = a;
// a = b;
// b = temp;

// logic 2 
a = a + b;
b = a - b;
a = a - b;
console.log("A = "+a);
console.log("B = "+b);