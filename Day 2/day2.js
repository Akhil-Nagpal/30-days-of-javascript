// *-*-*-*-* Activity 1 *-*-*-*-*
// Declare two numbers and perform addition
let num1 = 4;
let num2 = 9;

const add = num1 + num2;
console.log(add); // Logs the result of addition

// Declare two more numbers and perform subtraction
let num3 = 15;
let num4 = 8;

const sub = num3 - num4;
console.log(sub); // Logs the result of subtraction

// Declare two more numbers and perform multiplication
let num5 = 7;
let num6 = 48;

const multi = num5 * num6;
console.log(multi); // Logs the result of multiplication

// Declare two more numbers and perform division
let num7 = 102;
let num8 = 8;

const divide = num7 / num8;
console.log(divide); // Logs the result of division

// Declare two more numbers and calculate the remainder
let num9 = 13;
let num10 = 5;

const remain = num9 % num10;
console.log(remain); // Logs the result of remainder

// *-*-*-*-* Activity 2 *-*-*-*-*
// Increment age by 3 and log the result
let age = 35;
age += 3;
console.log(age);

// Decrement users by 36 and log the result
let users = 47;
users -= 36;
console.log(users);

// *-*-*-*-* Activity 3 & 4 *-*-*-*-*
function compareAndLog(num1, num2) {
  // Comparison Operators
  console.log(`${num1} == ${num2}:`, num1 == num2); // Equal to
  console.log(`${num1} === ${num2}:`, num1 === num2); // Strictly equal to
  console.log(`${num1} != ${num2}:`, num1 != num2); // Not equal to
  console.log(`${num1} !== ${num2}:`, num1 !== num2); // Strictly not equal to
  console.log(`${num1} < ${num2}:`, num1 < num2); // Less than
  console.log(`${num1} > ${num2}:`, num1 > num2); // Greater than
  console.log(`${num1} <= ${num2}:`, num1 <= num2); // Less than or equal to
  console.log(`${num1} >= ${num2}:`, num1 >= num2); // Greater than or equal to

  // Logical Operators
  console.log(
    `${num1} === ${num2} && ${num1} < ${num2}:`,
    num1 === num2 && num1 < num2 // Logical AND
  );
  console.log(
    `${num1} !== ${num2} || ${num1} > ${num2}:`,
    num1 !== num2 || num1 < num2 // Logical OR
  );
  console.log(`!${num1} < ${num2}:`, !(num1 < num2)); // Logical NOT
}

compareAndLog(55, 65); // Compare and log results for the given numbers

// *-*-*-*-* Activity 5 *-*-*-*-*
// Ternary operator to check if a number is positive or negative
const number = 26;
const result =
  number > 0 ? "Number is Positive!" : "Number is Negative!";

console.log(result); // Logs if the number is positive or negative

// *-*-*-*-* Activity 6 *-*-*-*-*
function arithmeticOperators(num1, num2) {
  // Perform and log arithmetic operations
  console.log(`${num1} + ${num2}:`, num1 + num2); // Addition
  console.log(`${num1} - ${num2}:`, num1 - num2); // Subtraction
  console.log(`${num1} * ${num2}:`, num1 * num2); // Multiplication
  console.log(`${num1} / ${num2}:`, num1 / num2); // Division
  console.log(`${num1} % ${num2}:`, num1 % num2); // Remainder
}

arithmeticOperators(140, 105); // Perform arithmetic operations for the given numbers

function logicalOperators(num1, num2) {
  // Perform and log logical operations
  console.log(
    `${num1} === ${num2} && ${num1} < ${num2}:`,
    num1 === num2 && num1 < num2 // Logical AND
  );
  console.log(
    `${num1} !== ${num2} || ${num1} > ${num2}:`,
    num1 !== num2 || num1 < num2 // Logical OR
  );
  console.log(`!${num1} < ${num2}:`, !(num1 < num2)); // Logical NOT
}

logicalOperators(25, 67); // Perform logical operations for the given numbers

function ternaryOperator(number) {
  // Ternary operator to check if a number is positive or negative
  const result =
    number > 0 ? "Number is Positive!" : "Number is Negative!";

  console.log(result); // Logs if the number is positive or negative
}

ternaryOperator(-28); // Check if the given number is positive or negative
