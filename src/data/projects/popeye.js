// fichier qui stocke les donnees de "Popeye"

// import img
import PopeyeMin from '../../assets/projects/popeye/miniature/popeye-min.png';

export const popeye = {
    // id unique
    id: 8,

    // infos principales
    title: "Popeye",
    summary: "Premier projet vers Docker.",

    // stack technique
    technologies: ["DOCKER"],
    methods: ["API"],

    isGroupProject: false,

    // liens
    repository: "https://github.com/Meegy-exe/popeye",
    demoLink: "",

    // presentation du projet
    description: "Popeye est un projet visant à la découverte de Docker et à la compréhension de l'organisation des conteneurs.",
    instructions: "Il était demandé de : dockeriser une application en créant des images et en gérant des conteneurs.",

    organisation: [
        "Étude de la conteneurisation et des différences entre images et conteneurs.",
        "Rédaction des Dockerfiles (test et validation étape par étape).",
        "Tests des environnements isolés en local avant la soumission au correcteur automatisé.",
        "Utilisation de Git pour versionner les configurations."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Compréhension de l'architecture Docker et de l'isolation des processus.",
        "Création d'environnements de développement standardisés et reproductibles.",
        "Résolution de bugs liés à la configuration réseau entre les conteneurs."
    ],

    // axe damelioration
    nextSteps: [
        "Apprendre à utiliser Docker Compose pour orchestrer des architectures multi-conteneurs complexes.",
        "Travailler sur l'optimisation (réduction du poids) des images Docker générées.",
        "Explorer le déploiement de conteneurs sur des serveurs distants."
    ],

    // infos pour le tri
    date: "2026-02-15",
    isFavorite: false,
    priority: 6,
    category: "Backend",

    // medias
    image: PopeyeMin,
    screenshots: [PopeyeMin]
};