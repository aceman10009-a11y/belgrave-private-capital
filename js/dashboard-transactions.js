/* ==========================================================
   PAGINATION
========================================================== */

const TRANSACTIONS_PER_PAGE = 10;

let currentPage = 1;


/* ==========================================================
   BELGRAVE PRIVATE BANK
   TRANSACTION RENDER ENGINE
========================================================== */

function formatCurrency(amount) {

    return `$${Math.abs(amount).toLocaleString()}`;

}

function transactionClass(amount) {

    return amount >= 0
        ? "credit"
        : "debit";

}

function transactionSign(amount) {

    return amount >= 0
        ? "+"
        : "-";

}

function transactionStatus() {

    return `
        <span class="status success">
            Completed
        </span>
    `;

}

function calculateBalances(data) {

    let runningBalance = 0;

    return data.map(transaction => {

        runningBalance += transaction.amount;

        return {

            ...transaction,

            balance: runningBalance

        };

    });

}


/* ==========================================================
   DESKTOP TABLE
========================================================== */

function buildDesktopTransactions(data) {

    return data.map(transaction => `

        <tr>

            <td>${transaction.date}</td>

            <td>${transaction.description}</td>

            <td>${transaction.category}</td>

            <td class="${transactionClass(transaction.amount)}">

                ${transactionSign(transaction.amount)}
                ${formatCurrency(transaction.amount)}

            </td>

            <td>

                $${transaction.balance.toLocaleString()}

            </td>

            <td>

                ${transactionStatus()}

            </td>

        </tr>

    `).join("");

}


/* ==========================================================
   MOBILE CARDS
========================================================== */

function buildMobileTransactions(data) {

    return data.map(transaction => `

        <div class="transaction-card">

            <div class="transaction-card-header">

                <div>

                    <div class="transaction-card-title">

                        ${transaction.description}

                    </div>

                    <div class="transaction-card-date">

                        ${transaction.date}

                    </div>

                </div>

                <div class="${transactionClass(transaction.amount)}">

                    ${transactionSign(transaction.amount)}
                    ${formatCurrency(transaction.amount)}

                </div>

            </div>

            <div>

                ${transaction.category}

            </div>

            <div class="transaction-card-footer">

                <strong>Balance</strong>

                <strong>

                    $${transaction.balance.toLocaleString()}

                </strong>

            </div>

        </div>

    `).join("");

}


/* ==========================================================
   MAIN RENDERER
========================================================== */

function renderTransactions() {

    const tableBody =
        document.getElementById("transactionTable");

    const cards =
        document.getElementById("transactionCards");

    if (!tableBody || !cards)
        return;

    const processed =
        calculateBalances(transactions);

    const totalPages =
        Math.ceil(processed.length / TRANSACTIONS_PER_PAGE);

    if (currentPage > totalPages)
        currentPage = totalPages;

    if (currentPage < 1)
        currentPage = 1;

    const start =
        (currentPage - 1) * TRANSACTIONS_PER_PAGE;

    const end =
        start + TRANSACTIONS_PER_PAGE;

    const visible =
        processed.slice(start, end);

    tableBody.innerHTML =
        buildDesktopTransactions(visible);

    cards.innerHTML =
        buildMobileTransactions(visible);

    const pageInfo =
        document.getElementById("transactionPageInfo");

    const previous =
        document.getElementById("previousTransactions");

    const next =
        document.getElementById("nextTransactions");

    if (pageInfo)
        pageInfo.textContent =
            `Page ${currentPage} of ${totalPages}`;

    if (previous)
        previous.disabled =
            currentPage === 1;

    if (next)
        next.disabled =
            currentPage === totalPages;

}


/* ==========================================================
   PAGINATION EVENTS
========================================================== */

document.addEventListener("click", function (event) {

    if (event.target.id === "previousTransactions") {

        if (currentPage > 1) {

            currentPage--;

            renderTransactions();

        }

    }

    if (event.target.id === "nextTransactions") {

        const totalPages = Math.ceil(
            transactions.length / TRANSACTIONS_PER_PAGE
        );

        if (currentPage < totalPages) {

            currentPage++;

            renderTransactions();

        }

    }

});


/* ==========================================================
   SEARCH
========================================================== */

document.addEventListener("input", function (event) {

    if (event.target.id !== "transactionSearch")
        return;

    const keyword =
        event.target.value.toLowerCase();

    const filtered =
        calculateBalances(transactions).filter(transaction =>

            transaction.description.toLowerCase().includes(keyword) ||

            transaction.category.toLowerCase().includes(keyword) ||

            transaction.date.toLowerCase().includes(keyword)

        );

    const tableBody =
        document.getElementById("transactionTable");

    const cards =
        document.getElementById("transactionCards");

    if (!tableBody || !cards)
        return;

    tableBody.innerHTML =
        buildDesktopTransactions(filtered);

    cards.innerHTML =
        buildMobileTransactions(filtered);

    const pageInfo =
        document.getElementById("transactionPageInfo");

    if (pageInfo)
        pageInfo.textContent =
            `${filtered.length} transaction(s) found`;

});