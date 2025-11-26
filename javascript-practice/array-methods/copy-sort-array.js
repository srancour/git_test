// Take in an array
// Sort the array and save to new array

let log = console.log;

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort(); // Slice creates a copy of the array and then sort that
}

let sorted = copySorted(arr);

log(sorted);
log(arr);