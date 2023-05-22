const age = prompt("How old are you?");

console.log(typeof age);
console.log(age);
const num = parseInt(age);

if (isNaN(num)) {
  console.log("please write a number");
} else if (num < 18) {
  console.log("You are too young.");
} else if (num >= 18 && num <= 60) {
  console.log("You can drink.");
} else if (num > 60) {
  console.log("You should exercise.");
} else {
  console.log("You can do whatever you want to.");
}
