"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = 'Audio';
const if = 23;

---------------------------

function logger() {
  console.log("My name is saibi");
}

logger();
logger();
logger();

function fruitProcess(apples, orages) {
  const juice = `Juice with ${apples} apples and ${orages} orages`;
  return juice;
}

const appleJuice = fruitProcess(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcess(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
console.log(typeof num);

---------------------------

const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

---------------------------

// Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1976, "saibi"));
console.log(yearsUntilRetirement(1980, "Bob"));

---------------------------


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcess(apples, orages) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(orages);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orage`;
  return juice;
}

console.log(fruitProcess(2, 3));

---------------------------

vscode OPTION + UP/DOWN 


const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1976, "saibi"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(31, 29, 30);

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
