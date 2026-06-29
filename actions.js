/* ===========================
   BELGRAVE DASHBOARD ACTIONS
=========================== */

const transactions = [
  {
    date: "03 Jan 2024",
    description: "Inheritance Deposit",
    category: "Deposit",
    amount: 72000000
  },
  {
    date: "10 Jan 2024",
    description: "Wire Transfer from HSBC",
    category: "Transfer",
    amount: 2500000
  },
  {
    date: "18 Jan 2024",
    description: "Private Wealth Portfolio Subscription",
    category: "Investment",
    amount: -5000000
  },
  {
    date: "05 Feb 2024",
    description: "Investment Dividend",
    category: "Income",
    amount: 315000
  },
  {
    date: "20 Feb 2024",
    description: "Private Banking Service Fee",
    category: "Banking",
    amount: -450
  },
  {
    date: "15 Mar 2024",
    description: "Commercial Property Acquisition",
    category: "Real Estate",
    amount: -12500000
  },
  {
    date: "10 Apr 2024",
    description: "Rental Income Distribution",
    category: "Income",
    amount: 185000
  },
  {
    date: "07 May 2024",
    description: "Portfolio Dividend",
    category: "Income",
    amount: 420000
  },
  {
    date: "18 Jun 2024",
    description: "International Wire Transfer",
    category: "Transfer",
    amount: 1850000
  },
  {
    date: "30 Jun 2024",
    description: "Private Banking Service Fee",
    category: "Banking",
    amount: -450
  },
  {
    date: "15 Jul 2024",
    description: "Government Bond Coupon",
    category: "Income",
    amount: +240000
  },
  {
    date: "12 Aug 2024",
    description: "Investment Dividend",
    category: "Income",
    amount: +380000
  },
  {
    date: "30 Sep 2024",
    description: "Private Banking Service Fee",
    category: "Banking",
    amount: -450
  },
  {
    date: "08 Oct 2024",
    description: "Private Equity Distribution",
    category: "Income",
    amount: +1450000
  },
  {
    date: "18 Nov 2024",
    description: "Portfolio Reinvestment",
    category: "Investment",
    amount: -2000000
  },
  {
    date: "20 Dec 2024",
    description: "Year-End Investment Dividend",
    category: "Income",
    amount: +560000
  },
  {
    date: "05 Jan 2025",
    description: "Annual Banking Fee",
    category: "Banking",
    amount: -450
  },
  {
    date: "15 Jan 2025",
    description: "Range Rover Sport Acquisition",
    category: "Vehicle",
    amount: -125000
  },
  {
    date: "15 Jan 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "15 Feb 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "15 Mar 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "15 Mar 2025",
    description: "Patek Philippe Grand Complication",
    category: "Luxury Asset",
    amount: -1000000
  },
  {
    date: "15 Apr 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "20 Apr 2025",
    description: "Investment Dividend",
    category: "Income",
    amount: 315000
  },
  {
    date: "15 May 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "15 Jun 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "22 Jun 2025",
    description: "Private Jet Membership",
    category: "Lifestyle",
    amount: -185000
  },
  {
    date: "07 Jul 2025",
    description: "Private Equity Distribution",
    category: "Income",
    amount: 2850000
  },
  {
    date: "15 Jul 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Jul 2025",
    description: "Yacht Acquisition",
    category: "Luxury Asset",
    amount: -8500000
  },
  {
    date: "25 Aug 2025",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Aug 2025",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "15 Aug 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "15 Sep 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Sep 2025",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Sep 2025",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "15 Oct 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Oct 2025",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Oct 2025",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "15 Nov 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Nov 2025",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Nov 2025",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "15 Dec 2025",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "20 Dec 2025",
    description: "Year-End Portfolio Dividend",
    category: "Income",
    amount: 575000
  },
  {
    date: "25 Dec 2025",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Dec 2025",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "05 Jan 2026",
    description: "Annual Banking Fee",
    category: "Banking",
    amount: -450
  },
  {
    date: "15 Jan 2026",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Jan 2026",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Jan 2026",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "12 Feb 2026",
    description: "International Wire Transfer",
    category: "Transfer",
    amount: 1250000
  },
  {
    date: "15 Feb 2026",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Feb 2026",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Feb 2026",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "07 Mar 2026",
    description: "Private Equity Distribution",
    category: "Income",
    amount: 2950000
  },
  {
    date: "15 Mar 2026",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Mar 2026",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Mar 2026",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "11 Apr 2026",
    description: "Investment Dividend",
    category: "Income",
    amount: 365000
  },
  {
    date: "15 Apr 2026",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Apr 2026",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Apr 2026",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "15 May 2026",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 May 2026",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 May 2026",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  },
  {
    date: "07 Jun 2026",
    description: "Private Equity Distribution",
    category: "Income",
    amount: 3100000
  },
  {
    date: "15 Jun 2026",
    description: "Health Insurance Premium",
    category: "Insurance",
    amount: -4850
  },
  {
    date: "25 Jun 2026",
    description: "Yacht Insurance Premium",
    category: "Insurance",
    amount: -8500
  },
  {
    date: "28 Jun 2026",
    description: "Yacht Maintenance",
    category: "Marine",
    amount: -48000
  }
];

/* ===========================
   POPUPS
=========================== */

function showRestriction(
  title = "Transaction Restricted",
  message = "This operation is currently under banking jurisdiction review."
) {
  const popup = document.getElementById("transferPopup");

  if (!popup) return;

  popup.innerHTML = `
    <div class="popup-box">
      <h3>${title}</h3>

      <p>${message}</p>

      <button onclick="closePopup()">Close</button>
    </div>
  `;

  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("transferPopup");

  if (popup) {
    popup.style.display = "none";
  }
}

/* ===========================
   QUICK ACTIONS
=========================== */

function openDeposit() {
  showRestriction(
    "Deposits Restricted",
    "Deposits are temporarily restricted under banking jurisdiction review."
  );
}

function openWithdraw() {
  showRestriction(
    "Withdrawals Restricted",
    "Withdrawals are temporarily restricted under banking jurisdiction review."
  );
}

function openTransfer() {
  showRestriction(
    "Transfers Restricted",
    "Transfers are temporarily restricted under banking jurisdiction review."
  );
}

/* ===========================
   STATEMENTS
=========================== */

function openStatements() {
  const popup = document.getElementById("statementPopup");

  if (popup) {
    popup.style.display = "flex";
  }
}

function closeStatement() {
  const popup = document.getElementById("statementPopup");

  if (popup) {
    popup.style.display = "none";
  }
}

function downloadStatement() {
  alert("Statement generated successfully.");
}

/* ===========================
   SIDEBAR
=========================== */

function goAccounts() {
  showRestriction(
    "Accounts Restricted",
    "Accounts are currently restricted under banking jurisdiction review."
  );
}

function goInvestments() {
  showRestriction(
    "Investments Locked",
    "Investments are locked until 2029."
  );
}

function openTransfers() {
  showRestriction(
    "Transfers Restricted",
    "Transfers are currently restricted under banking jurisdiction review."
  );
}

function openSettings() {
  showRestriction(
    "Settings Restricted",
    "Settings are currently restricted under banking jurisdiction review."
  );
}

function openCards() {
  const cards = document.getElementById("cardsSection");

  if (cards) {
    cards.style.display = "block";

    cards.scrollIntoView({
      behavior: "smooth"
    });
  }
}

function toggleTransactions() {
  const section = document.querySelector(".transactions");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

/* ===========================
   TRANSACTION TABLE
=========================== */

function renderTransactions() {

  const table = document.getElementById("transactionTable");
  const cards = document.getElementById("transactionCards");

  if (!table || !cards) return;

  table.innerHTML = "";
  cards.innerHTML = "";

  let runningBalance = 0;

  transactions.forEach((tx) => {

    runningBalance += tx.amount;

    const debit =
      tx.amount < 0
        ? `$${Math.abs(tx.amount).toLocaleString()}`
        : "—";

    const credit =
      tx.amount > 0
        ? `$${tx.amount.toLocaleString()}`
        : "—";

    const balance = `$${runningBalance.toLocaleString()}`;

    /* Desktop Table */

    table.innerHTML += `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.description}</td>
        <td>${tx.category}</td>
        <td style="color:#d83b3b">${debit}</td>
        <td style="color:#1ca34a">${credit}</td>
        <td>${balance}</td>
        <td><span class="status completed">Completed</span></td>
      </tr>
    `;

    /* Mobile Card */

    cards.innerHTML += `
      <div class="transaction-card">

          <div class="transaction-card-top">

              <div>

                  <div class="transaction-title">
                      ${tx.description}
                  </div>

                  <div class="transaction-date">
                      ${tx.date}
                  </div>

              </div>

              <div class="${tx.amount > 0 ? "credit" : "debit"}">

                  ${tx.amount > 0 ? "+" : "-"}$${Math.abs(tx.amount).toLocaleString()}

              </div>

          </div>

          <div class="transaction-category">
              ${tx.category}
          </div>

      </div>
    `;

  });

}

window.addEventListener("DOMContentLoaded", renderTransactions);