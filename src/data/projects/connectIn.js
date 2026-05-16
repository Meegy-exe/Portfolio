// fichier qui stocke les donnees du projet "Connect'In V1"

// import des images du projet
import ConnectInMin from '../../assets/projects/connect-in-v1/miniature/connectin-min.png';
import ConnectInScreen1 from '../../assets/projects/connect-in-v1/screens/connectin-screen1.png';
import ConnectInScreen2 from '../../assets/projects/connect-in-v1/screens/connectin-screen2.png';
import ConnectInScreen3 from '../../assets/projects/connect-in-v1/screens/connectin-screen3.png';
import ConnectInScreen4 from '../../assets/projects/connect-in-v1/screens/connectin-screen4.png';
import ConnectInScreen5 from '../../assets/projects/connect-in-v1/screens/connectin-screen5.png';

export const connectIn = {
    // id unique
    id: 9,

    // infos principales
    title: "Connect'In V1",
    summary: "Mini réseau social d'entreprise.",

    // stack technique complete
    technologies: ["HTML", "CSS", "TAILWIND/CSS", "REACTJS", "PHP", "LARAVEL", "MYSQL", "POSTMAN"],

    // methodes de travail utilisees
    methods: ["API REST", "MVC", "Responsive Design", "SEO", "Méthode Agile"],

    // organisation de l'equipe
    isGroupProject: true,
    teamSize: 3,

    // liens
    repository: "https://github.com/Meegy-exe/Connect_in",
    demoLink: "",

    // textes de presentation
    description: "Connect'in The Hive est un réseau social d'entreprise sur lequel il est possible de gérer la création de comptes utilisateurs, de publications, de likes et commentaires.",
    instructions: "Il était demandé de : développer un réseau social interne pour une ESN (fictive).",

    // listes detaillees sur la gestion du projet
    organisation: [
        "Recherche et installation de la stack technique : Laravel, ReactJS, Tailwind CSS, et tests d'API avec Postman.",
        "Répartition des tâches et communication fluide au sein de l'équipe via Trello, Discord et Excalidraw.",
        "Structuration du projet optimisée (centralisation dans un dossier connection-api).",
        "Travail collaboratif sur Git : création de branches par 'feature' et commits réguliers.",
        "Processus avec des tests et correctifs réalisés régulièrement."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Apprentissage des bonnes pratiques d'accessibilité, bonnes performances (Lighthouse et code optimisé).",
        "Prise en main rapide et utilisation concrète de ReactJS.",
        "Implémentation réussie de fonctionnalités bonus (photo de profil, pagination, barre de recherche).",
        "Montée en compétences sur le travail collaboratif avec GitHub, notamment la gestions des commits de groupe et la résolution de conflits.",
        "Amélioration de la gestion du temps afin de respecter les délais du projet en équipe."
    ],

    // axe damelioration
    nextSteps: [
        "Ajouter la possibilité de suivre d'autres utilisateurs pour rendre le réseau plus interactif.",
        "Créer une messagerie privée ainsi qu'un système de groupes.",
        "Amélioration de l'espace utilisateur avec l'ajout d'une page de contact dédiée.",
        "Ajout d'une recherche plus avancée pour filtrer et retrouver des publications spécifiques."
    ],

    // metadonnees pour l'affichage dans la liste
    date: "2026-03-08",
    isFavorite: true,
    priority: 8,
    category: "Fullstack",

    // medias pour la galerie
    image: ConnectInMin,
    screenshots: [ConnectInMin, ConnectInScreen1, ConnectInScreen2, ConnectInScreen3, ConnectInScreen4, ConnectInScreen5]
};