const commonData = {
  name: "Juan Pablo Monsalve Rios",
  job2_date: "2021 - 2022",
  job3_date: "2020 - 2021",
};

const translations = {
  es: {
    ...commonData,
    role: "Ingeniero de Sistemas | Especialista en Automatización",
    contact: "Contacto",
    location: "Medellín, Colombia",
    skills: "Habilidades",
    skill_automation: "Automatización:",
    skill_rpa: "RPA:",
    skill_cloud: "Cloud/DevOps:",
    skill_ai: "IA:",
    skill_languages: "Lenguajes:",
    skill_db: "Bases de Datos:",
    tools_title: "Herramientas",
    languages: "Idiomas",
    lang_es: "Español - Nativo",
    lang_en: "Inglés - Intermedio",
    profile_title: "Perfil",
    profile_text: "Ingeniero de Sistemas especialista en el desarrollo técnico de soluciones de automatización y ecosistemas RPA. Experto en la construcción de arquitecturas robóticas escalables y frameworks de automatización, optimizando la eficiencia operativa mediante pipelines de CI/CD. Especializado en la implementación técnica de integraciones con IA y visión computacional aplicadas a RPA, garantizando la estabilidad operativa, el rendimiento y la excelencia técnica en la transformación digital empresarial",
    experience: "Experiencia",
    job1_date: "2022 - Actual",
    job1_1: "Automatización de procesos corporativos mediante la integración de modelos de IA",
    job1_2: "Implementación de pipelines en GitLab",
    job1_3: "Estrategias de automatización en SAP",
    job2_1: "Automatización con Selenium",
    job2_2: "Automatización web, mobile y APIs",
    job2_3: "Mantenimiento de pipelines en Jenkins",
    job3_1: "Analista de Software para Proyectos Bancarios",
    job3_2: "Desarrollo de frameworks para la automatización de plataformas web",
    job3_3: "Implementación de pruebas automatizadas para servicios y REST APIs",
    education: "Educación",
    edu1_title: "Ingeniería de Sistemas",
    edu2_title: "Tecnólogo en Sistemas",
    edu3_title: "Desarrollo de Apps Móviles",
  },
  en: {
    ...commonData,
    role: "Systems Engineer | Automation Specialist",
    contact: "Contact",
    location: "Medellín, Colombia",
    skills: "Skills",
    skill_automation: "Automation:",
    skill_rpa: "RPA:",
    skill_cloud: "Cloud/DevOps:",
    skill_ai: "AI:",
    skill_languages: "Languages:",
    skill_db: "Databases:",
    tools_title: "Tools",
    languages: "Languages",
    lang_es: "Spanish - Native",
    lang_en: "English - Intermediate",
    profile_title: "Profile",
    profile_text: "Systems Engineer specializing in the technical development of automation solutions and RPA ecosystems. Expert in building scalable robotic architectures and automation frameworks, optimizing operational efficiency through CI/CD pipelines. Specialized in the technical implementation of AI and computer vision integrations applied to RPA, ensuring operational stability, performance, and technical excellence in enterprise digital transformation",
    experience: "Experience",
    job1_date: "2022 - Present",
    job1_1: "Corporate process automation through AI model integration",
    job1_2: "CI/CD pipelines in GitLab",
    job1_3: "SAP automation strategies",
    job2_1: "Automation using Selenium",
    job2_2: "Web, mobile and API automation",
    job2_3: "Jenkins pipeline maintenance",
    job3_1: "Software analyst for banking projects",
    job3_2: "Development of automated testing frameworks for web platforms",
    job3_3: "Automated testing implementation for REST APIs and services",
    education: "Education",
    edu1_title: "Systems Engineering",
    edu2_title: "Systems Technologist",
    edu3_title: "Mobile App Development",
  }
};

let currentLang = "en";

const applyTranslations = () => {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
};

const toggleLanguage = () => {
  currentLang = currentLang === "es" ? "en" : "es";
  applyTranslations();
};

document.addEventListener('DOMContentLoaded', applyTranslations);

const profilePhoto = document.querySelector('.profile-card');
if (profilePhoto) {
  profilePhoto.style.cursor = 'default';
  profilePhoto.addEventListener('dblclick', toggleLanguage);
}