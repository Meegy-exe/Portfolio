// fichier qui gere le composant de la page d'accueil
// @param {Function} onNavigateToProjects: fonction recu du parent pour le changement de page (App.jsx)

import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Home({ onNavigateToProjects }) {
  return (
    // bloc principal accueil
    <div className="glass-panel bg-space-panel rounded-xl p-8 md:p-12 shadow-2xl border-t-2 border-blue-500/10 min-h-[60vh] flex flex-col justify-center items-center text-center relative overflow-hidden">

      {/* fond rond pour la pp */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* titre sur le centre */}
      <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight leading-tight z-10">
        Hello !<br />
        Je suis <span className="nebula-text">Alison Dehaies</span>,
      </h1>

      {/* sous-titre dev */}
      <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-8 z-10">
        développeuse Web <span className="text-blue-400 font-mono text-xl md:text-2xl">v1.0_</span>
      </h2>

      {/* &nbsp;: espace insécable, permet de garder le mot et le signe de ponctuation collé */}
      <div className="text-balance text-lg text-space-muted w-full max-w-5xl mx-auto mb-10 leading-relaxed z-10 space-y-4">
        <p>
          J'ai commencé par un simple projet de jeu web avec un ami, mais c'est vite devenu <strong className="text-space-text font-medium">une passion&nbsp;!</strong>
        </p>
        <p>
          Ça peut paraître bateau, mais ce qui me plaît le plus, c'est de voir une simple ligne de code se transformer en projet.
        </p>
        <p>
          D'abord autodidacte, je consolide aujourd'hui mes compétences auprès de la <strong className="text-blue-400/80 font-medium">Web@cadémie d'Epitech Lille</strong> pour un cursus intensif de deux ans.
        </p>
        <p>
          Je suis actuellement à la recherche d'une <strong className="text-space-text font-medium">alternance de 14 mois pour la période de septembre 2026 à octobre 2027.</strong>
        </p>
        <p>
          Mobile sur la métropole lilloise et tout le bassin minier (Lens, Arras, Béthune), j'ai hâte de rejoindre une équipe pour continuer à voir des projets se construire, mais cette fois-ci, avec vous !
        </p>
      </div>

      {/* zone des btns */}
      <div className="flex flex-wrap justify-center gap-6 z-10">

        {/* btn projetBouton */}
        {/* onNavigateToProject: fait le lien entre le parent (app.jsx) et lenfant (home.jsx) */}
        {/* en gros quand luser clique lenfant dit au parent de changer laffichage pour la page projets */}
        <button
          onClick={onNavigateToProjects}
          aria-label="Mes projets"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-neon-blue flex items-center gap-3 transform hover:-translate-y-1 text-lg"
        >
          Découvrir mes projets
        </button>

        {/* btn vers GitHub */}
        <a
          href="https://github.com/Meegy-exe"
          target="_blank"
          aria-label="Mon GitHub"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-space-dark hover:bg-white/5 text-space-text hover:text-white font-bold rounded-lg border border-white/10 hover:border-blue-400/50 transition-all flex items-center gap-3 transform hover:-translate-y-1 text-lg"
        >
          <FaGithub size={24} className="group-hover:scale-110 transition-transform duration-300" />
          Mon GitHub
        </a>

      </div>
    </div>
  );
}

export default Home;