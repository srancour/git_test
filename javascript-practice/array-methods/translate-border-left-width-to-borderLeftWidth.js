// Take in string with "-" between words
// Remove "-" and capitalize every word after the initial
// Split on "-" to make an array of the words
// Iterate through array and capitalize first letter of each word except first word
// Join the array back together
// Return camel word back
let log = console.log;

function camelize(str) {
    return str
    .split(`-`) // split on the - and makes an array with each word
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) // skip the first word, all the rest uppercase the first letter and combine back with the rest of the word
    .join(``); // join all of the words back together
}

log(camelize("background-color-test"));