let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);

char = text.charCodeAt(0);
console.log(char);

let code = text.codePointAt(0);
console.log(code);

const name = "W3Schools";
let letter = name.at(2);
console.log(letter);

letter = name[2];
console.log(letter);

char = text[0];
console.log(char);

text[0] = "A";
console.log(text[0]);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

text = "Hello" + " " + "World!";
console.log(text);
text = "Hello".concat(" ", "World!");
console.log(text);

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

part = text.slice(7);
console.log(part);

part = text.slice(-12);
console.log(part);

part = text.slice(-12, -6);
console.log(part);

part = text.substring(7, 13);
console.log(part);

text1 = "Hello World!";
text2 = text1.toUpperCase();
console.log(text2);

text2 = text1.toLowerCase();
console.log(text2);

text = "Hello world!";
let result = text.isWellFormed();
console.log(result);

text = "Hello World \uD800";
result = text.isWellFormed();
console.log(result);

result = text.toWellFormed();
console.log(result);

text1 = "      Hello World!      ";
text2 = text1.trim();
console.log(text2);

text2 = text1.trimStart();
console.log(text2);

text2 = text1.trimEnd();
console.log(text2);

text = "5";
let padded = text.padStart(4,"0");
console.log(padded);

padded = text.padStart(4,"x");
console.log(padded);

let numb = 5;
text = numb.toString();
padded = text.padStart(4,"0");
console.log(padded);

text = "5";
padded = text.padEnd(4,"0");
console.log(padded);

padded = text.padEnd(4,"x");
console.log(padded);

text = numb.toString();
padded = text.padEnd(4,"0");
console.log(padded);

text = "Hello world!";
result = text.repeat(2);
console.log(result);

result = text.repeat(4);
console.log(result);

text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

text = "Please visit Microsoft and Microsoft!";
newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

text = "Please visit Microsoft!";
newText = text.replace("MICROSOFT", "W3Schools");
console.log(newText);

newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);

text = "Please visit Microsoft and Microsoft!";
newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);

text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");
console.log(text);

text = "a, b, c, d, e, f";
let myArray = text.split(",");
console.log(myArray);

myArray = text.split("");
console.log(myArray);