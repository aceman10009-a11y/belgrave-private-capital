async function loadPartial(id, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {

            console.error(`Unable to load ${file}`);

            return;

        }


        const container = document.getElementById(id);


        if (!container) {

            console.error(`Container #${id} not found.`);

            return;

        }


        container.innerHTML = await response.text();


    } catch (error) {

        console.error(
            `Error loading ${file}:`,
            error
        );

    }

}



document.addEventListener(
    "DOMContentLoaded",
    async () => {


        await loadPartial(
            "navbar",
            "partials/navbar.html"
        );


        await loadPartial(
            "hero",
            "partials/hero.html"
        );


        await loadPartial(
            "financialSnapshot",
            "partials/financial-snapshot.html"
        );


        await loadPartial(
            "servicesSection",
            "partials/services.html"
        );


        await loadPartial(
            "digitalBankingSection",
            "partials/digital-banking.html"
        );


        await loadPartial(
            "cardsSection",
            "partials/cards-section.html"
        );


        await loadPartial(
            "securitySection",
            "partials/security.html"
        );


        await loadPartial(
            "testimonialsSection",
            "partials/testimonials.html"
        );


        await loadPartial(
            "footerSection",
            "partials/footer.html"
        );


        // Apply translations after all partials exist
        if (typeof applyTranslations === "function") {

            applyTranslations();

        }


    }
);