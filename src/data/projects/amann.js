// fichier qui stocke les donnees du projet "Maison Amann"
// a importer ensuite dans portfolio.js

// import des images du projet
import AmannMin from '../../assets/projects/maison-amann/miniature/amann-min.png';
import AmannScreen1 from '../../assets/projects/maison-amann/screens/amann-screen1.png';
import AmannScreen2 from '../../assets/projects/maison-amann/screens/amann-screen2.png';
import AmannScreen3 from '../../assets/projects/maison-amann/screens/amann-screen3.png';

export const amann = {
    // id unique du projet
    id: 2, 
    
    // infos principales
    title: "Maison Amann",
    // phrase d'accroche (visible sur la petite carte)
    summary: "Site web réalisé lors du SAS Posture Pro auprès de l'Association Z code pour l'Emploi.",
    // tableau des technos
    technologies: ["HTML", "CSS", "GIT"],
    
    // organisation de l'equipe
    isGroupProject: true,
    teamSize: 4,
    
    // liens
    repository: "https://github.com/Meegy-exe/Maison-Amann", 
    demoLink: "https://meegy-exe.github.io/Maison-Amann/pages/index.html",

    // textes detaillés
    description: "Premier projet réalisé lors du SAS Posture Pro auprès de l'association Z code pour l'Emploi (phase de préparation avant l'entrée en formation). La Maison Amann est une vitrine pour une maison d’édition fictive, avec la particularité d'avoir un contenu entièrement rédigé en anglais.",
    instructions: "Il était demandé de faire un site simple en HTML/CSS entièrement en anglais, le choix du thème était libre.",
    
    // listes detaillees
    organisation: [
        "Répartition des tâches et travail collaboratif au sein d'un groupe de 4 personnes."
    ],
    lessonsLearned: [
        "Première grande prise en main de Git : création de branches, gestion des commits et premiers push.",
        "Apprentissage de la synchronisation du code en équipe sur un même dépôt pour éviter les conflits.",
        "Création d'une interface web basique en respectant la contrainte du projet en anglais."
    ],
    nextSteps: [],
    
    // metadonnees pour le tri
    date: "2025-10-15", 
    isFavorite: false, 
    priority: 1, 
    category: "Frontend", 
    
    // medias
    image: AmannMin, 
    screenshots: [AmannMin, AmannScreen1, AmannScreen2, AmannScreen3] 
};