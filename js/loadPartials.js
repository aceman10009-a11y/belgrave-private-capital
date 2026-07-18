async function loadPartial(id, file) {
    const response = await fetch(file);

    if (!response.ok) {
        console.error(`Unable to load ${file}`);
        return;
    }

    document.getElementById(id).innerHTML =
        await response.text();
}

document.addEventListener("DOMContentLoaded", () => {

    loadPartial("navbar","partials/navbar.html");

    loadPartial("hero","partials/hero.html");

    loadPartial(
        "financialSnapshot",
        "partials/financial-snapshot.html"
    );

    loadPartial(
        "services",
        "partials/services.html"
    );

    loadPartial(
        "digitalBanking",
        "partials/digital-banking.html"
    );

    loadPartial(
        "testimonials",
        "partials/testimonials.html"
    );

    loadPartial(
        "footer",
        "partials/footer.html"
    );

});