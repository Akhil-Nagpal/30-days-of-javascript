// *-*-*-*-* Activity 1 *-*-*-*-*
// Loop from 1 to 10 and print each number
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// *-*-*-*-* Activity 2 *-*-*-*-*
// Loop from 1 to 10 and print the multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// *-*-*-*-* Activity 3 *-*-*-*-*
// Calculate the sum of numbers from 1 to 10 using a while loop
let num = 1;
let sum = 0;
while (num <= 10) {
  sum = num + sum;
  num++;
}
console.log(sum);

// *-*-*-*-* Activity 4 *-*-*-*-*
// Count down from 10 to 1 and print each number
let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
}

// *-*-*-*-* Activity 5 *-*-*-*-*
// Print numbers from 1 to 5 using a do-while loop
let users = 1;
do {
  console.log(users);
  users++;
} while (users <= 5);

// *-*-*-*-* Activity 6 *-*-*-*-*
// Calculate factorial of a number (5 in this case) using a do-while loop
let nums = 5;
let factorial = 1;
let currentNum = nums;
do {
  factorial = factorial * nums;
  nums--;
} while (nums > 0);
console.log(`The factorial of ${currentNum} is ${factorial}`);

// *-*-*-*-* Activity 7 *-*-*-*-*
// Print a pyramid pattern of stars using nested loops
let star = 5;
for (let i = 0; i < star; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(" ");
}

// *-*-*-*-* Activity 8 *-*-*-*-*
// Print an inverted pyramid pattern of stars using nested loops
for (let i = 0; i < star; i++) {
  for (let j = 0; j < star - i; j++) {
    process.stdout.write("* ");
  }
  console.log(" ");
}

// *-*-*-*-* Activity 9 *-*-*-*-*
// Example of 'continue' statement: skip printing number 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// *-*-*-*-* Activity 10 *-*-*-*-*
// Example of 'break' statement: stop printing numbers after 7
for (let i = 1; i <= 10; i++) {
  if (i > 7) break;
  console.log(i);
}

// *-*-*-*-* Activity 11 *-*-*-*-*
// Function to print numbers from 1 to 'num'
function numbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
numbers(10);

// *-*-*-*-* Activity 12 *-*-*-*-*
// Function to print multiplication table of 5 up to 'num'
function table(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }
}
table(10);

// *-*-*-*-* Activity 13 *-*-*-*-*
// Function to print a pyramid pattern of stars up to 'num' rows
function pattern(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log(" ");
  }
}
pattern(5);

// *-*-*-*-* Activity 14 *-*-*-*-*
// Function to calculate sum of numbers from 1 to 'num'
function sumCalc(num) {
  let sum = 0;
  while (num <= 10) {
    sum = num + sum;
    num++;
  }
  console.log(sum);
}
sumCalc(1);

// *-*-*-*-* Activity 15 *-*-*-*-*
// Function to calculate factorial of a number 'num'
function factorialOf(num) {
  let factorial = 1;
  do {
    factorial = factorial * num;
    num--;
  } while (num > 0);
  console.log(factorial);
}
factorialOf(5);
