// fichier qui stocke les donnees du projet "Klivio"

// import des img
import KlivioMin from '../../assets/projects/klivio/miniature/klivio-min.png';
import KlivioScreen1 from '../../assets/projects/klivio/screens/klivio-screen1.png';
import TailwindScreen1 from '../../assets/projects/klivio/screens/tailwind-screen1.png';

export const klivio = {
    // id unique
    id: 4,

    // infos principales
    title: "Klivio",
    summary: "Page statique proposant des formations en ligne.",

    // stack technique (pur front-end)
    technologies: ["HTML", "CSS", "TAILWIND/CSS"],
    methods: ["Responsive Design", "SEO"],

    // projet
    isGroupProject: false,

    // liens
    repository: "https://github.com/Meegy-exe/Klivio",
    demoLink: "https://meegy-exe.github.io/Klivio/html-css/",
    demoLinkOther: "https://meegy-exe.github.io/Klivio/tailwind/",

    // presentation du projet
    description: "Klivio est une plateforme proposant des formations en ligne.",
    instructions: "Il était demandé de faire l’intégration de la page d’accueil statique, en respectant fidèlement la maquette donnée sur Figma. Le rendu devait être responsive (adapté aux écrans pc, tablette et mobile). Dans le respect des normes d’accessibilité, et bonnes pratiques SEO (balises meta, titres, structure). Puis dans un second temps, il fallait refaire une version en utilisant le framework Tailwind CSS tout en gardant la structure HTML.",

    organisation: [
        "Intégration progressive: mise en place de la structure HTML puis du style CSS.",
        "Gestion du Responsive Design en parallèle du développement.",
        "Sauvegardes régulières avec Git et mise en ligne sur GitHub Pages.",
        "Validation stricte du code via le W3C et audits Lighthouse.",
        "Refonte complète de l'intégration avec le framework Tailwind CSS."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Intégration d'une maquette (respect des dimensions et alignements).",
        "Découverte, apprentissage et utilisation concrète de Tailwind CSS.",
        "Maintien d'une structure de code propre, lisible et sémantique."
    ],

    // axe damelioration
    nextSteps: [
        "Optimiser la gestion des breakpoints pour fluidifier le redimensionnement des cartes de formation sur mobile.",
        "Approfondir la maîtrise de Tailwind CSS pour résoudre plus facilement les cas d'alignements et de centrages complexes.",
        "Automatiser l'optimisation des images pour améliorer encore le score de performance."
    ],

    // infos pour le tri
    date: "2025-12-08",
    isFavorite: false,
    priority: 1,
    category: "Frontend",

    // medias
    image: KlivioMin,
    screenshots: [KlivioMin, KlivioScreen1, TailwindScreen1]
};