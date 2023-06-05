/*
let js = "amazing";
console.log(1 + 2 + 3 + 4 + 5);
console.log("jonas");
console.log(js);

let PI = 3.14;
let myName = "saibi";

let myCountry = "Korea";
let myContinent = "Asia";
let myPopulation = 50000000;
console.log(myCountry);
console.log(myContinent);
console.log(myPopulation);
let javascriptIsFun = true;
console.log(typeof false);
console.log(typeof 23);
console.log(typeof "hello");
console.log(typeof javascriptIsFun);
javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);
javascriptIsFun = 1;
console.log(typeof javascriptIsFun);

let year;
console.log(year);

year = 2023;
console.log(typeof year);

console.log(typeof null);

const NOW = 2023;
const AGE_SAIBI = NOW - 1976;
const AGE_SARAH = NOW - 2018;

console.log(AGE_SAIBI, AGE_SARAH);

const IDX_MASS = 0;
const IDX_HEIGHT = 1;
const IDX_BMI = 2;

// TEST DATA 1
// let mark = [78, 1.69, 0];
// let john = [92, 1.95, 0];

// TEST DATA 2
let mark = [95, 1.88, 0];
let john = [85, 1.76, 0];

function bmi(mass, height) {
  return mass / height ** 2;
}

mark[IDX_BMI] = bmi(mark[IDX_MASS], mark[IDX_HEIGHT]);
john[IDX_BMI] = bmi(john[IDX_MASS], john[IDX_HEIGHT]);

let markHigherBMI = mark[IDX_BMI] > john[IDX_BMI];

console.log(mark[IDX_BMI], john[IDX_BMI], markHigherBMI);

const year = 2037;
const birthYear = 1976;

const age = "I am " + (year - birthYear) + " years old.";
const age2 = `I am ${year - birthYear} years old`;

console.log(age, age2);
console.log(`template literal
next line
next line`);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂 
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI ${BMIMak} is higher than John's ${BMIJohn}!`);
} else if (BMIMark < BMIJohn) {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} else {
  console.log("The same BMI.");
}

const inputYear = "1991";
console.log(Number(inputYear) + 18);
*/
/* Write your code below. Good luck! 🙂 */

const bill = 275;
const percent = bill >= 50 && bill <= 300 ? 15 : 20;
const tip = (bill * percent) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
