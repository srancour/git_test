function add7(number) {
    console.log(number + 7);
}
add7(10);

function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 2);

function capitalize(string) {
    let firstLetter = string.charAt(0);
    let remainingLetters = string.substring(1);
    firstLetter = firstLetter.toUpperCase();
    remainingLetters = remainingLetters.toLowerCase();
    string = firstLetter + remainingLetters;
    console.log(string);
}
capitalize("abcd");
capitalize("ABCD");
capitalize("aBcD");

function lastLetter(string) {
    let last = string.slice(-1);
    console.log(last);
}
lastLetter("abcd");
