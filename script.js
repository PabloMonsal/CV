const translations = {
  es: {
    name: "Juan Pablo Monsalve",
    contact: "Contacto",
    location: "Medellín, Colombia",
    skills: "Skills",
    languages: "Idiomas",
    lang_es: "Español - Nativo",
    lang_en: "Inglés - Intermedio",

    profile_title: "Perfil",
    profile_text: "Ingeniero de sistemas enfocado en automatización de pruebas, CI/CD y RPA. Experiencia en automatización web, mobile y APIs, además de integración continua en entornos empresariales.",

    experience: "Experiencia",
    job1_date: "2022 - Actual",
    job1_1: "Automatización web, mobile y APIs",
    job1_2: "Implementación de pipelines en GitLab",
    job1_3: "Estrategias de automatización en SAP",

    job2_date: "2021 - 2022",
    job2_1: "Automatización con Selenium",
    job2_2: "Uso de Screenplay",
    job2_3: "Mantenimiento de pipelines en Jenkins",

    education: "Educación",
    edu1: "Ingeniería de Sistemas - ITM (En curso)",
    edu2: "Tecnólogo de Sistemas - ITM"
  },

  en: {
    name: "Juan Pablo Monsalve",
    contact: "Contact",
    location: "Medellín, Colombia",
    skills: "Skills",
    languages: "Languages",
    lang_es: "Spanish - Native",
    lang_en: "English - Intermediate",

    profile_title: "Profile",
    profile_text: "Systems engineer focused on test automation, CI/CD and RPA. Experience in web, mobile and API automation, as well as continuous integration in enterprise environments.",

    experience: "Experience",
    job1_date: "2022 - Present",
    job1_1: "Web, mobile and API automation",
    job1_2: "CI/CD pipelines in GitLab",
    job1_3: "SAP automation strategies",

    job2_date: "2021 - 2022",
    job2_1: "Automation using Selenium",
    job2_2: "Screenplay pattern",
    job2_3: "Jenkins pipeline maintenance",

    education: "Education",
    edu1: "Systems Engineering - ITM (In progress)",
    edu2: "Systems Technologist - ITM"
  }
};

let currentLang = navigator.language.startsWith("es") ? "es" : "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[currentLang][key];
  });
}

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  applyTranslations();
}

applyTranslations();