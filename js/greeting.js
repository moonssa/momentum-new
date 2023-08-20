const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-id");

const greeting = document.getElementById("greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

const paintGreeting = (username) => {
  greeting.innerText = `Good day, ${username}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME);
};
const handleSubmit = (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};
loginForm.addEventListener("submit", handleSubmit);

const init = () => {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    greeting.classList.add(HIDDEN_CLASS_NAME);
  } else {
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreeting(savedUsername);
  }
};

init();
