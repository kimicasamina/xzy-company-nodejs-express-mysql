const loginForm = document.querySelector("#form");

loginForm.addEventListener("submit", sendLoginData);

async function sendLoginData(e) {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  const url = "http://localhost:8080/auth";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  console.log("DATA:", data);
}
