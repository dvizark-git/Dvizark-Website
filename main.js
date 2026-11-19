document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
    const subFilterBar = document.getElementById("concept-subfilters");
    const langToggleBtn = document.getElementById("lang-toggle");

    const translations = {
        es: {
            nav_home: "Inicio",
            nav_about: "Sobre mí",
            nav_portfolio: "Portafolio",
            nav_contact: "Contacto",
            hero_title: "Hola, soy Dvizark",
            hero_subtitle: "Artista de cómic e ilustrador. ¡Bienvenido a mi página web! Empecé mi carrera en 2018 tomando el dibujo más en serio. En 2020 me apunté a un curso de cómic, dibujo e ilustración, lo que me llevó a trabajar en el sector.",
            btn_portfolio: "Ver Portafolio",
            btn_about: "Sobre mí",
            btn_contact: "Contacto",
            about_heading: "Sobre mí",
            about_role: "Narrativa visual y diseño",
            about_p1: "Escribe aquí una breve presentación sobre ti, tu enfoque artístico y las herramientas que utilizas.",
            about_p2: "Destaca tu experiencia en narrativa secuencial, creación de mundos mediante concept art o identidad visual y diseño gráfico.",
            portfolio_heading: "Portafolio",
            filter_all: "Todo",
            filter_comic: "Cómic",
            filter_illustration: "Ilustración",
            filter_concept: "Concept Art",
            filter_graphic: "Diseño Gráfico",
            sub_all: "Todo Concept Art",
            sub_character: "Diseño de Personajes",
            sub_environment: "Diseño de Entornos",
            sub_creature: "Diseño de Criaturas",
            sub_prop: "Diseño de Props",
            contact_heading: "Contacto",
            contact_intro: "Disponible para proyectos freelance, encargos y colaboraciones. Puedes escribirme o encontrarme aquí:",
            contact_email: "Correo electrónico",
            contact_profile: "Perfil →",
            footer_text: "© 2026 Dvizark. Código bajo licencia MIT. Todos los derechos sobre las obras artísticas pertenecen a su autor."
        },
        en: {
            nav_home: "Home",
            nav_about: "About Me",
            nav_portfolio: "Portfolio",
            nav_contact: "Contact",
            hero_title: "Hi, I'm Dvizark",
            hero_subtitle: "Comic artist and illustrator. Welcome to my website! I started my career in 2018 by taking drawing more seriously. In 2020, I enrolled in a comic, drawing, and illustration course, which led me to work in the industry.",
            btn_portfolio: "View Portfolio",
            btn_about: "About Me",
            btn_contact: "Contact",
            about_heading: "About Me",
            about_role: "Visual Storyteller & Designer",
            about_p1: "Write a short introduction about yourself here. Mention your background, what inspires your work, and the tools you use.",
            about_p2: "Highlight your experience in sequential art, world-building through concept art, or visual communication in graphic design.",
            portfolio_heading: "Portfolio",
            filter_all: "All Work",
            filter_comic: "Comic",
            filter_illustration: "Illustration",
            filter_concept: "Concept Art",
            filter_graphic: "Graphic Design",
            sub_all: "All Concept Art",
            sub_character: "Character Design",
            sub_environment: "Environment Design",
            sub_creature: "Creature Design",
            sub_prop: "Prop Design",
            contact_heading: "Contact",
            contact_intro: "Available for freelance work, commissions, and studio opportunities. Feel free to reach out through any of the platforms below:",
            contact_email: "Email",
            contact_profile: "Profile →",
            footer_text: "© 2026 Dvizark. Code under MIT License. All rights to the artworks belong to their creator."
        }
    };

    function getSavedLang() {
        try {
            return localStorage.getItem("site_lang") || "es";
        } catch (e) {
            return "es";
        }
    }

    function saveLang(lang) {
        try {
            localStorage.setItem("site_lang", lang);
        } catch (e) {}
    }

    let currentLang = getSavedLang();

    function setLanguage(lang) {
        currentLang = translations[lang] ? lang : "es";
        const dict = translations[currentLang];

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        document.documentElement.lang = currentLang;
        saveLang(currentLang);

        if (langToggleBtn) {
            langToggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
        }
    }

    window.filterMain = function (category, btnElement) {
        const mainButtons = document.querySelectorAll(".filter-buttons .filter-btn");
        mainButtons.forEach((btn) => btn.classList.remove("active"));
        if (btnElement) {
            btnElement.classList.add("active");
        }

        if (category === "concept" && subFilterBar) {
            subFilterBar.classList.add("active");
            const subButtons = subFilterBar.querySelectorAll(".filter-btn");
            subButtons.forEach((btn) => btn.classList.remove("active"));
            if (subButtons[0]) {
                subButtons[0].classList.add("active");
            }
        } else if (subFilterBar) {
            subFilterBar.classList.remove("active");
        }

        items.forEach((item) => {
            const itemCategories = item.getAttribute("data-category") || "";
            if (category === "all" || itemCategories.includes(category)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    };

    window.filterSub = function (subCategory, btnElement) {
        if (!subFilterBar) return;
        const subButtons = subFilterBar.querySelectorAll(".filter-btn");
        subButtons.forEach((btn) => btn.classList.remove("active"));
        if (btnElement) {
            btnElement.classList.add("active");
        }

        items.forEach((item) => {
            const itemCategories = item.getAttribute("data-category") || "";
            if (itemCategories.includes(subCategory)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    };

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            setLanguage(currentLang === "es" ? "en" : "es");
        });
    }

    setLanguage(currentLang);
});
