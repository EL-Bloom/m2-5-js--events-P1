// Exercise 3
//
// 1. Write a function accepts a food item as an argument and returns the proper beverage pairing.
// e.g. getPairing('burger') returns 'beer'.

// - if the provided argument is not a string, return "I didn't get that!".

function getPairing(foodItem) {

let foodPairings = { 
  burger: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "champagne",
};
 

return foodPairings[foodItem]; 
}
 console.log(getPairing("burger"));

// const {burger, fish, beef, strawberries} = foodPairings  
// const food =  {burger, fish, beef, strawberries}; 

const getPairing = (key) => {  
// if (typeof food. !== "string") {
//   console.log("I didn't get that!");
  
 
} 
// }

// console.log(getPairing(burger));

  // if (typeOf foodPairings.value === "string") { 
    // const beverage = find(foodPairings.key); 
    // return beverage;
  // } 
  // else { 
  //   console.log("I didn't get that!");
  // }

// for (const [key, value] of Object.entries(foodPairings)) { 
//   console.log(`${key}: ${value}`); 
//////////////
// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getPairing;
