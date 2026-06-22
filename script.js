console.log("Belgrave Private Bank Loaded");

const USER_JURISDICTION = "restricted";

function isAllowed(feature) {
  const rules = {
    cards: false,
    transfers: false,
    investments: true,
    statements: true,
    ledger: true
  };

  if (USER_JURISDICTION === "full") return true;
  return rules[feature] || false;
}

document.addEventListener("DOMContentLoaded", () => {

  initActivityPanel();
  logActivity("System initializing...");
  logActivity("Security layer active");

  if (window.location.pathname.includes("dashboard.html")) {

    logActivity("Secure session started");

    // startSessionTimer();
    initLedgerSystem();

    setTimeout(() => {
      const welcome = document.getElementById("welcomeUser");

      if (!welcome) return;

      // Only override if Firebase left default text
      if (
        welcome.innerText === "Loading..." ||
        welcome.innerText.includes("Client") ||
        welcome.innerText.trim() === ""
      ) {
        welcome.innerText = "Welcome Fred";
      }

    }, 600);
  }

});

// ================= ACTIVITY =================

function initActivityPanel() {
  const logBox = document.getElementById("activityLog");
  if (logBox) logBox.innerHTML = "";
}

function logActivity(msg) {
  const logBox = document.getElementById("activityLog");
  if (!logBox) return;

  const div = document.createElement("div");
  div.textContent = "• " + msg;
  logBox.prepend(div);
}

// ================= POPUPS =================

function transferAttempt() {
  const popup = document.getElementById("transferPopup");
  if (popup) popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("transferPopup");
  if (popup) popup.style.display = "none";
}

// ================= STATEMENT =================

window.openStatement = function () {
  const p = document.getElementById("statementPopup");
  if (p) p.style.display = "block";
};

window.closeStatement = function () {
  const p = document.getElementById("statementPopup");
  if (p) p.style.display = "none";
};

window.downloadStatement = function () {
  alert("Statement download requested");
  logActivity("Statement downloaded");
};

// ================= ACCOUNTS =================

window.openAccounts = function () {
  alert("Accounts are restricted under compliance rules.");
};

window.openInvestments = function () {
  alert("Investments are locked until 2029.");
};

window.confirmHome = function () {
  if (confirm("Return to homepage?")) {
    window.location.href = "index.html";
  }
};
window.openCards = function () {
  const section = document.getElementById("cardsSection");
  if (!section) return;

  if (section.style.display === "block") {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }

  logActivity("Cards toggled");
};

// ================= SESSION =================
let sessionInterval = null;

function startSessionTimer() {
  let t = 300;

  sessionInterval = setInterval(() => {
    t--;

    if (t <= 0) {
      clearInterval(sessionInterval);
      sessionInterval = null;
      window.location.replace("login.html");
    }
  }, 1000);
}

// ================= LEDGER =================

function initLedgerSystem() {

  const table = document.getElementById("transactionTable");
  const balanceEl = document.getElementById("balance");
  const incomeEl = document.getElementById("totalIncome");
  const expenseEl = document.getElementById("totalExpenses");

  if (!table) return;

 const transactions = [

  { date: "03 Jan 2024", desc: "Inheritance Deposit", type: "Deposit", amount: 72000000 },

  { date: "15 Mar 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "18 Mar 2024", desc: "Private Aviation Membership", type: "Lifestyle", amount: -185000 },
  { date: "15 Apr 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 May 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Jun 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "10 Jun 2024", desc: "Monaco Yacht Club Membership", type: "Lifestyle", amount: -95000 },
  { date: "15 Jul 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Aug 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Sep 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Oct 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Nov 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Dec 2024", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },

  { date: "15 Jan 2025", desc: "Range Rover Sport Acquisition", type: "Vehicle", amount: -125000 },
  { date: "15 Jan 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Feb 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Mar 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Mar 2025", desc: "Patek Philippe Grand Complication", type: "Luxury Asset", amount: -1000000 },
  { date: "15 Apr 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 May 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Jun 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Jul 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "07 Jul 2025", desc: "Private Equity Distribution", type: "Income", amount: 2850000 },
  { date: "15 Aug 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Sep 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Oct 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Nov 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Dec 2025", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },

  { date: "15 Jan 2026", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Feb 2026", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Mar 2026", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Apr 2026", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 May 2026", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 },
  { date: "15 Jun 2026", desc: "Health Insurance Premium", type: "Insurance", amount: -4850 }

];
  let balance = 0, income = 0, expenses = 0;

  let html = "";

  transactions.forEach(t => {
    balance += t.amount;
    if (t.amount > 0) income += t.amount;
    else expenses += Math.abs(t.amount);

    html += `
      <tr>
        <td>${t.date}</td>
        <td>${t.desc}</td>
        <td>${t.type}</td>
        <td>${t.amount.toLocaleString()}</td>
      </tr>
    `;
  });

  table.innerHTML = html;

  if (balanceEl) balanceEl.innerText = `$${balance.toLocaleString()}`;
  if (incomeEl) incomeEl.innerText = `$${income.toLocaleString()}`;
  if (expenseEl) expenseEl.innerText = `$${expenses.toLocaleString()}`;
}

// ================= ACTIVITY TOGGLE =================

window.toggleActivityPanel = function () {
  const panel = document.getElementById("activityPanel");
  const icon = document.getElementById("activityToggle");

  if (!panel || !icon) return;

  panel.classList.toggle("collapsed");
  icon.textContent = panel.classList.contains("collapsed") ? "▲" : "▼";
};
// ================= TRANSACTIONS TOGGLE =================

window.toggleTransactions = function () {
  const section = document.querySelector(".transactions");

  if (!section) return;

  const isHidden = section.style.display === "none";

  section.style.display = isHidden ? "block" : "none";

  logActivity(isHidden ? "Transactions opened" : "Transactions hidden");
};
