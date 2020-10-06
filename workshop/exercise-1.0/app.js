// Exercise 1.0
// ------------ 
// document.getElementById("main").onclick = clickFunction 
// function clickFunction () { 
//     let message = document.body.createElement("p");  

//     message.innerText= "You did it!";
// }
  
window.addEventListener("click", () => { 
    let hello = document.createElement("p"); 
    hello.innerText = "You clicked!";  

    let main = document.getElementById("main");  
    main.appendChild(hello);
    
});
