const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function handleLogin(event) {
  const username = loginInput.value;
  event.preventDefault();

  console.log(username);
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreeting(username);
  localStorage.setItem(USERNAME_KEY, username);
  /* 
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("your name is too long");
  }

  loginButton.addEventListener("click", handleLoginButtonClick);

  // use form instead
*/
}
function paintGreeting(username) {
  greeting.innerHTML = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleLogin);
} else {
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreeting(savedUsername);
}
