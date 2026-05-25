// fichier qui stocke les donnees du projet "MongoBlog"

// import des images du projet
import MongoBlogMin from '../../assets/projects/mongoBlog/miniature/mongoblog-min.png';
import MongoBlogScreen1 from '../../assets/projects/mongoBlog/screens/mongoblog-screen1.png';
import MongoBlogScreen2 from '../../assets/projects/mongoBlog/screens/mongoblog-screen2.png';
import MongoBlogScreen3 from '../../assets/projects/mongoBlog/screens/mongoblog-screen3.png';

export const mongoblog = {
    // id unique
    id: 10,

    // infos principales
    title: "MongoBlog",
    summary: "Plateforme de blogs full-stack.",

    // stack technique complete
    technologies: ["REACTJS", "NODE.JS", "EXPRESS.JS", "MONGODB", "TAILWIND/CSS", "AXIOS", "VITE"],

    // methodes de travail utilisees
    methods: ["API REST", "CRUD", "Authentification JWT", "NoSQL"],

    // organisation de l'equipe (projet réalisé en solo pendant la piscine)
    isGroupProject: false,
    teamSize: 1,

    // liens
    repository: "https://github.com/Meegy-exe/MongoBlog",
    demoLink: "",

    // textes de presentation
    description: "Une plateforme d'espace membre permettant à chaque utilisateur de générer son propre blog. Le design a été pensé comme les blogs des années 2000. Les utilisateurs peuvent publier des articles, les catégoriser, et interagir sur les blogs des autres membres via un système de commentaires.",

    instructions: "Réaliser en 4 jours une application client-serveur communicante avec Express.js et React.js. L'API devait être entièrement RESTful et utiliser la stack MERN (Node.js, MongoDB, Express, React).",

    // listes detaillees sur la gestion du projet
    organisation: [
        "Configuration initiale de l'API Node/Express et connexion à la base de données MongoDB.",
        "Mise en place de l'espace membre avec inscription, connexion, et sécurisation des mots de passe (hashage via bcrypt).",
        "Création de l'interface client fluide avec React (Vite) et gestion des requêtes API via Axios.",
        "Développement des opérations CRUD (Create, Read, Update, Delete) complètes pour les articles et les commentaires.",
        "Intégration du système backend et frontend pour la gestion des catégories sous forme de tags."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Compréhension approfondie sur la communication entre le front-end (React) et le back-end (Express) lors du traitement des requêtes.",
        "Prise en main de MongoDB pour modéliser une base de données NoSQL adaptée aux besoins d'un blog.",
        "Gestion d'états sur React pour maintenir la connexion de l'utilisateur lors de sa navigation entre différents blogs.",
        "Travail sous une contrainte de temps (Piscine)."
    ],

    // axe damelioration
    nextSteps: [
        "Intégrer un moteur de recherche full-text pour filtrer le contenu et les titres des articles.",
        "Remplacer la pagination classique des articles par un système de défilement infini (Infinite Scroll).",
        "Optimiser les performances globales de l'application React en limitant les rendus inutiles (React.memo, useCallback)."
    ],

    // metadonnees pour l'affichage dans la liste
    date: "2026-05-25",
    isFavorite: false,
    priority: 7,
    category: "Fullstack",

    // medias pour la galerie
    image: MongoBlogMin,
    screenshots: [MongoBlogMin, MongoBlogScreen1, MongoBlogScreen2, MongoBlogScreen3]
};