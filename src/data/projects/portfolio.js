// fichier qui stocke les donnees du projet "Portfolio"

// import des img
import PortfolioMin from '../../assets/projects/portfolio/miniature/portfolio-min.png';
import PortfolioScreen1 from '../../assets/projects/portfolio/screens/portfolio-screen1.png';
import PortfolioScreen2 from '../../assets/projects/portfolio/screens/portfolio-screen2.png';

export const portfolio = {
    // id unique
    id: 5,

    // infos principales
    title: "Portfolio",
    summary: "Site portfolio professionnel de 4 pages.",

    // stack technique
    technologies: ["HTML", "SCSS", "MARKDOWN", "JEKYLL LIQUID"],
    methods: ["Responsive Design", "SEO", "Accessibilité"],


    isGroupProject: false,

    // liens
    repository: "https://github.com/Meegy-exe/Projet-Portfolio",
    demoLink: "https://meegy-exe.github.io/Projet-Portfolio",

    // presentation du projet
    description: "Portfolio est un site permettant une présentation plus personnelle, une exposition des projets et ainsi qu'une visibilité auprès des recruteurs.",
    instructions: "Il était demandé de : créer et publier un site web portfolio avec Jekyll.",


    organisation: [
        "Recherche et préparation : apprentissage de Jekyll Liquid et de la syntaxe Markdown.",
        "Mise en place technique : installation des Gems Ruby et configuration du thème Midnight.",
        "Sauvegarde optimisée : création d'alias Git pour faciliter et accélérer les pushs.",
        "Déploiement : correctifs des bugs et mise en ligne automatisée via GitHub Actions."
    ],

    // ce que j'ai appris
    lessonsLearned: [
        "Amélioration des performances et accessibilité (Validator W3C OK, scores Lighthouse à 100%).",
        "Bonne gestion et compréhension globale du projet.",
        "Création d'un design fluide, agréable et à l'image de ma personnalité.",
        "Surpassement des difficultés liées à la logique Liquid (compréhension de la syntaxe et des boucles).",
        "Résolution des bugs lors de l'installation du template et la mise en place des imports SCSS."
    ],

    // axe damelioration
    nextSteps: [
        "Mise en place d'un backend pour rendre le formulaire de contact 100% fonctionnel.",
        "Ajout d'animations CSS/JS pour rendre les transitions entre les pages plus fluides.",
        "Amélioration de l'expérience utilisateur avec la possibilité de basculer sur un thème clair.",
        "Enrichissement du contenu (ajout de nouveaux projets, intégration d'easter eggs)."
    ],

    // infos pour le tri
    date: "2026-01-11",
    isFavorite: true,
    priority: 5,
    category: "Frontend",

    // medias pour la galerie
    image: PortfolioMin,
    screenshots: [PortfolioMin, PortfolioScreen1, PortfolioScreen2]
};