// fichier composant qui gère le header (dont nav bar)
// paramètres hérités du parent (app.jsx) :
// activePage: nom de la page sur laquelle luser est, qui est bien affichée
// setActivePage: fonction pour changer de page
// searchQuery: texte tapé dans la barre de recherche
// handleSearchInputChange: fonction qui s'active quand luser tape du texte
// handleSearchKeyPress : fonction qui s'active quand luser appuie sur touche entrée
// setSelectedProject : fonction pour désélectionner un projet & revenir à la liste

import React from 'react';
import { Code, Search, Quote } from 'lucide-react';

function Header({ 
  activePage, 
  setActivePage, 
  searchQuery, 
  handleSearchInputChange, 
  handleSearchKeyPress, 
  setSelectedProject 
}) {
  return (
    <header className="github-nav-bg py-4 px-6 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6">
        {/* PARTIE GAUCHE (logo, menu, recherche) */}
        <div className="flex items-center gap-6 flex-1">
          
          {/* logo cliquable */}
          <button
            onClick={() => { 
              setActivePage('Accueil'); 
              setSelectedProject(null);
            }}
            className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center bg-space-panel/60 group cursor-pointer hover:border-white transition-colors shadow-lg"
            aria-label="Retour à l'accueil"
          >
            {/* hover sur le logo */}
            <Code className="text-blue-400 group-hover:text-white transition-colors" size={20} />
          </button>

          {/* navigation */}
          {/* responsive: display none sur mobile, display sur pc */}
          <nav className="hidden md:flex items-center gap-6 text-base font-semibold">
            {/* boucle pour afficher les btns */}
            {['Accueil', 'Projets', 'Contact'].map((page) => (
              <button
              // react exige clé unique avec boucle map()
                key={page}
                onClick={() => { 
                  setActivePage(page); 
                  setSelectedProject(null); 
                }}
                // si la page est active ALORS met la classe nebula-text
                className={`flex items-center transition-all ${
                  activePage === page ? 'nebula-text' : 'text-space-text hover:text-white'
                }`}
                // SINON met en gris
                >
                {page}
              </button>
            ))}
          </nav>

          {/* NAV BAR */}
          <div className="relative flex-1 max-w-[350px] ml-4 group">
            {/* icone loupe position absolue pour quelle soit dans l'input */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-space-muted" />
            </div>
            
            {/* champ de texte */}
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchKeyPress}
              className="block w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-md text-base text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-space-muted"
            />
          </div>
        </div>

        {/* PARTIE DROITE (citation) */}
        {/* WARNING: rajouter dautres citations */}

        {/* responsive: display none sur petits pc & mobile (garde barre de recherche) */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-space-text italic font-mono">
          <Quote size={14} className="text-blue-400" />
          <p>"Heroes never die !" - Mercy</p>
        </div>

      </div>
    </header>
  );
}

export default Header;