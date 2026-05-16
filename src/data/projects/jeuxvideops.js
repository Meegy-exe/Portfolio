// fichier qui stocke les donnees de "Jeux VidéOPS"

// import des images du projet
import JeuxVideopsMin from '../../assets/projects/jeux-videops/miniature/jeuxvideops-min.png';
import JeuxVideopsScreen1 from '../../assets/projects/jeux-videops/screens/jeuxvideops-screen1.png';
import JeuxVideopsScreen2 from '../../assets/projects/jeux-videops/screens/jeuxvideops-screen2.png';

export const jeuxVideops = {
    // id unique
    id: 11,

    // infos principales
    title: "Jeux VidéOPS",
    summary: "Portail web de jeux rétro avec intégration d'une usine logicielle CI/CD et approche DevSecOps.",

    // stack technique
    technologies: ["HTML", "CSS", "TAILWIND/CSS", "JAVASCRIPT", "DOCKER", "GITHUB ACTIONS", "GITHUB PAGES"],

    // methodes de travail
    methods: ["Pipeline CI/CD", "DevSecOps", "Tests Unitaires", "Linting", "Méthode Agile"],

    // organisation
    isGroupProject: true,
    teamSize: 2,

    // liens
    repository: "https://github.com/RenaudBaussart/jeux_videops",
    demoLink: "https://renaudbaussart.github.io/jeux_videops/",

    // présentation du projet
    description: "Pas-Ciel-D'Hommes est une vitrine web offrant une expérience utilisateur immersive pour jouer à des jeux rétro. Le projet s'appuie sur une usine logicielle complète automatisant les tests, le linting et le déploiement sécurisé.",
    instructions: "Il était demandé de mettre en place des pipelines CI/CD permettant de faciliter le développement des jeux, garantir la qualité et la sécurité du code, et accélérer le déploiement.",

    organisation: [
        "Découpage du projet en tâches et suivi via Trello, avec une communication sur Discord.",
        "Répartition des rôles : chacun agissant comme Développeur et Opérateur sur un jeu.",
        "Utilisation stricte de la méthode Gitflow : travail isolé par branches (ex: feat/CI-pipeline) et Code Review via Pull Requests avant toute fusion.",
        "Conteneurisation de l'application via Docker (mise en place de 3 conteneurs distincts)."
    ],

    // ce que jai appris
    lessonsLearned: [
        "Déploiement réussi d'une plateforme 100% fonctionnelle avec des bons scores Lighthouse.",
        "Mise en place d'un pipeline CI/CD 100% automatisé (tests, audit des vulnérabilités, build et déploiement continu).",
        "Développement d'une forte capacité de modélisation logique pour surmonter la complexité (visualisation mentale) des workflows GitHub Actions.",
        "Apprentissage des concepts DevSecOps, notamment la gestion et l'injection sécurisée des secrets GitHub."
    ],

    // axe amelioration
    nextSteps: [
        "Apprendre à gérer des notifications d'échec de pipeline (ex: envoyer un message automatique sur Discord/Slack en cas d'erreur lors du déploiement).",
        "Optimiser le poids et la sécurité des images Docker générées en production."
    ],

    // infos pour le tri et l'affichage
    date: "2026-04-19",
    isFavorite: true,
    priority: 10,
    category: "Backend",

    // medias pour la galerie
    image: JeuxVideopsMin,
    screenshots: [JeuxVideopsMin, JeuxVideopsScreen1, JeuxVideopsScreen2]
};