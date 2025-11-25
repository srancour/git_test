// Take in array of numbers
// Find evens
// Multiply evens by 3
// Add all numbers in array
const log = console.log;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
// const evenNums = arr.filter((num) => num % 2 === 0);

// Triple the even numbers
// const tripleEvenNums = evenNums.map((num) => num * 3);

// Add all tripled evens together
// const addedTripleEvenNums = tripleEvenNums.reduce((total, currentItem) => {
//     return total + currentItem;
// });

// log(evenNums);
// log(tripleEvenNums);
// log(addedTripleEvenNums);

// Function of all of the above simplified down
function sumOfTripleEvens(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((total, currentItem) => total + currentItem);
}

log(sumOfTripleEvens(arr));