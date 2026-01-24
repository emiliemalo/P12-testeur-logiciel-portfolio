// English translations for the portfolio website
const translations = {
    // Navigation
    "nav-accueil": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    // Hero section
    "hero-title": "Hi ! I'm Emilie",
    "hero-desc": "Junior Software Tester",

    // About section
    "about-title": "About me",

    // Skills section
    "skills-title": "My Skills",

    // Portfolio section
    "portfolio-title": "My Projects",
    "portfolio-link": "View project",

    // Contact section
    "contact-title": "Contact Me",
    "contact-github": "GitHub",
    "contact-github-desc": "My GitHub Profile",
    "contact-email": "Email Address",
    "contact-linkedin": "LinkedIn",
    "contact-linkedin-desc": "LinkedIn Name",

    // Skills translations mapping
    skills: {
        "Tests end-to-end": {
            title: "End-to-end Testing",
            text: "Automate end-to-end tests to validate user journeys on web applications."
        },
        "Postman": {
            title: "Postman",
            text: "Test REST APIs through requests, verification scripts and automated collections."
        },
        "Xray": {
            title: "Xray",
            text: "Manage test cases in Jira: design, execution, campaign tracking and requirements coverage."
        },
        "HTML - CSS": {
            title: "HTML - CSS",
            text: "Integrate responsive web interfaces from mockups, with CSS animations and accessibility."
        },
        "JavaScript": {
            title: "JavaScript",
            text: "Create dynamic interactions and manipulate the DOM in modern web applications."
        },
        "React": {
            title: "React",
            text: "Develop reusable components and manage their state in reactive interfaces."
        },
        "Gestion de projet QA": {
            title: "QA Project Management",
            text: "Organize test phases, plan sprints, and collaborate with product and dev teams."
        },
        "Debug & Optimisation": {
            title: "Debug & Optimization",
            text: "Identify bugs, optimize SEO, improve performance and publish web deliverables."
        },
        "Stratégies de test": {
            title: "Test Strategies",
            text: "Design and execute functional, exploratory, API, unit, and regression tests."
        }
    }
};

// Function to translate the page
function translatePage(lang) {
    if (lang === 'en') {
        // Update navigation
        document.querySelector('a[href="#home"]').textContent = translations["nav-accueil"];
        document.querySelector('a[href="#about"]').textContent = translations["nav-about"];
        document.querySelector('a[href="#skills"]').textContent = translations["nav-skills"];
        document.querySelector('a[href="#portfolio"]').textContent = translations["nav-portfolio"];
        document.querySelector('a[href="#contact"]').textContent = translations["nav-contact"];

        // Update hero section
        document.querySelector('.hero_title').textContent = translations["hero-title"];
        document.querySelector('.hero_desc').textContent = translations["hero-desc"];

        // Update about section
        document.querySelector('#about h2').textContent = translations["about-title"];

        // Update skills section
        document.querySelector('#skills h2').textContent = translations["skills-title"];

        // Update portfolio section
        document.querySelector('#portfolio h2').textContent = translations["portfolio-title"];

        // Update contact section
        document.querySelector('#contact h2').textContent = translations["contact-title"];
        const contactColumns = document.querySelectorAll('.contactColumn');
        if (contactColumns[0]) {
            contactColumns[0].querySelector('h3').textContent = translations["contact-github"];
            contactColumns[0].querySelector('p').textContent = translations["contact-github-desc"];
        }
        if (contactColumns[1]) {
            contactColumns[1].querySelector('h3').textContent = translations["contact-email"];
        }
        if (contactColumns[2]) {
            contactColumns[2].querySelector('h3').textContent = translations["contact-linkedin"];
            contactColumns[2].querySelector('p').textContent = translations["contact-linkedin-desc"];
        }

        // Update portfolio buttons
        document.querySelectorAll('#portfolio .btn-success').forEach(btn => {
            btn.textContent = translations["portfolio-link"];
        });


        // Update language attribute
        document.documentElement.lang = 'en';
        currentLanguage = 'en';

        // Translate dynamic content after a short delay
        setTimeout(translateDynamicContent, 1000);
    } else {
        // Reset to French
        document.querySelector('a[href="#home"]').textContent = "Accueil";
        document.querySelector('a[href="#about"]').textContent = "A propos";
        document.querySelector('a[href="#skills"]').textContent = "Compétences";
        document.querySelector('a[href="#portfolio"]').textContent = "Portfolio";
        document.querySelector('a[href="#contact"]').textContent = "Contact";

        document.querySelector('.hero_title').textContent = "Salut, moi c'est Emilie";
        document.querySelector('.hero_desc').textContent = "Testeur logiciel junior";

        document.querySelector('#about h2').textContent = "A propos";
        document.querySelector('#skills h2').textContent = "Mes compétences";
        document.querySelector('#portfolio h2').textContent = "Mes projets";
        document.querySelector('#contact h2').textContent = "Contactez-moi";

        const contactColumns = document.querySelectorAll('.contactColumn');
        if (contactColumns[0]) {
            contactColumns[0].querySelector('h3').textContent = "GitHub";
            contactColumns[0].querySelector('p').textContent = "Mon profil GitHub";
        }
        if (contactColumns[1]) {
            contactColumns[1].querySelector('h3').textContent = "Adresse email";
        }
        if (contactColumns[2]) {
            contactColumns[2].querySelector('h3').textContent = "LinkedIn";
            contactColumns[2].querySelector('p').textContent = "Emilie Patricia Malo";
        }

        document.querySelectorAll('#portfolio .btn-success').forEach(btn => {
            btn.textContent = "Voir le projet";
        });

        // Reset skills to French (reload from JSON would be needed, but for now just keep original)
        // Skills will remain in French as they come from JSON

        document.documentElement.lang = 'fr';
        currentLanguage = 'fr';
    }
}

// Store current language
let currentLanguage = 'fr';

// Enhanced translate function that can be called after dynamic content loads
function translateDynamicContent() {
    if (currentLanguage === 'en' && typeof translations !== 'undefined') {
        // Update skills cards
        document.querySelectorAll('#skills .card-title').forEach(title => {
            const skillTitle = title.textContent.trim();
            if (translations.skills[skillTitle]) {
                title.textContent = translations.skills[skillTitle].title;
                const cardText = title.closest('.card-body').querySelector('.card-text');
                if (cardText) {
                    cardText.textContent = translations.skills[skillTitle].text;
                }
            }
        });
    }
}
