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
    age: 29
};

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce((current, user) => current + user.age, 0) / users.length;
};

log(getAverageAge(arr));