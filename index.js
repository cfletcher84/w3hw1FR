let name = "Chris";
let age = 39;
let grade = 100;
let isHere = true;
let num1 = 10;
let num2 = 15;
// let isPositive = (num1 > 0) && (num2 > 0);  // using origional numbers
// let isEven = (num1 % 2 == 0) || (num2 % 2 == 0);

console.log('This is the students info:')
console.log(`- Name: ${name}`);
console.log(`- Age: ${age}`)
console.log(`- Grade: ${grade}`)
console.log(`- Present: ${isHere ? 'yes' : 'no'}`);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

console.log("Updated num1:", num1 = 27);
console.log("Updated num2:", num2 = 30);

let isPositive = (num1 > 0) && (num2 > 0);  // using updated numbers
let isEven = (num1 % 2 == 0) || (num2 % 2 == 0);


console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);


