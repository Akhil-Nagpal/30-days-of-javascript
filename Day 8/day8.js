// *-*-*-*-* Activity 1 *-*-*-*-*
let userName = "Ak"; // Define a variable for the user's name
let age = 24; // Define a variable for the user's age

console.log(`${userName} is ${age} year's old!`); // Output the user's name and age

// *-*-*-*-* Activity 2 *-*-*-*-*
console.log(`Hello My name is ${userName}, and I'm ${age} years old!
An aspiring Frontend Engineer!`); // Output a greeting with the user's name and age

// *-*-*-*-* Activity 3 *-*-*-*-*
const nums = [1, 2, 3, 4, 5]; // Define an array of numbers

const [num1, num2] = nums; // Destructure the first two elements from the array
console.log(num1, ",", num2); // Output the first two elements of the array

// *-*-*-*-* Activity 4 *-*-*-*-*
const book = {
  title: "Twilight Saga", // Book title
  author: "Stephenie Meyer", // Book author
  year: "2005-2016", // Publication years
};

const { title, author } = book; // Destructure title and author from the book object
console.log(`${title} is written by ${author}`); // Output the book's title and author

// *-*-*-*-* Activity 5 *-*-*-*-*
const fruits = ["apple", "banana", "cherry", "date", "elderberry"]; // Array of fruits

const vegies = [
  "spinach",
  "broccoli",
  "kale",
  "carrots",
  "bell peppers",
]; // Array of vegetables

const healthyFood = [...fruits, ...vegies]; // Combine fruits and vegetables into a single array
console.log(healthyFood); // Output the combined array

// *-*-*-*-* Activity 6 *-*-*-*-*
function sum(...nums) {
  let total = 0; // Initialize total to 0

  for (const num of nums) {
    // Iterate over each number in the argument list
    total = total + num; // Add the current number to total
  }

  return total; // Return the total sum
}

console.log(sum(1, 2, 3, 4, 5)); // Output the sum of the numbers

// *-*-*-*-* Activity 7 *-*-*-*-*
function product(num1, num2 = 1) {
  return num1 * num2; // Return the product of num1 and num2, defaulting num2 to 1 if not provided
}
console.log(product(10, 5)); // Output the product of 10 and 5
console.log(product(4)); // Output the product of 4 and the default value 1

// *-*-*-*-* Activity 8 *-*-*-*-*
function getLaptop(company, modal, price) {
  return {
    company: company, // Laptop company
    modal: modal, // Laptop model
    price: price, // Laptop price

    shareDetails: function () {
      // Method to display laptop details
      console.log(
        `You can buy ${this.company} ${this.modal} only for ${this.price}`
      );
    },
  };
}
const laptop = getLaptop("Apple", "Macbook", "$1500"); // Create a laptop object

console.log(laptop); // Output the laptop object
console.log(laptop.shareDetails()); // Output the laptop details using the method

// *-*-*-*-* Activity 9 *-*-*-*-*
const key1 = "BlackRock"; // Key for company name
const key2 = "Assets_Of"; // Key for assets
const key3 = "Aladdin"; // Key for description

const companyDetails = {
  [key1]: "Assest Managment Comapny", // Company name
  [key2]: "$10 Trillions", // Assets
  [key3]: "is a Software created to do predictions using data", // Description
};

console.log(companyDetails); // Output the company details object
