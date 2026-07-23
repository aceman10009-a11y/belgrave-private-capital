async function loadPartial(id, file) {

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

}


document.addEventListener("DOMContentLoaded", () => {

    loadPartial(
        "navbar",
        "partials/navbar.html"
    );

    loadPartial(
        "hero",
        "partials/hero.html"
    );

    loadPartial(
        "financialSnapshot",
        "partials/financial-snapshot.html"
    );

    loadPartial(
        "servicesSection",
        "partials/services.html"
    );

    loadPartial(
        "digitalBankingSection",
        "partials/digital-banking.html"
    );

    loadPartial(
        "cardsSection",
        "partials/cards-section.html"
    );

    loadPartial(
        "securitySection",
        "partials/security.html"
    );

    loadPartial(
        "testimonialsSection",
        "partials/testimonials.html"
    );

    loadPartial(
        "footerSection",
        "partials/footer.html"
    );

});