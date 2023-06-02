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
*/

const IDX_MASS = 0;
const IDX_HEIGHT = 1;
const IDX_BMI = 2;

/*
TEST DATA 1
let mark = [78, 1.69, 0];
let john = [92, 1.95, 0];
*/

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
