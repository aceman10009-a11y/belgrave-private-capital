// ==========================
// DASHBOARD POPUPS (STEP 4 FIX)
// ==========================

function transferAttempt() {
  const popup = document.getElementById("transferPopup");
  if (popup) {
    popup.style.display = "block";
  }
}

function closePopup() {
  const popup = document.getElementById("transferPopup");
  if (popup) {
    popup.style.display = "none";
  }
}console.log("Belgrave Private BankLoaded");

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
