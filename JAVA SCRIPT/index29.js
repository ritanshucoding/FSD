// Practice Question: Add the following element to the contaoner using only java script and the DOM methods.

// 1.a<p> with red text that says "hey i'm red!" 

let para1 = document.createElement("p");
para1.innerText = "hey i'm red!";
document.querySelector("body").appendChild(para1);
para1.classList.add("red");

// an <h3> with the blue text that says "i'm a blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").appendChild(h3);
h3.classList.add("blue");
// 1.c <div> with a black border and pink background color with the following elements inside of it:
// 1.c.i <h1> that says "I'm in a div"
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
// 1.c.ii <p> that says "ME TOO!"
let para2 = document.createElement("p");
para2.innerText = "ME TOO!";
// 1.c.iii Append the h1 and p to the div
let div = document.createElement("div");
div.appendChild(h1);
div.appendChild(para2);

document.querySelector("body").appendChild(div);