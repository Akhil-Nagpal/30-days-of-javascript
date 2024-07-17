// *-*-*-*-* Activity 1 *-*-*-*-*
// Function to determine if a number is odd or even
function oddEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even!`);
  } else {
    console.log(`${num} is Odd!`);
  }
}
oddEven(200); // Example usage

// *-*-*-*-* Activity 2 *-*-*-*-*
// Function to calculate the square of a number
function squareOf(num) {
  const result = num * num;
  console.log(`Square of ${num} is ${result}`);
}
squareOf(2); // Example usage

// *-*-*-*-* Activity 3 *-*-*-*-*
// Function to find the maximum of two numbers
const maximum = function (num1, num2) {
  const max = num1 > num2 ? num1 : num2;
  console.log(`The maximum of ${num1} and ${num2} is ${max}`);
};
maximum(5, 11.5); // Example usage

// *-*-*-*-* Activity 4 *-*-*-*-*
// Function to concatenate two strings
const concatenate = function (str1, str2) {
  const join = str1 + str2;
  console.log(`The concatenated string is ${join}`);
};
concatenate("Java", "Script"); // Example usage

// *-*-*-*-* Activity 5 *-*-*-*-*
// Function to calculate the sum of two numbers using arrow function syntax
const sum = (num1, num2) => {
  const result = num1 + num2;
  console.log(`Sum of ${num1} and ${num2} is ${result}`);
};
sum(5, 41); // Example usage

// *-*-*-*-* Activity 6 *-*-*-*-*
// Function to check if a string contains a specific character
const contains = (str, char) => str.includes(char);
console.log(contains("Hello", "e")); // Example usage

// *-*-*-*-* Activity 7 *-*-*-*-*
// Function with default parameter value
function retProduct(a, b = 3) {
  const result = a * b;
  console.log(`The Product of ${a} and ${b} is ${result}`);
}
retProduct(5); // Example usage

// *-*-*-*-* Activity 8 *-*-*-*-*
// Function demonstrating default parameter behavior
function person(name, age = 18) {
  console.log(`${name} can vote! Because he is above 18`);
}
person("Ak"); // Example usage

// *-*-*-*-* Activity 8 *-*-*-*-*
// Function to greet a specified number of times using a callback function
function greet(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}
function printGreet() {
  console.log("Hello!");
}
greet(printGreet, 4); // Example usage

// *-*-*-*-* Activity 9 *-*-*-*-*
// Function to apply two functions sequentially
function applyFunctions(function1, function2) {
  const finalResult = function2(function1());
  console.log(finalResult);
}
function function1() {
  return 10;
}
function function2(number) {
  return number * 2;
}
applyFunctions(function1, function2); // Example usage

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// *-*-*-*-* Feature request *-*-*-*-*
function oddEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even!`);
  } else {
    console.log(`${num} is Odd!`);
  }
}

oddEven(200);

function squareOf(num) {
  const result = num * num;
  console.log(`Square of ${num} is ${result}`);
}

squareOf(2);

const concatinate = function (str1, str2) {
  const join = str1 + str2;
  console.log(`The concatinated string is ${join}`);
};

concatinate("Java", "Script");

const sumOf = (num1, num2) => {
  const result = num1 + num2;
  console.log(`Sum of ${num1} and ${num2} is ${result}`);
};

sumOf(5, 41);

function greet(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}
function printGreet() {
  console.log("Hello!");
}

greet(printGreet, 4);
