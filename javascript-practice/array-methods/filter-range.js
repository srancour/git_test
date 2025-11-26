// Take in array and value a and b
// Check for all values in array between a and b inclusively
// Return new array of all values that match
let log = console.log;

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
    return arr.filter(
        (num) => num >= a && num <= b
    ); // take all values in the array greater than or equal to a and less than or equal to b and put them into a new array
}

log(arr);
log(filtered);