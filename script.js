// ==========================
// BELGRAVE PRIVATE BANK SCRIPT (STABLE BUILD)
// ==========================

console.log("Belgrave Private Bank Loaded");

// ==========================
// SAFE DOM READY WRAPPER
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  initActivityPanel();

  logActivity("System initializing...");
  logActivity("Security layer active");

  // session only on dashboard
  if (window.location.pathname.includes("dashboard.html")) {
    logActivity("Secure session started");
    startSessionTimer();
  }

});

// ==========================
// ACTIVITY LOG SYSTEM
// ==========================

function initActivityPanel() {
  const logBox = document.getElementById("activityLog");

  if (logBox) {
    logBox.innerHTML = "<div style='color:#d4af37'>SYSTEM PANEL ACTIVE</div>";
  }
}

function logActivity(message) {
  console.log("[ACTIVITY]", message);

  const logBox = document.getElementById("activityLog");
  if (!logBox) return;

  const entry = document.createElement("div");
  entry.textContent = "• " + message;

  logBox.prepend(entry);
}

// ==========================
// POPUPS
// ==========================

function transferAttempt() {
  logActivity("Transfer attempt blocked");

  const popup = document.getElementById("transferPopup");
  if (popup) {
    popup.innerHTML = `
      <h3>Jurisdiction Restriction</h3>
      <p>
        This feature is restricted under cross-border financial compliance rules.<br><br>
        Reason: Your account is not authorized for international or external transfers under current jurisdictional classification.
      </p>
      <button onclick="closePopup()">Close</button>
    `;
    popup.style.display = "block";
  }
}

function closePopup() {
  logActivity("User closed transfer popup");

  const popup = document.getElementById("transferPopup");
  if (popup) popup.style.display = "none";
}

// ==========================
// SESSION TIMER
// ==========================

function startSessionTimer() {
  let timeLeft = 300;

  const timer = setInterval(() => {
    timeLeft--;

    if (timeLeft === 60) {
      alert("Session warning: 1 minute remaining");
      logActivity("Session warning triggered");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      logActivity("Session expired");
      window.location.href = "login.html";
    }
  }, 1000);
}

// ==========================
// CHATWOOT AUTO OPEN
// ==========================

setTimeout(() => {
  if (window.$chatwoot) {
    window.$chatwoot.toggle("open");
    logActivity("Chat support opened automatically");
  }
}, 8000);
// ==========================
// STATEMENT SYSTEM
// ==========================

window.openStatement = function () {
  const popup = document.getElementById("statementPopup");
  if (popup) popup.style.display = "block";
};

window.closeStatement = function () {
  const popup = document.getElementById("statementPopup");
  if (popup) popup.style.display = "none";
};

window.downloadStatement = function () {
  const from = document.getElementById("fromDate").value;
  const to = document.getElementById("toDate").value;

  if (!from || !to) {
    alert("Please select both dates");
    return;
  }

  alert(`Statement requested from ${from} to ${to}`);
  logActivity("Statement downloaded (simulated)");
};

window.messageAdvisor = function () {
  const popup = document.getElementById("transferPopup");
  if (!popup) return;

  popup.innerHTML = `
    <h3>Advisor Message</h3>
    <p>
      Important Information:<br><br>

      • International transfers are subject to jurisdiction rules<br>
      • Tax obligations may apply depending on destination country<br>
      • Large transfers may trigger compliance review (AML/KYC)<br>
      • Funds may be temporarily held for regulatory verification<br><br>

      Please contact your assigned advisor for full guidance.
    </p>
    <button onclick="closePopup()">Close</button>
  `;

  popup.style.display = "block";
};