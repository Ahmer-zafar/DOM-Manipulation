const ahmer = document.createElement('p')
ahmer.innerHTML = "Hey I’m red!";
ahmer.style.color = "red";
document.body.appendChild(ahmer);


const headr = document.createElement("h3")
headr.innerHTML = "hey i am blue";
headr.style.color = "blue";
document.body.appendChild(headr);

/*
Create and add a <div> with a black border and pink background color 
with the following elements inside of it:
another <h1> that says "I’m in a div"
a <p> that says "ME TOO!"
Hint for this one: after creating the div with createElement, 
append the <h1> and <p> to it before adding it to the document.body.
*/
const divBlock = document.createElement("div");
divBlock.style.border = "black";
divBlock.style.backgroundColor = "pink";


const heade = document.createElement("h1");
heade.innerHTML = "I’m in a div";
//document.body.appendChild(heade)
divBlock.appendChild(heade)

const parag = document.createElement("p")
parag.innerHTML = "ME TOO!";
divBlock.appendChild(parag);

document.body.appendChild(divBlock);