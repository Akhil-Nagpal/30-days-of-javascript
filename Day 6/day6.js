// *-*-*-*-* Acticity 1 *-*-*-*-*
// Create an array of numbers
const users = [1, 2, 3, 4, 5];
console.log(users); // Print the entire users array

// *-*-*-*-* Acticity 2 *-*-*-*-*
// Create another array of numbers
const array = [25, 42, 68, 31];

// *-*-*-*-* Acticity 3 *-*-*-*-*
// Access the first element using its index (0-based indexing)
const first = array[0];
console.log("First Element:", first);

// *-*-*-*-* Acticity 4 *-*-*-*-*
// Access the last element using array length and subtracting 1
const second = array[array.length - 1];
console.log("Second Element:", second);

// *-*-*-*-* Acticity 5 *-*-*-*-*
// Create another array of numbers
const arr = [1, 92, 56, 25, 241, 6, 7, 11];

// *-*-*-*-* Acticity 6 *-*-*-*-*
// Add "ice" to the end of the array using push and store the new length
const push = arr.push("ice");
console.log(arr); // Print the modified arr array

// *-*-*-*-* Acticity 7 *-*-*-*-*
// Remove the last element from the array using pop and store the removed element
const pop = arr.pop();
console.log(arr); // Print the modified arr array

// *-*-*-*-* Acticity 8 *-*-*-*-*
// Remove the first element from the array using shift and store the removed element
const shift = arr.shift();
console.log(arr); // Print the modified arr array

// *-*-*-*-* Acticity 9 *-*-*-*-*
// Add "cream" to the beginning of the array using unshift and store the new length
const unShift = arr.unshift("cream");
console.log(arr); // Print the modified arr array

// *-*-*-*-* Acticity 10 *-*-*-*-*
// Function to square each element of an array
function double() {
  const array = [5, 2, 4, 9, 28];

  // Use map to create a new array with squares of elements
  const newArray = array.map((num) => {
    return num * num;
  });

  return newArray;
}

console.log(double()); // Print the result of the double function

// *-*-*-*-* Acticity 11 *-*-*-*-*
// Function to filter even numbers from an array
function filter() {
  const array = [1, 55, 38, 6, 18, 256, 109, 97, 63, 8];

  // Use filter to create a new array with only even numbers
  const filtered = array.filter((num) => {
    return num % 2 === 0;
  });

  return filtered;
}
console.log(filter()); // Print the result of the filter function

// *-*-*-*-* Acticity 12 *-*-*-*-*
// Function to get the sum of all elements in an array
function reduce() {
  const array = [5, 2, 4, 9, 28];

  // Use reduce to get the sum of all elements
  const reduced = array.reduce((total, currentNum) => {
    return total + currentNum;
  });

  return reduced;
}

console.log(reduce()); // Print the result of the reduce function

// *-*-*-*-* Acticity 13 *-*-*-*-*
// Create an array of numbers
const persons = [1, 2, 3, 4, 5];

// Loop through each element in the persons array and print it
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}

// *-*-*-*-* Acticity 14 *-*-*-*-*
// Create an array of names
const voters = ["Ak", "Prateek", "Anny", "Dilkhush"];

// Loop through each element in the voters array and print it using forEach
voters.forEach((element) => {
  console.log(element);
});

// Create an empty 2D array (matrix)
const mat = [];

// *-*-*-*-* Acticity 15 *-*-*-*-*
// Function to create a 2D matrix filled with sequential numbers
function matrix(rows, cols) {
  for (let i = 0; i < rows; i++) {
    mat.push([]); // Add a new row to the matrix

    for (j = 0; j < cols; j++) {
      // Calculate the value for each element in the matrix based on row and column
      mat[i].push(i * cols + j + 1);
    }
  }
  return mat;
}

console.log(matrix(3, 3)); // Print the result of the matrix function (3x3 matrix)

// *-*-*-*-* Acticity 16 *-*-*-*-*
// Access an element from the matrix using row and column indices (0-based indexing)
const access = mat[1][2];
console.log("The element at row 1, column 2 is:", access);
