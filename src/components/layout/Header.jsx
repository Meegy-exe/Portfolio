// fichier composant qui gère le header (dont nav bar)
// paramètres hérités du parent (app.jsx) :
// activePage: nom de la page sur laquelle luser est, qui est bien affichée
// setActivePage: fonction pour changer de page
// searchQuery: texte tapé dans la barre de recherche
// handleSearchInputChange: fonction qui s'active quand luser tape du texte
// handleSearchKeyPress: fonction qui s'active quand luser appuie sur touche entrée
// setSelectedProject: fonction pour désélectionner un projet & revenir à la liste

// garde letat en memoire
import React, { useState } from 'react';
import { Code, Search, Quote, Menu, X } from 'lucide-react';

function Header({
  activePage,
  setActivePage,
  searchQuery,
  handleSearchInputChange,
  handleSearchKeyPress,
  setSelectedProject
}) {
  // état local : mémoire pour savoir si le menu mobile est ouvert (true) ou fermé (false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="github-nav-bg py-4 px-6 sticky top-0 z-50">
      {/* flex-col: pour afficher le menu burger mobile en dessous */}
      <div className="max-w-[1400px] mx-auto flex flex-col">

        {/* bloc principal du header */}
        <div className="flex items-center justify-between gap-3 md:gap-6 w-full">

          {/* PARTIE GAUCHE (logo, menu, recherche) */}
          <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">

            {/* logo (cliquable) */}
            <button
              onClick={() => {
                setActivePage('Accueil');
                setSelectedProject(null);
                setIsMobileMenuOpen(false);
              }}
              className="w-10 h-10 shrink-0 rounded-full border border-blue-500/30 flex items-center justify-center bg-space-panel/60 group cursor-pointer hover:border-white transition-colors shadow-lg"
              aria-label="Retour à l'accueil"
            >
              {/* hover sur le logo */}
              <Code className="text-blue-400 group-hover:text-white transition-colors" size={20} />
            </button>

            {/* navigation sur PC */}
            <nav className="hidden md:flex items-center gap-6 text-base font-semibold">
              {['Accueil', 'Projets', 'Contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setActivePage(page);
                    setSelectedProject(null);
                  }}
                  className={`flex items-center transition-all ${activePage === page ? 'nebula-text' : 'text-space-text hover:text-white'
                    }`}
                >
                  {page}
                </button>
              ))}
            </nav>

            {/* NAV BAR */}
            <div className="relative flex-1 max-w-[350px] ml-0 md:ml-4 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-space-muted" />
              </div>
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

          {/* PARTIE DROITE (citation + bouton burger mobile) */}
          <div className="flex items-center gap-4 shrink-0">
            {/* citation PC */}
            <div className="hidden lg:flex items-center gap-2 text-sm text-space-text italic font-mono">
              <Quote size={14} className="text-blue-400" />
              <p>"Heroes never die !" - Mercy</p>
            </div>

            {/* BTN MENU BURGER uniquement sur tel */}
            <button
              className="md:hidden text-space-text hover:text-white transition-colors flex items-center justify-center p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENU BURGER (ouvert) */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 pb-2">
            {['Accueil', 'Projets', 'Contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setActivePage(page);
                  setSelectedProject(null);
                  // Ferme le menu au clic
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-semibold py-2 transition-all ${activePage === page ? 'nebula-text pl-2 border-l-2 border-blue-500' : 'text-space-text hover:text-white'
                  }`}
              >
                {page}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;