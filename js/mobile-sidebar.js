/* ==========================================================
   BELGRAVE PRIVATE BANK
   MOBILE SIDEBAR CONTROLLER
========================================================== */

(function () {

    let initialized = false;

    function initMobileSidebar() {

        if (initialized) {
            return true;
        }

        const button = document.getElementById("mobileMenuButton");
        const sidebar = document.getElementById("dashboard-sidebar");
        const overlay = document.getElementById("mobileSidebarOverlay");

        if (!button || !sidebar) {
            return false;
        }

        initialized = true;

        function openSidebar(event) {

            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            sidebar.classList.add("mobile-open");

            if (overlay) {
                overlay.classList.add("active");
                overlay.setAttribute("aria-hidden", "false");
            }

            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Close navigation");
        }

        function closeSidebar(event) {

            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            sidebar.classList.remove("mobile-open");

            if (overlay) {
                overlay.classList.remove("active");
                overlay.setAttribute("aria-hidden", "true");
            }

            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open navigation");
        }

        function toggleSidebar(event) {

            event.preventDefault();
            event.stopPropagation();

            if (sidebar.classList.contains("mobile-open")) {
                closeSidebar();
            } else {
                openSidebar();
            }
        }

        button.addEventListener("click", toggleSidebar);

        if (overlay) {
            overlay.addEventListener("click", closeSidebar);
        }

        sidebar.addEventListener("click", function (event) {

            const navItem = event.target.closest(".nav-item");

            if (navItem && window.innerWidth <= 768) {
                closeSidebar();
            }

        });

        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {
                closeSidebar();
            }

        });

        button.dataset.mobileSidebarInitialized = "true";

        console.log("Mobile sidebar initialized successfully.");

        return true;
    }


    /*
       The dashboard sidebar is loaded dynamically as a partial.
       Try immediately, then watch for the partial to appear.
    */

    if (!initMobileSidebar()) {

        const observer = new MutationObserver(function () {

            if (initMobileSidebar()) {
                observer.disconnect();
            }

        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    }

})();
