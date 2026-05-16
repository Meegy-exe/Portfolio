// fichier qui stocke les donnees de "Le Lézard des Jardins"

// import des img
import LezardMin from '../../assets/projects/le-lezard-des-jardins/miniature/lezard-min.png';
import LezardScreen1 from '../../assets/projects/le-lezard-des-jardins/screens/lezard-screen1.png';

export const lezard = {
    // id unique
    id: 1,

    // infos principales
    title: "Le Lézard des Jardins",
    summary: "Site web de 4 pages réalisé dans le cadre d'une candidature à la Web@cadémie.",

    // stack technique
    technologies: ["HTML", "CSS", "JAVASCRIPT"],

    isGroupProject: false,

    // liens
    repository: "",
    demoLink: "https://le-lezard-des-jardins.pages.dev/",

    // presentation du projet
    description: "Le lézard des jardins est un site visant à me présenter brièvement mais surtout une présentation biographique du lézard des murailles.",
    instructions: "Il était demandé de faire un site simple en HTML/CSS composé de 4 pages, le choix du thème était libre.",

    organisation: [
        "Recherche d'un thème comprenant une présentation personnelle et sujet à part (le lézard des murailles).",
        "Maquettage simple des 4 pages sur papier pour visualiser la navigation et la structure avant de coder."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Compréhension fondamentale des balises HTML sémantiques et de la liaison entre plusieurs pages (système de navigation).",
        "Premières manipulations du CSS pour gérer le positionnement, les couleurs et l'aspect visuel général.",
        "Découverte de l'hébergement web avec le déploiement de mon tout premier site en ligne (via Cloudflare Pages)."
    ],

    // axe damelioration
    nextSteps: [
        "Rendre le design totalement responsive pour qu'il s'adapte parfaitement aux mobiles et tablettes.",
        "Refactoriser le CSS pour utiliser des variables et éviter la répétition de code entre les 4 pages.",
        "Factoriser le code HTML (header et footer) pour ne pas avoir à le copier-coller sur chaque page."
    ],
    // infos pour le tri
    date: "2025-09-15",
    isFavorite: false,
    priority: 1,
    category: "Frontend",

    // medias pour la galerie
    image: LezardMin,
    screenshots: [LezardMin, LezardScreen1]
};