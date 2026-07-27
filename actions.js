/* ===========================
   BELGRAVE DASHBOARD ACTIONS
=========================== */

console.log("✅ actions.js loaded");
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

/* ==========================================================
   ACTION MODAL
========================================================== */

function showActionModal(icon, title, message) {

    const modal = document.getElementById("actionModal");
    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");

    if (!modal || !modalIcon || !modalTitle || !modalMessage) {
        console.error("Action Modal not found.");
        return;
    }

    modalIcon.textContent = icon;
    modalTitle.textContent = title;

    // IMPORTANT:
    // Allows forms and HTML to render correctly.
    modalMessage.innerHTML = message;

    modal.classList.add("active");
}

function closeActionModal() {

    const modal = document.getElementById("actionModal");

    if (modal) {
        modal.classList.remove("active");
    }

}


/* ==========================================================
   QUICK ACTIONS
========================================================== */

function openTransfer() {

    showActionModal(

        "💸",

        "Transfer Restricted",

        `
        <p>
        Online transfers are temporarily unavailable due to
        regulatory compliance requirements.
        </p>

        <br>

        <strong>
        Please contact your Relationship Manager.
        </strong>
        `

    );

}


function openDeposit() {

    showActionModal(

        "💰",

        "Deposits Temporarily Unavailable",

        `
        <p>
        Deposits into this account have been temporarily
        suspended pending compliance review.
        </p>
        `

    );

}


function openWithdraw() {

    showActionModal(

        "🏦",

        "Withdrawals Restricted",

        `
        <p>
        Withdrawals require manual authorization by
        Belgrave Private Banking.
        </p>
        `

    );

}


function openCards() {

    showActionModal(

        "💳",

        "Card Management",

        `
        <p>
        Card replacement, PIN reset and spending limit
        changes are handled exclusively by your
        Relationship Manager.
        </p>
        `

    );

}


function openInvestments() {

    showActionModal(

        "📈",

        "Investment Portfolio",

        `
        <p>
        Your investment portfolio remains under a managed
        holding period until 31 December 2029.
        </p>
        `

    );

}


function openPayBills() {

    showActionModal(

        "🧾",

        "Bill Payments",

        `
        <p>
        Online bill payments are currently unavailable
        for this account.
        </p>
        `

    );

}
/* ==========================================================
   STATEMENTS
========================================================== */

function openStatements() {

    showActionModal(

        "📄",

        "Generate Account Statement",

        `

        <div class="statement-form">

            <label>Statement Period</label>

            <select id="statementPeriod">

                <option>Current Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
                <option>Last 12 Months</option>

            </select>

            <label>Email Address</label>

            <input
                id="statementEmail"
                type="email"
                placeholder="Enter email address">

            <button
                class="modal-primary-btn"
                onclick="generateStatement()">

                Generate & Email Statement

            </button>

        </div>

        `

    );

}


function generateStatement() {

    const email =
        document.getElementById("statementEmail")?.value.trim();

    const period =
        document.getElementById("statementPeriod")?.value;

    if (!email) {

        showActionModal(

            "⚠️",

            "Email Required",

            "Please enter a valid email address."

        );

        return;

    }

    showActionModal(

        "✅",

        "Statement Requested",

        `

        <p>

        Your request has been received successfully.

        </p>

        <br>

        <strong>Statement Period</strong><br>

        ${period}

        <br><br>

        <strong>Delivery Email</strong><br>

        ${email}

        <br><br>

        Your statement will be delivered securely.

        `

    );

}


/* ==========================================================
   SUPPORT
========================================================== */

function openSupport() {

    showActionModal(

        "💬",

        "Private Banking Support",

        `

        <div class="statement-form">

            <label>Subject</label>

            <input
                id="supportSubject"
                placeholder="Subject">

            <label>Message</label>

            <textarea
                id="supportMessage"
                rows="6"
                placeholder="How may we assist you today?"></textarea>

            <button
                class="modal-primary-btn"
                onclick="sendSupportMessage()">

                Send Secure Message

            </button>

        </div>

        `

    );

}


function sendSupportMessage() {

    const subject =
        document.getElementById("supportSubject")?.value.trim();

    const message =
        document.getElementById("supportMessage")?.value.trim();

    if (!subject || !message) {

        showActionModal(

            "⚠️",

            "Incomplete Form",

            "Please complete all fields before sending your secure message."

        );

        return;

    }

    showActionModal(

        "✅",

        "Message Sent",

        "Your secure message has been delivered successfully. A Relationship Manager will contact you shortly."

    );

}


/* ==========================================================
   SIDEBAR
========================================================== */

function goAccounts() {
    openCards();
}

function goInvestments() {
    openInvestments();
}

function openTransfers() {
    openTransfer();
}

function openSettings() {

    showActionModal(

        "⚙️",

        "Settings",

        "Account settings are managed through your Relationship Manager."

    );

}
/* ==========================================================
   TRANSACTION TABLE
========================================================== */

function renderTransactions() {

    const tableBody = document.getElementById("transactionTable");
    const cardContainer = document.getElementById("transactionCards");

    if (!tableBody || !cardContainer) return;

    let runningBalance = 0;

    let tableHTML = "";
    let cardHTML = "";

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

        const amountClass =
            tx.amount >= 0
                ? "credit"
                : "debit";

        tableHTML += `

            <tr>

                <td>${tx.date}</td>

                <td>${tx.description}</td>

                <td>${tx.category}</td>

                <td>${debit}</td>

                <td>${credit}</td>

                <td>$${runningBalance.toLocaleString()}</td>

                <td>

                    <span class="status success">

                        Completed

                    </span>

                </td>

            </tr>

        `;

        cardHTML += `

            <div class="transaction-card">

                <div class="transaction-card-header">

                    <div>

                        <div class="transaction-card-title">

                            ${tx.description}

                        </div>

                        <div class="transaction-card-date">

                            ${tx.date}

                        </div>

                    </div>

                    <div class="${amountClass}">

                        ${tx.amount >= 0 ? "+" : "-"}$${Math.abs(tx.amount).toLocaleString()}

                    </div>

                </div>

                <div>

                    ${tx.category}

                </div>

                <div class="transaction-card-footer">

                    <strong>

                        Balance

                    </strong>

                    <strong>

                        $${runningBalance.toLocaleString()}

                    </strong>

                </div>

            </div>

        `;

    });

    tableBody.innerHTML = tableHTML;
    cardContainer.innerHTML = cardHTML;

}


/* ==========================================================
   INITIALIZATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderTransactions();

});


/* ==========================================================
   EXPORTS
========================================================== */

window.renderTransactions = renderTransactions;
window.showActionModal = showActionModal;
window.closeActionModal = closeActionModal;

window.openTransfer = openTransfer;
window.openDeposit = openDeposit;
window.openWithdraw = openWithdraw;
window.openCards = openCards;
window.openInvestments = openInvestments;
window.openPayBills = openPayBills;

window.openStatements = openStatements;
window.generateStatement = generateStatement;

window.openSupport = openSupport;
window.sendSupportMessage = sendSupportMessage;

window.goAccounts = goAccounts;
window.goInvestments = goInvestments;
window.openTransfers = openTransfers;
window.openSettings = openSettings;