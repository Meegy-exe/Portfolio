// fichier principal qui sert de bdd pour tout le portfolio

// infos de profil (affichees dans la sidebar a gauche)
export const profilData = {
    name: "Alison Dehaies",
    username: "Meegy-exe",
    role: "Développeuse Web",
    school: "Epitech Lille | Web@cadémie",
    location: "Lille",
    // injecte html de la bio
    bio: "Passionnée par la création, ce qui me plaît le plus c'est de <strong class='text-blue-400 font-medium'>voir un projet prendre vie</strong> grâce à une simple ligne de code."
};

// tableau des competences classées par categorie
export const skillsData = [
    {
        category: "Frontend",
        items: ["HTML", "CSS", "TAILWIND/CSS", "REACT", "JAVASCRIPT"]
    },
    {
        category: "Backend",
        items: ["PHP", "LARAVEL", "DOMPDF", "JAVA", "SPRING BOOT", "C# avec Unity", "MYSQL"]
    },
    {
        category: "Outils & Méthodes",
        items: ["GIT", "DOCKER", "LINUX", "JEKYLL"]
    },
];

// import de tous les fichiers de projets
import { lezard } from './projects/lezard.js';
import { amann } from './projects/amann.js';
import { creditAlison } from './projects/creditAlison.js';
import { klivio } from './projects/klivio.js';
import { generatorCv } from './projects/generateurCv.js';
import { portfolio } from './projects/portfolio.js';
import { popeye } from './projects/popeye.js';
import { myCinema } from './projects/myCinema.js';
import { connectIn } from './projects/connectIn.js';
import { connectInV2 } from './projects/connectInV2.js';
import { jeuxVideops } from './projects/jeuxvideops.js';

// import { learnsphere } from './projects/learnSphere.js';
// import { meowCity } from './projects/meowCity.js';

// tableau final qui regroupe l'ensemble des projets
// le tableau est envoyé au composant ProjectsList
export const projectData = [
    lezard,
    amann,
    creditAlison,
    klivio,
    generatorCv,
    portfolio,
    popeye,
    myCinema,
    connectIn,
    connectInV2,
    jeuxVideops,
    // learnsphere,
    // meowCity
];