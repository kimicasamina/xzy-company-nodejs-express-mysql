// import dotenv from "dotenv";
// dotenv.config();

const greetings = "Hello, how r u? I'm fine thank you.";
console.log(greetings);

const form = document.querySelector("#form");
const errors = null;
const errorMessages = document.querySelectorAll(".error-msg");
const usernameErrorMsg = document.querySelector("#username-error-msg");
const passwordErrorMsg = document.querySelector("#password-error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  resetErrorMessages();
  console.log("FORM SUBMIT!");
  console.log("FORM DATA", username + " " + password);

  // INPUT VALIDATION
  if (username === "") {
    errors.username = "Username is required";
    usernameErrorMsg.innerHTML = errors.username;
  }
  if (password === "") {
    errors.password = "Password is required";
    passwordErrorMsg.innerHTML = errors.password;
  }

  console.log("ERROR VALUE:", errors);
  if (!errors || errors === undefined) {
    console.log("ERROR EMPTY");
    usernameErrorMsg.innerHTML = "";
    passwordErrorMsg.innerHTML = "";

    console.log(`${username} ${password}`);
    handleSubmit(username, password);
  } else {
    displayErrorMessages();
  }
});

const handleSubmit = async (username, password) => {
  console.log("HANDLING SUBMIT", username + " " + password);
  const formData = { username, password };
  const response = await fetch("http://localhost:8080/auth", {
    method: "POST",
    body: formData,
  });

  const res = await response.json();
  console.log("RESPONSE:", res);
};

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

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);

//   const response = await fetch("http://localhost:3000/user/login", {
//     method: "POST",

//     body: formData,
//   });

//   const res = await response.json();

//   const resultSelector = document.querySelector(".result");

//   if (!res.success) {
//     resultSelector.innerHTML =
//       '<span style="color:red ">The request has not been successful!</span>';
//   } else {
//     resultSelector.innerHTML =
//       '<span style="color:green ">The request has been successful!</span>';
//   }
// };
