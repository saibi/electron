"use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   //   console.log(firstName);

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All items deleted!");
// }

// console.log(this);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// primitive
// let lastname = "Williams";
// let oldLastName = lastname;
// lastname = "Davis";
// console.log(lastname, oldLastName);

// reference
// const jessica = {
//   firstname: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage: ", jessica);
// console.log("After marriage: ", marriedJessica);

// copying objects
// const jessica2 = {
//   firstname: "Jessica2",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Tompson";
// console.log("Before marriage: ", jessica2);
// console.log("After marriage: ", jessicaCopy);

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before marriage: ", jessica2);
// console.log("After marriage: ", jessicaCopy);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic-Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngrediant, ...otherIngredients) {
//     console.log(mainIngrediant);
//     console.log(...otherIngredients);
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(i, el);
// }

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };
// const rest2 = {
//   name: "La Piazza",
//   owner: "Gino",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// const add = function (...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(1, 2, 3, 4, 5, 6, 7);

// const x = [23, 5, 7];
// add(...x);

// // spread operator
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // REST operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "name change";

// console.log(restaurant);
// console.log(restaurantCopy);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

// const str = "jonas";
// const letters = [...str, " ", "S"];
// console.log(letters);

// const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// const newMenu = [...restaurant.mainMenu, "Gnocci", "Burger"];
// console.log(newMenu);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "seoul",
// });

// const { name, openingHours, categories } = restaurant;

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const { menu: myMenu = [], starterMenu: starters = [] } = restaurant;
// console.log(myMenu, starters);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// const newArr2 = [1, 2, arr];
// console.log(newArr2);

// coding challenge #1

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// const [players1, players2] = game.players;
// const [gk, ...fiedPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals("Davis", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// team1 < team2 && console.log("team1 is more likely to win");
// team1 > team2 && console.log("team2 is more likely to win");

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic-Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: openingHours,
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(...otherIngredients);
  },
};

// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.closing?.tue?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? "method does not exist");
// console.log(restaurant.orderDrink?.(0, 1) ?? "method does not exist");

// const users = [{ name: "Jonas", email: "hello@jonas.io" }];

// console.log(users[0]?.name ?? "user array empty");
// console.log(users[1]?.name ?? "user array empty");

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// coding challenge #2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${name}`);
// }

// const oddValues = Object.values(game.odds);
// let sum = 0;
// for (const val of oddValues) {
//   sum += val;
// }
// console.log(sum / oddValues.length);

// for (const [key, value] of Object.entries(game.odds)) {
//   const teamStr = key === "x" ? "draw" : `${game[key]}`;
//   console.log(`Odd of ${teamStr}: ${value}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta"]);

// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are closed");

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// rest.set([1, 2], "test");
// console.log(rest);

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("your answer?"));

// console.log(question.get(question.get("correct") === answer));

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.
// //const events = [...new Set([...gameEvents.values()])];
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);

// // 3
// const averageEventMin = 90 / gameEvents.size;
// console.log(
//   "An event happened, on average, every " + averageEventMin + " minutes"
// );

// // 4
// const halfTime = 45;
// const str = new Map([
//   [true, "FIRST HALF"],
//   [false, "SECOND HALF"],
// ]);

// for (const [min, event] of gameEvents) {
//   console.log(`[${str.get(min <= halfTime)}] ${min}: ${event}`);
// }

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(airline.length);
// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));
// console.log(airline.indexOf("portugal"));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat");
//   } else {
//     console.log("You got lucky");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// const airline = "TAP Air Portugal";
// const passenger = "jOnAS";
// console.log(passenger.toLowerCase());
// console.log(passenger);

// const email = "hello@jonas.io";
// const loginEmail = "   Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const nomalizedEmail = loginEmail.toLowerCase().trim();
// console.log(nomalizedEmail === email);

// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family");
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome aboard");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// console.log("a+very+nice+string".split("+"));
// console.log("Jonas Schmedtmann".split(" "));
// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

// const passenger = "jessica ann smith davis";

// const capitalizeName = function (name) {
//   names = name.split(" ");
//   capitalized = [];
//   for (const n of names) {
//     const lower = n.toLowerCase();
//     const cap = lower[0].toUpperCase() + lower.slice(1);
//     capitalized.push(cap);
//   }

//   return capitalized.join(" ");
// };

// const capitalizedName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   return namesUpper.join(" ");
// };

// console.log(capitalizedName(passenger));

// const message = "Go to gate 23!";
// console.log(message.padStart(15, "+"));
// console.log(message.padEnd(15, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";

//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(64647384));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard("334859493847755774747"));

// const message2 = "Bad weather... All Departures Delayed... ";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} plains in line ${"✈".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(2);
// planesInLine(10);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

/*
const makeCheckMark = function (n) {
  return "✅".repeat(n);
};

const underscore_caseToCamelCase = function (word) {
  const str = word + "";
  const words = str.trim().split("_");
  const camelCase = [];
  for (const [i, w] of words.entries()) {
    if (i === 0) {
      camelCase.push(w.toLowerCase());
    } else {
      camelCase.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
    }
  }
  return camelCase.join("");
};

const convertData = function (e) {
  // const inputData = document.getElementById("textArea").value;
  const inputData = document.querySelector("textarea").value;
  console.log(inputData);
  const lines = inputData.split("\n");
  for (const [i, line] of lines.entries()) {
    console.log(
      `${underscore_caseToCamelCase(line).padEnd(20)}\t${makeCheckMark(i + 1)}`
    );
  }
};

document.querySelector("input").addEventListener("click", convertData);
*/

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const flightsLines = flights.split("+");

// for (const line of flightsLines) {
//   let [status, from, to, time] = line.split(";");
//   if (status.includes("Delayed")) {
//     status = "🔴" + status;
//   }

//   console.log(
//     `${status.replaceAll("_", " ").trim().padStart(20)} from ${from
//       .slice(0, 3)
//       .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
//       ":",
//       "h"
//     )})`
//   );
// }
