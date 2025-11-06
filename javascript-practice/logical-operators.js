// Start Logical operators lesson

// alert( true || true);
// alert( false || true);
// alert( true || false);
// alert( false || false); //only false

// if (1 || 0) { //true || false
//     alert( 'truthy!' );
// }

// let hour = 9;

// if (hour < 10 || hour > 18) {
//     alert( 'The office is closed.' );
// }

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//     alert( 'The office is closed.' );
// }

// alert( 1 || 0);

// alert( null || 1);
// alert( null || 0 || 1);

// alert( undefined || null || 0);

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anoynymous");

// true || alert("not printed");
// false || alert("printed");

// alert( true && true); //only true
// alert( false && true);
// alert( true && false);
// alert( false && false);

// let hour = 12;
// let minute = 30;

// if (hour ==12 && minute == 30) {
//     alert( 'The time is 12:30' );
// }

// if (1 && 0) {
//     alert( "won't work, because the result is falsy" );
// }

// if the first operand is truthy,
// AND returns the second operand:
// alert( 1 && 0 );
// alert( 1 && 5 );

// if the first operand is falsy,
// AND returns it. The second operand is ignored
// alert( null && 5 );
// alert( 0 && "no matter what" );

// alert( 1 && 2 && null && 3 );

// alert( 1 && 2 && 3 );

// alert( !true );
// alert( !0 );

// alert( !!"non-empty string" );
// alert( !!null );

// alert( Boolean("non-empty string") );
// alert( Boolean(null) );

// let age = 15;
// if ( age <= 90 && age >= 14 ) {
//     alert( "you are old enough" );
// }

// let age = 13;
// if ( !(age <= 90 && age >= 14) ) {
//     alert( "you are not old enough" );
// }
// if ( age > 90 || age < 14 ) {
//     alert( "you are not old enough" );
// }

// let userName = prompt("Who's there?", "");
// if (userName === "Admin") {
//     let password = prompt("Password?", "");
//     if (password === "TheMaster") {
//         alert("Welcome!");
//     } else if (password === "" || password === null) {
//         alert("Canceled");
//     } else {
//         alert("Wrong password");
//     }
// } else if (userName === "" || userName === null) {
//     alert("Cancelled");
// } else {
//     alert("I don't know you");
// }

// End Logical operators lesson

// Start Making decisions in your code - conditionals

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//     const choice = select.value;

//     // Start switch option
//     switch (choice) {
//         case "sunny":
//             para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//             break;
//         case "rainy":
//             para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//             break;
//         case "snowing":
//             para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//             break;
//         case "overcast":
//             para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//             break;
//         default:
//             para.textContent = "";
//     }
//     // End switch option

    // Start else if option
    // if (choice === "sunny") {
    //     para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    // } else if (choice === "rainy") {
    //     para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    // } else if (choice === "snowing") {
    //     para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    // } else if (choice === "overcast") {
    //     para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    // } else {
    //     para.textContent = "";
    // }
    // End else if option

// }

let cheese = "Cheddar";

if (cheese) {
    console.log("Yay! Cheese available for making cheese on toast.");
} else {
    console.log("No cheese on toast for you today.");
}

let shoppingDone = false;
let childAllowance;

if (shoppingDone) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}

const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}


select.addEventListener("change", () => {
// Start ternary option
//     select.value === "black"
//         ? update("black", "white")
//         : update("white", "black"),
// End ternary option

// Start switch option
const choice = select.value;

switch(choice) {
    case "white":
        update("white", "black");
        break;
    case "black":
        update("black", "white");
        break;
    case "purple":
        update("purple", "white");
        break;
    case "yellow":
        update("yellow", "black");
        break;
    case "psychedelic":
        update("lime", "purple")
        break;
}
// End switch option
});

// End Making decisions in your code - conditionals

// Start Conditional branching: if, '?'

// The name of JavaScript
// let jsName = prompt(`What is the "official" name of JavaScript?`, "");

// if (jsName === "ECMAScript") {
//     alert("Right!");
// } else {
//     alert(`You don't know? "ECMAScript"!`);
// }

// Show the sign
let number = prompt(`What is your number?`, ``);

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert (-1);
} else if (number == 0) {
    alert(0);
}

// Rewrite 'if' into '?'
// let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over'
// }
// let result = (a + b < 4) ? 'Below' :
// 'Over';

// Rewrite 'if...else' into '?'
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// let message = (login == 'Employee') ? 'Hello' :
//             (login == 'Director') ? 'Greetings' :
//             (login == '') ? 'No login' :
//             '';

// End Conditional branching: if, '?'