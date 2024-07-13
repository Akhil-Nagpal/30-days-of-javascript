// *-*-*-*-* Activity 1 *-*-*-*-*
// Number variable
var age = 24;
console.log(age); // Logs the value of 'age'

// String variable
let greetings = "Hello Everyone! Ak is Here!";
console.log(greetings); // Logs the value of 'greetings'

// *-*-*-*-* Activity 2 *-*-*-*-*
// Boolean constant
const islogIn = true;
console.log(islogIn); // Logs the value of 'islogIn'

// *-*-*-*-* Activity 3 *-*-*-*-*
// Number type
let userAge = 28;
console.log(typeof userAge); // Logs the type of 'userAge'

// String type
let username = "Akhil Nagpal";
console.log(typeof username); // Logs the type of 'username'

// Boolean type
let isLoggedIn = false;
console.log(typeof isLoggedIn); // Logs the type of 'isLoggedIn'

// Object type
const userDetails = {
  id: 1,
  Name: "Akhil Nagpal",
  email: "ak@ak.com",
  location: "India",
  age: 24,
};
console.log(typeof userDetails); // Logs the type of 'userDetails'

// Array type
const shoppingCart = [
  "Macbook Pro",
  "iPhone 15",
  "iPad Pro 13-inches",
  "Sony PlayStation 5",
];
console.log(typeof shoppingCart); // Logs the type of 'shoppingCart'

// *-*-*-*-* Activity 4 *-*-*-*-*
// Variable reassignment for string
let message = "Second Awakening";
console.log(message); // Logs the initial value of 'message'

message = "Player have to train to gain several powers!";
console.log(message); // Logs the updated value of 'message'

// Constant string variable
const message2 = "Second Awakening Successful";
console.log(message2); // Logs the value of 'message2'

// Attempting to reassign a constant variable (will throw an error)
try {
  message2 = "Player got all powers!";
} catch (error) {
  console.log(error); // Logs the error when trying to reassign 'message2'
}

// *-*-*-*-* Activity 5 *-*-*-*-*
// Variables of different types passed to a function
let num = 15;
let str = "Hello Everyone!";
let bool = true;
let obj = { id: 1, fullName: "Akhil Nagpal" };
let arr = ["Dillkhush", "Akhil", "Anny"];
let symbol = Symbol("I am a Symbol!");

// Function to log variable values and types
function logVariableTypes(...args) {
  const typeInfo = args.map((arg) => ({
    "variable value": arg,
    "type of variable is": typeof arg,
  }));

  console.table(typeInfo); // Log the variable values and types as a table
}

logVariableTypes(num, str, obj, bool, arr, symbol); // Logs types and values of 'num', 'str', 'obj', 'bool', 'arr'

// ----- Through Array -----
function logVariableTypes(...args) {
  const array = [];

  args.forEach((arg) => {
    array.push({
      "variable value": arg,
      "type of variable is": typeof arg,
    });
  });
  console.table(array);
}
logVariableTypes(num, str, obj, bool, arr, symbol);

// ----- Another Way -----
// Function to log the types and values of the passed variables
function varntype(...arguments) {
  // Initialize an empty array to store variable information
  const arr = [];

  // Check if the first argument is an array
  if (Array.isArray(arguments[0])) {
    // If it's an array, iterate over each element in the array
    arguments[0].forEach((arg) => {
      // Add an object to 'arr' with the value and type of each element
      arr.push({
        "variable value": arg,
        "type of variable is": typeof arg,
      });
    });
  } else {
    // If it's not an array, iterate over the arguments directly
    arguments.forEach((arg) => {
      // Add an object to 'arr' with the value and type of each argument
      arr.push({
        "variable value": arg,
        "type of variable is": typeof arg,
      });
    });
  }

  // Log the array 'arr' as a table to the console
  console.table(arr);
}

// Group the variables into an array
diffVars = [num, str, obj, arr, bool, symbol];

// Call the function 'varntype' with the array of variables
varntype(diffVars);

// *-*-*-*-* Activity 6 *-*-*-*-*
// Variable reassignment for string
let string = "Second Awakening";
console.log(string); // Logs the initial value of 'string'

string = "Player have to train to gain several powers!";
console.log(string); // Logs the updated value of 'string'

// Constant string variable
const string2 = "Second Awakening Successful";
console.log(string2); // Logs the value of 'string2'

// Attempting to reassign a constant variable (will throw an error)
try {
  string2 = "Player got all powers!";
} catch (error) {
  console.log(error); // Logs the error when trying to reassign 'string2'
}
