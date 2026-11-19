const items = document.querySelectorAll('.gallery-item');
const subFilterBar = document.getElementById('concept-subfilters');

function filterMain(category, btnElement) {
    const mainButtons = document.querySelectorAll('.filter-buttons .filter-btn');
    mainButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    if (category === 'concept') {
        subFilterBar.classList.add('active');
        const subButtons = subFilterBar.querySelectorAll('.filter-btn');
        subButtons.forEach(btn => btn.classList.remove('active'));
        if (subButtons[0]) {
            subButtons[0].classList.add('active');
        }
    } else {
        subFilterBar.classList.remove('active');
    }

    items.forEach(item => {
        const itemCategories = item.getAttribute('data-category');
        if (category === 'all' || itemCategories.includes(category)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

function filterSub(subCategory, btnElement) {
    const subButtons = subFilterBar.querySelectorAll('.filter-btn');
    subButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    items.forEach(item => {
        const itemCategories = item.getAttribute('data-category');
        if (itemCategories.includes(subCategory)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_portfolio: "Portafolio",
        nav_contact: "Contacto",
        hero_title: "Hola, soy [Tu Nombre]",
        hero_subtitle: "Artista de cómic, ilustrador, concept artist y diseñador gráfico. Bienvenido a mi portafolio.",
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
        footer_text: "© 2026 [Tu Nombre]. Código bajo licencia MIT. Todos los derechos sobre las obras artísticas pertenecen a su autor."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_title: "Hi, I'm [Your Name]",
        hero_subtitle: "Comic Artist, Illustrator, Concept Artist & Graphic Designer. Welcome to my creative universe.",
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
        footer_text: "© 2026 [Your Name]. Code under MIT License. All rights to the artworks belong to their creator."
    }
};

const langToggleBtn = document.getElementById("lang-toggle");

function setLanguage(lang) {
    const dict = translations[lang] || translations.es;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("site_lang", lang);

    if (langToggleBtn) {
        langToggleBtn.textContent = lang === "es" ? "EN" : "ES";
    }
}

if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
        const currentLang = localStorage.getItem("site_lang") || "es";
        setLanguage(currentLang === "es" ? "en" : "es");
    });
}

setLanguage(localStorage.getItem("site_lang") || "es");
