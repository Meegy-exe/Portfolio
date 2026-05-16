// fichier qui stocke les donnees de "My Cinema"

// import des img
import MyCinemaMin from '../../assets/projects/my-cinema/miniature/mycinema-min.png';
import MyCinemaScreen1 from '../../assets/projects/my-cinema/screens/mycinema-screen1.png';
import MyCinemaScreen2 from '../../assets/projects/my-cinema/screens/mycinema-screen2.png';
import MyCinemaScreen3 from '../../assets/projects/my-cinema/screens/mycinema-screen3.png';

export const myCinema = {
    // id unique
    id: 7,

    // infos principales
    title: "My Cinema",
    summary: "Dashboard de cinéma, permettant la gestion de celui-ci.",

    // stack technique
    technologies: ["HTML", "CSS", "TAILWIND/CSS", "PHP", "MYSQL"],

    // methodes
    methods: ["API", "POO", "MVC", "Responsive Design", "SEO"],


    isGroupProject: false,

    // liens
    repository: "https://github.com/Meegy-exe/My-Cinema",
    demoLink: "",

    // presentation du projet
    description: "Ce projet est un dashboard permettant au gérant d'un cinéma fictif d'ajouter, modifier ou supprimer des films dans des salles lors de certaines séances (système CRUD complet).",
    instructions: "Il était demandé de : créer un back-office pour un gérant d'un cinéma (fictif).",

    // organisation
    organisation: [
        "Recherche et installation des outils de développement : PHP, Tailwind CSS et phpMyAdmin.",
        "Mise en place de la structure du projet avec l'architecture MVC (Model-View-Controller) et séparation claire entre backend et frontend.",
        "Utilisation rigoureuse de Git avec des commits réguliers et explicites.",
        "Tests et correctifs systématiques réalisés à chaque nouvel ajout de fonctionnalité."
    ],

    // ce que jai appris
    lessonsLearned: [
        "Apprentissage des bonnes pratiques d'accessibilité, bonnes performances (Lighthouse et code optimisé).",
        "Assimilation et adaptation réussie à la logique complexe de l'architecture MVC.",
        "Maintien d'une structure de code propre avec une bonne séparation des assets.",
        "Développement d'une rigueur de correction systématique lors de l'intégration itérative de nouvelles fonctionnalités.",
        "Gestion du temps pour concilier le développement du projet avec les activités annexes."
    ],

    // axe damelioration
    nextSteps: [
        "Création d'un espace utilisateur frontend pour permettre la consultation publique des films et des séances.",
        "Intégration d'une personnalisation avancée (ajout d'affiches de films et mise en place d'une barre de recherche dynamique).",
        "Amélioration globale du style de l'interface utilisateur et ajout de la possibilité de basculer vers un thème clair."
    ],

    // infos pour le tri
    date: "2026-02-08",
    isFavorite: false,
    priority: 4,
    category: "Fullstack",

    // medias
    image: MyCinemaMin,
    screenshots: [MyCinemaMin, MyCinemaScreen1, MyCinemaScreen2, MyCinemaScreen3]
};