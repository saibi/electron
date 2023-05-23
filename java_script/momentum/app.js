//const age = prompt("How old are you?");
const age = 18;

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

const title = document.getElementById("title");
console.dir(title);

const hello = document.querySelectorAll(".hello h2");
console.log(hello);

const firstHello = document.querySelector(".hello:first-child h1");
console.log(firstHello);

function onHelloClicked() {
  console.log("clicked");
  firstHello.style.color = "red";
}
firstHello.addEventListener("click", onHelloClicked);

function handleMouseEnter() {
  firstHello.style.color = "blue";
}
firstHello.addEventListener("mouseenter", handleMouseEnter);
function handleMouseLeave() {
  firstHello.style.color = "black";
}
firstHello.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copy");
}

window.addEventListener("copy", handleWindowCopy);
