const container = document.querySelector("#container");

const firstParagraph = document.createElement("p");
firstParagraph.style.color = "red";
firstParagraph.textContent = "Hey I'm Red";

container.appendChild(firstParagraph);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.style.cssText = "border-style: solid; background-color: pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

newDiv.appendChild(h1);

const secondParagraph = document.createElement("p");
secondParagraph.textContent = "ME TOO!"

newDiv.appendChild(secondParagraph);

container.appendChild(newDiv);

// Method Two
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");

// Method Three
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World");
})

// Function Method One, Two, and Three
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
// End Function Method One

// Function Method Two
const fBtn2 = document.querySelector("#fBtn2");
fBtn2.onclick = alertFunction;

// Function Method Three
const fBtn3 = document.querySelector("#fBtn3");
// fBtn3.addEventListener("click", alertFunction);
fBtn3.addEventListener("click", function(e){
    console.log(e.target);
    e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})