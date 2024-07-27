const greetings = "Hello, how r u? I'm fine thank you.";
console.log(greetings);

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const errors = {};
const errorMessages = document.querySelectorAll(".error-msg");
const usernameErrorMsg = document.querySelector("#username-error-msg");
const passwordErrorMsg = document.querySelector("#password-error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetErrorMessages();
  console.log("FORM SUBMIT!");

  // INPUT VALIDATION
  if (username.value === "") {
    errors.username = "Username is required";
    usernameErrorMsg.innerHTML = errors.username;
  }
  if (password.value === "") {
    errors.password = "Password is required";
    passwordErrorMsg.innerHTML = errors.password;
  }

  console.log("ERROR VALUE:", errors.length);
  if (errors !== undefined) {
    displayErrorMessages();
  } else {
    usernameErrorMsg.innerHTML = "";
    passwordErrorMsg.innerHTML = "";

    console.log("ERROR EMPTY");
    console.log(`${username.value} ${password.value}`);
  }
});

const displayErrorMessages = () => {
  errorMessages.forEach((msg) => {
    if (msg.innerHTML !== "") {
      msg.classList.add("visible");
    } else {
      msg.classList.remove("visible");
    }
  });
};

const resetErrorMessages = () => {
  errorMessages.forEach((msg) => {
    msg.innerHTML = "";
    msg.classList.remove("visible");
  });
};
