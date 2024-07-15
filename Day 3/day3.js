// *-*-*-*-* Activity 1 *-*-*-*-*
// Check if a number is negative, zero, or positive
let num = 8;

if (num < 0) {
  console.log("Number is Negative!");
} else if (num === 0) {
  console.log("It's Zero!");
} else {
  console.log("Number is Positive!");
}

// *-*-*-*-* Activity 2 *-*-*-*-*
// Check if a person is eligible to vote based on their age
let age = 54;

if (age >= 18) {
  console.log(`Your age is ${age}, so you are eligible to vote!`);
}

// *-*-*-*-* Activity 3 *-*-*-*-*
// Determine the largest number among three given numbers
let num1 = 56;
let num2 = 48;
let num3 = 114;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is the largest number`);
  } else {
    console.log(`${num3} is the largest number`);
  }
} else if (num2 > num3) {
  console.log(`${num2} is the largest number`);
} else {
  console.log(`${num3} is the largest number`);
}

// *-*-*-*-* Activity 4 *-*-*-*-*
// Print the name of the day based on its number
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// *-*-*-*-* Activity 5 *-*-*-*-*
// Assign a grade based on the score and print a corresponding message
let score = 100; // Assuming score is a string representing a number
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    console.log("Grade:", grade, "->", "Absolute Perfection!!!");
    break;

  case score >= 75 && score <= 89:
    grade = "B";
    console.log("Grade:", grade, "->", "Great Job!");
    break;

  case score >= 65 && score <= 74:
    grade = "C";
    console.log("Grade:", grade, "->", "Good Job, But Keep Trying");
    break;

  case score >= 55 && score <= 64:
    grade = "D";
    console.log("Grade:", grade, "->", "Try Harder!");
    break;

  case score >= 33 && score <= 54:
    grade = "E";
    console.log("Grade:", grade, "->", "You Need Extra Tuitions!");
    break;

  default:
    grade = "F";
    console.log(
      "Grade:",
      grade,
      "->",
      "You are not made for this! Do something else!"
    );
}

// *-*-*-*-* Activity 6 *-*-*-*-*
// Check if a number is even or odd using a ternary operator
let number = 3;

number % 2 === 0
  ? console.log("Number is Even!")
  : console.log("Number is Odd!");

// *-*-*-*-* Activity 7 *-*-*-*-*
// Check if a year is a leap year
let year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// *-*-*-*-* Activity 8 *-*-*-*-*
// Function to check if a number is negative, zero, or positive
function checkPosNeg(num) {
  if (num < 0) {
    console.log("Number is Negative!");
  } else if (num === 0) {
    console.log("It's Zero!");
  } else {
    console.log("Number is Positive!");
  }
}

checkPosNeg(0);

// *-*-*-*-* Activity 9 *-*-*-*-*
// Function to check if a person is eligible to vote based on their age
function votingEligibility(age) {
  if (age >= 18) {
    console.log(`Your age is ${age}, so you are eligible to vote!`);
  } else {
    console.log(`Your age is ${age}, You are just a kid!`);
  }
}

votingEligibility(24);

// *-*-*-*-* Activity 10 *-*-*-*-*
// Function to print the name of the day based on its number
function dayOfTheWeek(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
  }
}

dayOfTheWeek(5);

// *-*-*-*-* Activity 11 *-*-*-*-*
// Function to assign a grade based on the score and print a corresponding message
function checkGrades(score) {
  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      console.log("Grade:", grade, "->", "Absolute Perfection!!!");
      break;
    case score >= 75 && score <= 89:
      grade = "B";
      console.log("Grade:", grade, "->", "Great Job!");
      break;
    case score >= 65 && score <= 74:
      grade = "C";
      console.log("Grade:", grade, "->", "Good Job, But Keep Trying");
      break;
    case score >= 55 && score <= 64:
      grade = "D";
      console.log("Grade:", grade, "->", "Try Harder!");
      break;
    case score >= 33 && score <= 54:
      grade = "E";
      console.log("Grade:", grade, "->", "You Need Extra Tuitions!");
      break;
    default:
      grade = "F";
      console.log(
        "Grade:",
        grade,
        "->",
        "You are not made for this! Do something else!"
      );
  }
}

checkGrades(80.2);

// *-*-*-*-* Activity 12 *-*-*-*-*
// Function to check if a year is a leap year
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

checkLeapYear(2027);
