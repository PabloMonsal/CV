const translations = {
  es: {
    profile_title: "Perfil",
    profile_text: "Ingeniero de sistemas enfocado en automatización, CI/CD y RPA.",
    skills_title: "Stack Tecnológico",
    experience_title: "Experiencia",
    projects_title: "Proyectos",
    education_title: "Educación",

    job1_date: "2022 - Actual",
    job1_1: "Automatización web, mobile y APIs",
    job1_2: "Pipelines CI/CD en GitLab",
    job1_3: "Automatización en SAP",

    job2_date: "2021 - 2022",
    job2_1: "Automatización con Selenium",
    job2_2: "Uso de Screenplay",
    job2_3: "Pipelines en Jenkins",

    proj1: "Extracción de datos con IA (AWS + PDFs)",
    proj2: "Automatización con UiPath",
    proj3: "APIs para procesamiento de archivos",

    edu1: "Ingeniería de Sistemas (En curso)",
    edu2: "Tecnólogo de Sistemas"
  },

  en: {
    profile_title: "Profile",
    profile_text: "Systems engineer focused on automation, CI/CD and RPA.",
    skills_title: "Tech Stack",
    experience_title: "Experience",
    projects_title: "Projects",
    education_title: "Education",

    job1_date: "2022 - Present",
    job1_1: "Web, mobile and API automation",
    job1_2: "CI/CD pipelines in GitLab",
    job1_3: "SAP automation strategies",

    job2_date: "2021 - 2022",
    job2_1: "Automation using Selenium",
    job2_2: "Screenplay pattern",
    job2_3: "Jenkins pipelines",

    proj1: "AI data extraction (AWS + PDFs)",
    proj2: "RPA automation with UiPath",
    proj3: "File processing APIs",

    edu1: "Systems Engineering (In progress)",
    edu2: "Systems Technologist"
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