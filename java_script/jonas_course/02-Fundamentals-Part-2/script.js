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

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

const jonas = ["kim", "young", "min", 2037 - 1991];

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Sebastian");
console.log(friends);
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

const saibiObject = {
  firstName: "Youngmin",
  lastName: "Kim",
  age: 2023 - 1976,
  job: "engineer",
  friends: ["tom", "peter", "steven"],
};

console.log(saibiObject);

// dot notation
console.log(saibiObject.lastName);

// bracket notation
const nameKey = "Name";
console.log(saibiObject["last" + nameKey]);
console.log(saibiObject["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know? Choose between firstName, lastName, age, job, and friends"
);

if (saibiObject[interestedIn]) {
  console.log(saibiObject[interestedIn]);
} else {
  console.log("Wrong request!");
}

saibiObject.location = "Seoul";
saibiObject["email"] = "kimyoungmin@gmail.com";

console.log(
  `${saibiObject.firstName} has ${saibiObject.friends.length} friends, and his best friends is called ${saibiObject.friends[0]}.`
);

const saibi = {
  firstName: "Youngmin",
  lastName: "Kim",
  birthYear: 1976,
  job: "engineer",
  friends: ["tom", "peter", "steven"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};
console.log(saibi.calcAge(1991));
console.log(saibi["calcAge"](1991));

const saibi = {
  firstName: "Youngmin",
  lastName: "Kim",
  birthYear: 1976,
  job: "engineer",
  friends: ["tom", "peter", "steven"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(saibi.calcAge());
console.log(saibi["calcAge"]());
console.log(saibi.age);
console.log(saibi.age);
console.log(saibi.age);
console.log(saibi.age);
console.log(saibi.getSummary());

*/

/* Write your code below. Good luck! 🙂 */

/*
const mark = {
  fullName: "Mark Miller",
  mass: 0.0,
  height: 0.0,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 0.0,
  height: 0.0,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.mass = 78.0;
mark.height = 1.69;
mark.calcBMI();

john.mass = 92.0;
john.height = 1.95;
john.calcBMI();

if (mark.bmi >= john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 💪`);
}

const jonasArray = ["jonas", "saibi", 2023, true];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  types[i] = typeof jonasArray[i];
}

console.log(types);

const a = ["saibi", 18, 2023, true];
for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == "number") {
    console.log(a[i]);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];

  console.log(`${tips[i]} ${totals[i]}`);
}

const calcAverage = function (values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
};

console.log(`average ${calcAverage(totals)}`);
