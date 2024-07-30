const toast = document.querySelector("#toast");

document.addEventListener("DOMContentLoaded", checkAuth);

// check if user is authenticated
function checkAuth() {
  const auth = JSON.parse(localStorage.getItem("auth")) ?? null;
  console.log("auth:", auth);
  if (!auth) {
    // if user is not yet logged in, redirect to login page
    window.location.href = "http://localhost:8080/login";
  }

  // if user is logged in, display login success message
  displayToastMessage(auth.message);
}

function displayToastMessage(msg) {
  let toastMessage = `
      <div class="toast-container">
        <small class="toast-message success">
          ${msg}
        </small>
        <button class="cta btn btn-pink">Sign out</button>
      </div>
    `;

  toast.innerHTML = toastMessage;
}
