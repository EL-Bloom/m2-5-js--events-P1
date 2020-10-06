// Exercise 1.2
// ------------

const body = document.querySelector("body");
const result = document.getElementById("result");
const time = document.getElementById("time");
let random = Math.floor(Math.random() * 5) + 1;
let clicked = false;
//1. Say Amount of Time to Click to User
time.innerHTML = `${random}`;

console.log(body);
//2.  When the page is clicked before time out, YOU WON
function clickWin() {
  clicked = true;
  result.innerText = "You won!";
  console.log("You won!");
  body.removeEventListener("click", clickWin);
}

setTimeout(() => {
  console.log("timeout running");
  if (!clicked) {
  result.innerText = "You lost!";
  console.log("You lost!");
  }
  body.removeEventListener("click", clickWin); 
  
}, random * 1000); 


body.addEventListener("click", clickWin);