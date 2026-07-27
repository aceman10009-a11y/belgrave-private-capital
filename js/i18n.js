const DEFAULT_LANGUAGE = "en";


async function loadTranslations(language = DEFAULT_LANGUAGE) {


    const files = [

        "common",
        "home",
        "navbar",
        "footer",
        "services",
        "cards",
        "security",
        "dashboard",
        "accounts",
        "investments",
        "payments",
        "transfers",
        "wealth",
        "profile",
        "settings",
        "about",
        "contact",
        "login",
        "signup"

    ];



    const translations = {};



    for (const file of files) {


        try {


            const response = await fetch(
                `locales/${language}/${file}.json`
            );



            if (!response.ok) {


                console.warn(
                    `Missing translation file: ${file}.json`
                );


                continue;


            }



            const data =
                await response.json();



            translations[file] = data;



        } catch(error) {


            console.error(
                `Failed loading ${file}.json`,
                error
            );


        }


    }



    return translations;


}







function getNestedValue(object, path) {


    return path
        .split(".")
        .reduce(
            (value, key) => value?.[key],
            object
        );


}









async function applyTranslations() {


    const language =
        localStorage.getItem("language")
        || DEFAULT_LANGUAGE;




    const translations =
        await loadTranslations();







    document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {



        const key =
            element.dataset.i18n;




        const value =
            getNestedValue(
                translations,
                key
            );






        if (
            typeof value === "string"
        ) {


            element.textContent = value;


        }



    });



}









function setupLanguageSwitcher() {


    const switcher =
        document.getElementById(
            "languageSwitcher"
        );



    if (!switcher) {


        return;


    }





    const currentLanguage =
        localStorage.getItem("language")
        || DEFAULT_LANGUAGE;




    switcher.value =
        currentLanguage;








    switcher.addEventListener(
        "change",
        async (event) => {



            const language =
                event.target.value;




            localStorage.setItem(
                "language",
                language
            );




            await applyTranslations();



        }
    );



}









/* =================================
   MOBILE NAVBAR MENU
================================= */


function setupMobileMenu(){


    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );



    if(
        !menuToggle ||
        !mobileMenu
    ){

        return;

    }





    menuToggle.addEventListener(
        "click",
        () => {


            mobileMenu.classList.toggle(
                "active"
            );


        }
    );



}









document.addEventListener(
    "DOMContentLoaded",
    async () => {



        /*
          Wait for dynamic partials
          (navbar/footer/sections)
          to be inserted
        */


        setTimeout(
            async () => {


                await applyTranslations();


                setupLanguageSwitcher();


                setupMobileMenu();



            },
            300
        );



    }
);