// Take in array and value a and b
// Check for all values in array between a and b inclusively
// Modify the initial array of all values that match
let log = console.log;

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num < a || num > b) {
            arr.splice(i, 1); // remove the current 1 element if not between a and b
            i--; // move back an element to make sure it goes to the new next element
        }
    }
}

filterRangeInPlace(arr, 1, 4);

log(arr);