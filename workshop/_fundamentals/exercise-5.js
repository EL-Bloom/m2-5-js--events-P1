// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => { 
  switch(month) {
  case "January": 
  console.log("31 days"); 
  break; 
  case "February": 
  console.log("28 days"); 
  break; 
  case "March": 
  console.log("31 days"); 
  break; 
  case "April": 
  console.log("30 days"); 
  break; 
  case "May": 
  console.log("31 days"); 
  break; 
  case "June": 
  console.log("30 days"); 
  break; 
  case "July": 
  console.log("31 days"); 
  break; 
  case "August": 
  console.log("31 days"); 
  break; 
  case "September": 
  console.log("30 days"); 
  break; 
  case "October": 
  console.log("31 days"); 
  break; 
  case "November": 
  console.log("30 days"); 
  break; 
  case "December": 
  console.log("31 days"); 
  break;
  default:
    return error;
  };
}; 
console.log(getDaysInMonth("December"));

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
