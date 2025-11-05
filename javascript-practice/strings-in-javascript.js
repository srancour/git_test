const string = "The revolution will not be televised.";
console.log(string);

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// const badQuotes = 'This is not allowed!";

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2);

const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
}%.`;
console.log(output);

const newLine = `One day you finally knew
what you had to do, and began,`;
console.log(newLine);

const newLine2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newLine2);

// const badQuotes = "She said "I think so!"";

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);