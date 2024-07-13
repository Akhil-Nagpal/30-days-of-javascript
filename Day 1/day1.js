var age = 24;
console.log(age);

let greetings = "Hello Everyone! Ak is Here!";
console.log(greetings);

const islogIn = true;
console.log(islogIn);

// Number
let userAge = 28;
console.log(typeof userAge);

// String
let username = "Akhil Nagpal";
console.log(typeof username);

// Boolean
let isLoggedIn = false;
console.log(typeof isLoggedIn);

// Object
const userDetails = {
  id: 1,
  Name: "Akhil Nagpal",
  email: "ak@ak.com",
  location: "India",
  age: 24,
};
console.log(typeof userDetails);

// Array
const shoppingCart = [
  "Macbook Pro",
  "iPhone 15",
  "iPad Pro 13-inches",
  "Sony PlayStation 5",
];
console.log(typeof shoppingCart);

let message = "Second Awakening";
console.log(message);

message = "Player have to tarin to gain several powers!";
console.log(message);

const message2 = "Second Awakening Successful";
console.log(message2);
try {
  message2 = "Player got all powers!";
} catch (error) {
  console.log(error);
}

let num = 15;
let str = "Hello Everyone!";
let bool = true;
let obj = { id: 1, fullName: "Akhil Nagpal" };
let arr = ["Dillkhush", "Akhil", "Anny"];

function varntype(...arguments) {
  //   console.log(arguments);
  const arr = [];
  if (Array.isArray(arguments[0])) {
    // console.log(arguments[0]);
    arguments[0].forEach((arg) => {
      //   console.log(arg);
      arr.push({
        "variable value": arg,
        "type of variable is": typeof arg,
      });
    });
  } else {
    arguments.forEach((arg) => {
      arr.push({
        "variable value": arg,
        "type of variable is": typeof arg,
      });
    });
  }
  console.table(arr);
}
diffVars = [num, str, obj, arr, bool];
varntype(diffVars);

let string = "Second Awakening";
console.log(string);

string = "Player have to tarin to gain several powers!";
console.log(string);

const string2 = "Second Awakening Successful";
console.log(string2);
try {
  string2 = "Player got all powers!";
} catch (error) {
  console.log(error);
}
