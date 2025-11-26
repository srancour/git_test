// Take in array
// Randomly choose sort order

let log = console.log;

let arr = [1, 2, 3];

function shuffle(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

log(shuffle(arr));
log(shuffle(arr));
log(shuffle(arr));