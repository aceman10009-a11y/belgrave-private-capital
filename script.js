console.log("Belgrave Private Bank Loaded");


/* ==========================================================
   SECURITY CONFIGURATION
========================================================== */

const USER_JURISDICTION = "restricted";


function isAllowed(feature){

    const rules = {

        cards:false,
        transfers:false,
        investments:true,
        statements:true,
        ledger:true

    };


    if(USER_JURISDICTION === "full"){

        return true;

    }


    return rules[feature] || false;

}



/* ==========================================================
   INITIALIZATION
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{


    initActivityPanel();


    logActivity("System initializing...");


    logActivity("Security layer active");



    if(window.location.pathname.includes("dashboard.html")){


        logActivity("Secure session started");


        initLedgerSystem();



        setTimeout(()=>{


            const welcome =
            document.getElementById("welcomeUser");



            if(!welcome) return;



            if(

                welcome.innerText === "Loading..." ||

                welcome.innerText.includes("Client") ||

                welcome.innerText.trim()===""

            ){

                welcome.innerText="Welcome Fred";

            }



        },600);



    }



});





/* ==========================================================
   ACTIVITY PANEL
========================================================== */


function initActivityPanel(){


    const logBox =
    document.getElementById("activityLog");


    if(logBox){

        logBox.innerHTML="";

    }


}





function logActivity(message){


    const logBox =
    document.getElementById("activityLog");



    if(!logBox) return;



    const div =
    document.createElement("div");



    div.textContent="• "+message;



    logBox.prepend(div);



}





/* ==========================================================
   SESSION TIMER
========================================================== */


let sessionInterval=null;



function startSessionTimer(){


    let time=300;



    sessionInterval=setInterval(()=>{


        time--;



        if(time<=0){


            clearInterval(sessionInterval);


            sessionInterval=null;



            window.location.replace("login.html");

        }



    },1000);



}
/* ==========================================================
   LEDGER SYSTEM
========================================================== */


function initLedgerSystem(){


    const table =
    document.getElementById("transactionTable");


    const balanceEl =
    document.getElementById("balance");


    const incomeEl =
    document.getElementById("totalIncome");


    const expenseEl =
    document.getElementById("totalExpenses");



    if(!table) return;



    let balance = 70937525;

    let income = 0;

    let expenses = 0;

    let html = "";



    const ledgerTransactions = [


        {
            date:"28 Jun 2026",
            desc:"Dividend Income",
            category:"Investment",
            debit:"",
            credit:"385,000"
        },


        {
            date:"15 Jun 2026",
            desc:"Health Insurance Premium",
            category:"Insurance",
            debit:"-4,850",
            credit:""
        },


        {
            date:"02 Jun 2026",
            desc:"International Wire Transfer",
            category:"Transfer",
            debit:"-68,000",
            credit:""
        },


        {
            date:"22 Apr 2026",
            desc:"Portfolio Rebalancing",
            category:"Investment",
            debit:"-215,000",
            credit:""
        },


        {
            date:"11 Mar 2026",
            desc:"Treasury Bond Coupon",
            category:"Investment Income",
            debit:"",
            credit:"126,500"
        },


        {
            date:"07 Mar 2026",
            desc:"Private Equity Distribution",
            category:"Investment",
            debit:"",
            credit:"2,950,000"
        },


        {
            date:"15 Mar 2026",
            desc:"Health Insurance Premium",
            category:"Insurance",
            debit:"-4,850",
            credit:""
        },


        {
            date:"15 Jan 2026",
            desc:"Health Insurance Premium",
            category:"Insurance",
            debit:"-4,850",
            credit:""
        },


        {
            date:"06 Jan 2026",
            desc:"Private Banking Service Fee",
            category:"Banking",
            debit:"-2,750",
            credit:""
        },


        {
            date:"28 Dec 2025",
            desc:"Dividend Income",
            category:"Investment",
            debit:"",
            credit:"420,000"
        },


        {
            date:"18 Jul 2025",
            desc:"Private Equity Distribution",
            category:"Investment",
            debit:"",
            credit:"2,850,000"
        },


        {
            date:"15 Mar 2025",
            desc:"Patek Philippe Grand Complication",
            category:"Luxury Asset",
            debit:"-1,000,000",
            credit:""
        },


        {
            date:"15 Jan 2025",
            desc:"Range Rover Sport Acquisition",
            category:"Vehicle",
            debit:"-125,000",
            credit:""
        },


        {
            date:"03 Jan 2024",
            desc:"Private Inheritance Deposit",
            category:"Deposit",
            debit:"",
            credit:"72,000,000"
        }


    ];




    ledgerTransactions.forEach(transaction=>{


        let amount=0;



        if(transaction.credit){


            amount =
            Number(
                transaction.credit.replace(/,/g,"")
            );


        }



        if(transaction.debit){


            amount =
            -Number(
                transaction.debit
                .replace(/,/g,"")
                .replace("-","")
            );


        }



        balance += amount;



        if(amount>0){

            income += amount;

        }
        else{

            expenses += Math.abs(amount);

        }




        html += `

        <tr>

            <td>
                ${transaction.date}
            </td>


            <td>
                ${transaction.desc}
            </td>


            <td>
                ${transaction.category}
            </td>


            <td class="debit">

                ${
                    transaction.debit
                    ?
                    "$"+Math.abs(
                    Number(
                    transaction.debit.replace(/,/g,"")
                    )
                    ).toLocaleString()
                    :
                    ""
                }

            </td>


            <td class="credit">

                ${
                    transaction.credit
                    ?
                    "$"+Number(
                    transaction.credit.replace(/,/g,"")
                    ).toLocaleString()
                    :
                    ""
                }

            </td>


            <td>

                $${balance.toLocaleString()}

            </td>


            <td>

                <span class="status-completed">
                    Completed
                </span>

            </td>


        </tr>

        `;


    });



    table.innerHTML=html;



    if(balanceEl){

        balanceEl.innerText =
        "$"+balance.toLocaleString();

    }



    if(incomeEl){

        incomeEl.innerText =
        "$"+income.toLocaleString();

    }



    if(expenseEl){

        expenseEl.innerText =
        "$"+expenses.toLocaleString();

    }



}
/* ==========================================================
   ACTIVITY PANEL TOGGLE
========================================================== */


window.toggleActivityPanel = function(){


    const panel =
    document.getElementById("activityPanel");


    const icon =
    document.getElementById("activityToggle");



    if(!panel) return;



    if(
        panel.style.display === "none" ||
        panel.style.display === ""
    ){


        panel.style.display="block";


        if(icon){

            icon.textContent="▼";

        }


        panel.classList.remove("collapsed");


        logActivity("Activity panel opened");


        return;


    }



    panel.style.display="none";


    if(icon){

        icon.textContent="▲";

    }



    logActivity("Activity panel closed");


};





/* ==========================================================
   TRANSACTIONS VIEW
========================================================== */


window.toggleTransactions = function(){


    const section =
    document.querySelector(".transactions");



    if(!section) return;



    section.scrollIntoView({

        behavior:"smooth"

    });



    logActivity("Transactions viewed");


};





/* ==========================================================
   HOMEPAGE RETURN
========================================================== */


window.confirmHome=function(){


    if(confirm("Return to homepage?")){


        window.location.href="index.html";


    }


};





/* ==========================================================
   BASIC ACCOUNT LOGGING
========================================================== */


window.openAccounts=function(){


    logActivity(
        "Accounts section opened"
    );


};


/* ==========================================================
   TIME-BASED DASHBOARD GREETING
========================================================== */

function getTimeBasedGreeting() {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Good Morning";
    }

    if (hour >= 12 && hour < 17) {
        return "Good Afternoon";
    }

    return "Good Evening";
}


function updateDashboardGreeting() {

    const greeting = getTimeBasedGreeting();

    /* Desktop greeting */

    const welcomeUser =
        document.getElementById("welcomeUser");

    if (welcomeUser) {

        const currentText =
            welcomeUser.textContent.trim();

        const nameMatch =
            currentText.match(/,\s*(.+)$/);

        const name =
            nameMatch
                ? nameMatch[1]
                : "Fred";

        welcomeUser.textContent =
            `${greeting}, ${name}`;

    }


    /* Mobile greeting */

    const mobileGreeting =
        document.querySelector(".mobile-greeting-label");

    if (mobileGreeting) {

        mobileGreeting.textContent =
            `${greeting},`;

    }

}


/* Run when dashboard loads */

document.addEventListener(
    "DOMContentLoaded",
    updateDashboardGreeting
);


/* Keep greeting accurate if the page remains open */

setInterval(
    updateDashboardGreeting,
    60000
);


/* Make available globally */

window.getTimeBasedGreeting =
    getTimeBasedGreeting;

window.updateDashboardGreeting =
    updateDashboardGreeting;


/* ==========================================================
   EXPORTS
========================================================== */


window.logActivity = logActivity;

window.initLedgerSystem = initLedgerSystem;

window.isAllowed = isAllowed;