let log = console.log;

let john = {
    name: "John",
    surname: "Smith",
    id: 1,
};
let pete = {
    name: "Pete",
    surname: "Hunt",
    id: 2,
};
let mary = {
    name: "Mary",
    surname: "Key",
    id: 3,
};

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));

log(usersMapped[0].id);
log(usersMapped[0].fullName);