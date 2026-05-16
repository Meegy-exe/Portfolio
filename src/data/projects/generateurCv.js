// fichier qui stocke les donnees du projet "Générateur de CV"

// import des images du projet
import GeneratorMin from '../../assets/projects/cv-generator/miniature/cv-generator-min.png';
import GeneratorScreen1 from '../../assets/projects/cv-generator/screens/cv-generator-screen1.png';
import GeneratorScreen2 from '../../assets/projects/cv-generator/screens/cv-generator-screen2.png';
import GeneratorScreen3 from '../../assets/projects/cv-generator/screens/cv-generator-screen3.png';

export const generatorCv = {
    // id unique
    id: 6,

    // infos principales
    title: "Générateur de CV",
    summary: "Site proposant la création et la génération de CV en PDF.",

    // stack technique
    technologies: ["HTML", "CSS", "TAILWIND/CSS", "JAVASCRIPT", "PHP", "DOMPDF"],
    methods: ["Responsive Design", "SEO"],

    // organisation
    isGroupProject: false,

    // liens
    repository: "https://github.com/Meegy-exe/CV-Generator",
    demoLink: "",

    // présentation du projet
    description: "Générateur de CV est une application web permettant aux utilisateurs de remplir un formulaire dynamique pour générer et télécharger instantanément leur CV au format PDF.",
    instructions: "Il était demandé de : créer un générateur de CV avec JS et PHP.",

    organisation: [
        "Recherche et préparation : utilisation de Bootstrap et installation via Composer.",
        "Mise en place d'une structure de projet claire avec les assets (CSS/JS) correctement séparés.",
        "Gestion des dépendances PHP avec Composer, notamment pour l'intégration de la librairie DOMPDF.",
        "Utilisation rigoureuse de Git : commits détaillés, historique clair et sécurisation du code."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Apprentissage des bonnes pratiques d'accessibilité, bonnes performances (Lighthouse et code optimisé).",
        "Maintien d'une structure de code propre via l'utilisation d'includes PHP.",
        "Adaptation réussie du CSS pour répondre aux contraintes du moteur de rendu restreint de DOMPDF.",
        "Mise en place d'une synchronisation DOM en JavaScript (liaison dynamique entre les inputs et la prévisualisation en temps réel).",
        "Gestion des priorités de développement face aux contraintes de temps."
    ],

    // axe damelioration
    nextSteps: [
        "Création d'un espace utilisateur (backend) avec un système de sauvegarde pour gérer plusieurs CV.",
        "Ajout d'une personnalisation avancée incluant un sélecteur de template/thème pour le CV généré.",
        "Amélioration de l'interface utilisateur de l'application avec l'implémentation d'un mode clair (Light Theme)."
    ],

    // infos pour le tri et l'affichage
    date: "2026-01-25",
    isFavorite: false,
    priority: 3,
    category: "Fullstack",

    // medias pour la galerie
    image: GeneratorMin,
    screenshots: [GeneratorMin, GeneratorScreen1, GeneratorScreen2, GeneratorScreen3]
};