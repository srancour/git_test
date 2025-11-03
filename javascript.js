// Your JavaScript goes here!
console.log("Testing this out")

let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;
console.log(age);

age = 54;

console.log(age);

const pi = 3.14;

console.log(pi);

console.log((3 + 2) - 76 * (1 + 1));

console.log(23 + 97 + 4 + 64 + 85 + 90);

console.log((4 + 6 + 9) / 77);

let a = 10;

console.log(a);

a = 13;

console.log(a);

let b = 7 * a;

console.log(b);

const max = 57;

const actual = max - 13;

const percentage = actual / max;

console.log(percentage);

let admin = name;

console.log(admin);

let ourPlanetName = "Earth";

let currentUserName = name + " " + surname;

console.log(currentUserName);

const BIRTHDAY = '18.04.1982';

// const userAge = somecode(BIRTHDAY);

let x = 1;

x = -x;
console.log(x)

let z = 1, y = 3;
console.log(y - z);

console.log(5 % 2);
console.log(8 % 3);
console.log(8 % 4);

console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

console.log(4 ** (1/2));
console.log(8 ** (1/3));

let s = "my" + "string";
console.log(s);

console.log('1' + 2);
console.log(2 + '1');

console.log(2 + 2 + '1');
console.log('1' + 2 + 2);

console.log(6 - '2');
console.log('6' / 2);

x = 1;
console.log(+x);

y = -2;
console.log(+y);

console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";

console.log(apples + oranges);
console.log(+apples + +oranges);

x = 2 * 2 + 1;
console.log(x);

a = 1;
b = 2;
let c = 3 - (a = b + 1);

console.log(a);
console.log(c);

a = b = c = 2 + 2;

console.log(a);
console.log(b);
console.log(c);

c = 2 + 2;
b = c;
a = b;

let n = 2;
n = n + 5;
n = n * 2;

console.log(n);

n = 2;
n += 5;
n *= 2;

console.log(n);

let counter = 2;
counter++;
console.log(counter);

counter = 2;
counter--;
console.log(counter);

counter = 1;
a = ++counter;

console.log(a);

counter = 1;
a = counter++;

console.log(a);

counter = 1;
console.log(2 * ++counter);

counter = 1;
console.log(2 * counter++);

counter = 1;
console.log(2 * counter);
counter++;

a = (1 + 2, 3 + 4);
console.log(a);

for(a = 1, b = 3, c = a * b; a < 10; a++) {

}

a = 1, b = 1;

c = ++a;
let d = b++;

console.log(c);
console.log(d);

a = 2;

x = 1 + (a *= 2);
console.log(x);

x = "" + 1 + 0;
console.log(x); // "10"
x = "" - 1 + 0;
console.log(x); // -1
x = true + false;
console.log(x); // 1
x = 6 / "3";
console.log(x); // 2
x = "2" * "3";
console.log(x); // 6
x = 4 + 5 + "px";
console.log(x); // "9px"
x = "$" + 4 + 5;
console.log(x); // "$45"
x = "4" - 2;
console.log(x); // 2
x = "4px" - 2;
console.log(x); // NaN
x = "  -9  " + 5;
console.log(x); // " -9 5"
x = "  -9  " - 5;
console.log(x); // -14
x = null + 1;
console.log(x); // 1
x = undefined + 1;
console.log(x); // NaN
x = " \t \n" - 2;
console.log(x); // -2

a = prompt("First number?", 1);
b = prompt("Second number?", 2);

console.log(+a + +b);