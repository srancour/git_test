let log = console.log;

let john = {
    name: "John", 
    age: 25
};
let pete = {
    name: "Pete", 
    age: 30
};
let mary = {
    name: "Mary", 
    age: 28
};

let arr = [pete, john, mary];

function sortByAge (users) {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

log(arr[0].name);
log(arr[1].name);
log(arr[2].name);