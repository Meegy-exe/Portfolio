// fichier qui stocke les donnees de Connect'In V2

// import des images
import ConnectInV2Min from '../../assets/projects/connect-in-v2/miniature/connectinV2-min.png';
import ConnectInV2Screen1 from '../../assets/projects/connect-in-v2/screens/connectinV2-screen1.png';
import ConnectInV2Screen2 from '../../assets/projects/connect-in-v2/screens/connectinV2-screen2.png';

export const connectInV2 = {
    // id unique du projet
    id: 10,

    // infos generales
    title: "Connect'In V2",
    summary: "Migration du back-end vers Java Spring Boot d'un mini réseau social d'entreprise.",

    // stack technique
    technologies: ["HTML", "CSS", "TAILWIND/CSS", "REACTJS", "JAVA", "SPRING BOOT", "MYSQL", "DOCKER", "JWT"],

    // methodes de travail
    methods: ["API REST", "MVC", "Méthode Agile"],

    // gestion d'equipe
    isGroupProject: true,
    teamSize: 2,

    // liens
    repository: "https://github.com/Meegy-exe/Connect_in_V2",
    demoLink: "",

    // présentation du projet
    description: "Connect'in V2 est un réseau social d'entreprise sur lequel il est possible de gérer la création de comptes utilisateurs, de posts, de likes et de commentaires.",
    instructions: "Il était demandé de : remplacer entièrement le back-end existant par une nouvelle version développée avec Spring Boot.",

    organisation: [
        "Recherche et installation des nouveaux environnements de développement.",
        "Répartition stricte des tâches et communication via Trello, Discord et le fichier README.",
        "Structuration du projet basée sur une architecture API REST et MVC.",
        "Gestion avancée de Git & GitHub : travail par branches de features et validation obligatoire via Pull Requests.",
        "Tests systématiques avec validation de l'API et conteneurisation finale via Docker."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Adapter un front-end existant à un nouveau back-end en JAVA, en rendant le tout compatible.",
        "Consolidation des compétences sur l'installation et l'utilisation de ReactJS.",
        "Apprentissage de l'authentification sécurisée avec JWT (JSON Web Tokens) malgré la complexité des interactions entre les nombreux fichiers.",
        "La dockerisation de l’application m’a aidé à mieux comprendre la gestion d’environnement et le déploiement d’un projet complet."
    ],

    // axe damelioration
    nextSteps: [
        "Mise en place d'une CI/CD (Intégration et Déploiement Continus) pour automatiser les tests Spring Boot à chaque Pull Request.",
        "Ajouter la possibilité de suivre d'autres utilisateurs pour rendre le réseau plus interactif.",
        "Implémentation d'un système de notifications en temps réel (WebSockets) pour les likes et commentaires.",
        "Amélioration de l'espace utilisateur avec l'ajout d'une page de contact dédiée.",
        "Ajout d'une recherche plus avancée pour filtrer et retrouver des publications spécifiques."
    ],

    // infos pour l'affichage et le tri
    date: "2026-04-05",
    isFavorite: true,
    priority: 8,
    category: "Backend",

    // visuels
    image: ConnectInV2Min,
    screenshots: [ConnectInV2Min, ConnectInV2Screen1, ConnectInV2Screen2]
};