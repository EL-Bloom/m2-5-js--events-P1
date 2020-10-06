// Exercise 1.1
// ------------ 

const body = document.querySelector('body'); 
const result = document.getElementById('result'); 

let clicked = false;  

document.body.addEventListener('click', () =>{  
    clicked = true;
});
let timeOut = setTimeout(() => { 
if (clicked == true){ 
    result.innerText = "You won!"; 
    console.log("you won!"); 
    body.removeEventListener('click', timeOut);
} 
else {
        console.log("YOU LOST!");
        result.innerText = "You LOST!"; 
        body.removeEventListener('click', timeOut);
    }}, 1000);
    






