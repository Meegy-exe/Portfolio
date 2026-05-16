// fichier qui stocke les donnees de "Crédit Alison"

// import des images du projet
import CreditMin from '../../assets/projects/credit-alison/miniature/creditalison-min.png';
import CreditScreen1 from '../../assets/projects/credit-alison/screens/creditalison-screen1.png';
import CreditScreen2 from '../../assets/projects/credit-alison/screens/creditalison-screen2.png';

export const creditAlison = {
    // id
    id: 3,

    // infos principales
    title: "Crédit Alison",
    summary: "Site web de banque en ligne fictive réalisé lors du SAS Posture Pro auprès de l'Association Z code pour l'Emploi.",

    // stack technique
    technologies: ["HTML", "CSS", "JAVASCRIPT"],

    // organisation de l'equipe
    isGroupProject: true,
    teamSize: 3,

    // liens
    repository: "",
    demoLink: "",

    // présentation du projet
    description: "Crédit Alison est une banque en ligne fictive. Le but était de reproduire une interface de consultation de compte bancaire avec des fonctionnalités interactives.",
    instructions: "Il était demandé de faire un site simple de 3 pages en HTML/CSS avec une technologie au choix soit JS soit PHP. On a choisi JavaScript pour commencer à apprendre la logique de programmation.",

    organisation: [
        "Première répartition des rôles sur un projet multi-pages.",
        "Utilisation d'Excalidraw pour schématiser l'interface avant de coder.",
        "Communication et suivi du projet en équipe."
    ],

    // ce que jai appris
    lessonsLearned: [
        "Découverte de JavaScript : manipulation du DOM pour rendre la page dynamique.",
        "Apprentissage de la gestion des formulaires et de l'affichage conditionnel.",
        "Compréhension de la structure d'un site à plusieurs pages interconnectées."
    ],

    // axe damelioration
    nextSteps: [
        "Ajouter un système de virement fictif entre les comptes.",
        "Mettre en place une page de connexion sécurisée."
    ],

    // infos pour le tri et l'affichage
    date: "2025-10-31",
    isFavorite: false,
    priority: 1,
    category: "Fullstack",

    // medias pour la galerie
    image: CreditMin,
    screenshots: [CreditMin, CreditScreen1, CreditScreen2]
};