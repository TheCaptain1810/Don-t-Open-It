let a = 10;
let b = 20;

// a = a ^ b;
// b = a ^ b; // XOR method
// a = a ^ b;

// let temp = a;
// a = b; // Using the third variable
// b = temp;

// a = a + b;
// b = a - b; // Just basic arithmetic
// a = a - b;

[a, b] = [b, a]; // God bless ECMAScript

console.log(`The values of a and b after swapping are: a:${a} b:${b} `)