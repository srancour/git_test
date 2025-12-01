// Take in array
// Create new array that contains only the unique elements from the original

let log = console.log;

function unique(arr) {
    let result = []; // New array

    for (let str of arr) { // for each string in the array
        if(!result.includes(str)) { // if the string is not included in the result array
            result.push(str); // add string to the result array
        }
    }
    
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

log(unique(strings));
log(strings);