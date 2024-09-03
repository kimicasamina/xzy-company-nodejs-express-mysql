const loginForm = document.querySelector("#form");
const toastMessage = document.querySelector(".toast-message");

loginForm.addEventListener("submit", sendLoginData);

async function sendLoginData(e) {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  const url = "http://localhost:8080/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();

  if (data) {
    const { status, message, username } = data;

    if (status === "error") {
      // display login failed message
      toastMessage.style.display = "flex";
      toastMessage.textContent = message;
    }
    if (status === "success") {
      // save user auth to local storage
      localStorage.setItem(
        "auth",
        JSON.stringify({ status, message, username })
      );
      // redirect user to dashboard
      window.location.href = "http://localhost:8080/dashboard";
    }
  }
}
