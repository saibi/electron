"use strict";

/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    // for ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
*/

/*
const flight = "LH234";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passenger === 24739479284) {
        alert("Check in");
    } else {
        alert("Wrong passport!");
    }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

*/

/*
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
    console.log("👋");
};

document.body.addEventListener("click", high5);
*/

/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");
greet("hello")("World");

const greetArrow = (greeting) =>
    function (name) {
        console.log(`${greeting} ${name}`);
    };

const greetArrow2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow("Hi")("HO");

*/
