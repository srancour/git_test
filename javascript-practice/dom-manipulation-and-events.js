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