// Problem: 
// Write a program that takes a user’s input and prints the numbers from one to the number the user entered.
// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.

// Planning:
// Need an input for the user to input a number
//  This will all be done in the console
// This will only be getting information from the user, no other systems
// The desired output is:
// A list of numbers from 1 to the number the user entered. 
// When the number is divisible by 3 the output will be Fizz instead of the number (e.g. 3, 6, 9 would all be Fizz).
// When the number is divisible by 5 the output will be Buzz instead of the number (e.g. 5 and 10 would both be Buzz). When the number is divisible by both 3 and 5 the output will be FizzBuzz instead of the number (e.g. 15, 30, and 45 would all be FizzBuzz)

// pseudocode:
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Else print the current number

// User inputs a number and change it from a string to a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // If the current number is divisible by 3 and 5 print "FizzBuzz"
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // If the current number is divisible by 3 print "Fizz"
        console.log("Fizz");
    } else if (i % 5 === 0) {
        // If the current number is divisible by 5 print "Buzz"
        console.log("Buzz");
    } else {
        // Else print the current number
        console.log(i);
    }
}