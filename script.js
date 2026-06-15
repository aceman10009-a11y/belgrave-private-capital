console.log("Belgrave Private BankLoaded");

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}