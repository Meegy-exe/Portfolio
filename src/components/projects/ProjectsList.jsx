// fichier composant qui gère l'affichage de la liste des projets le tri & la pagination
// recupere les props (parametres) depuis app.jsx pour gerer les clics

import React, { useState, useEffect } from 'react';
import { Terminal, Search, ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProjectCard from './ProjectCard';

function ProjectsList({
  currentProjects,
  searchQuery,
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalPages,
  setSelectedProject
}) {
  // etat local pour gerer l'ouverture du menu de tri
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // fix probleme de pagination
  // attend que react affiche la nouvelle currentPage avant de sexecuter
  useEffect(() => {
    // auto: evite les bugs daffichage sur mobile
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);

  return (
    // bloc principal (fragment vide pour pas casser la grille du parent)
    <>
      {/* HEADER & btn du filtre */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-6">

        {/* titre: change si ya une recherche en cours */}
        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          <Terminal size={22} className="text-blue-400" />
          {searchQuery ? `Résultats pour "${searchQuery}"` : "Listes des projets"}
        </h2>

        {/* bloc de tri a droite */}
        <div className="flex flex-wrap items-center gap-3">

          <span className="text-sm font-semibold text-space-text flex items-center gap-1.5">
            <SlidersHorizontal size={16} className="text-blue-400" /> Trier par :
          </span>

          {/* bloc du btn & du menu */}
          <div className="relative">
            {/* btn principal de tri */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-space-dark border border-blue-500/30 text-white text-sm rounded-full px-5 py-2.5 focus:outline-none hover:border-blue-500/80 hover:shadow-neon-blue transition-all flex items-center gap-2"
            >
              {/* affiche le texte selon le tri choisi */}
              {sortBy === 'recent' && 'Plus récents'}
              {sortBy === 'pertinent' && 'Pertinence'}
              {sortBy === 'favorites' && 'Favoris en premier'}
              {sortBy === 'oldest' && 'Plus anciens'}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-400' : 'text-space-muted'}`} />
            </button>

            {/* affiche le menu deroulant SI il est ouvert */}
            {isDropdownOpen && (
              <>
                {/* fond invisible pour fermer en cliquant a cote */}
                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>

                {/* menu visuel */}
                <div className="absolute right-0 mt-2 w-48 bg-space-dark border border-blue-500/30 rounded-xl shadow-2xl z-50 overflow-hidden py-1 backdrop-blur-md">
                  {/* boucle pour creer les btns d'options */}
                  {[
                    { id: 'recent', label: 'Plus récents' },
                    { id: 'pertinent', label: 'Pertinence' },
                    { id: 'favorites', label: 'Favoris en premier' },
                    { id: 'oldest', label: 'Plus anciens' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        // retourne page 1 a chaque nouveau tri 
                        setCurrentPage(1);
                        // ferme le menu
                        setIsDropdownOpen(false);
                      }}
                      // change le style si cest l'option active
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${sortBy === option.id
                          ? 'bg-blue-500/20 text-blue-400 font-bold border-l-2 border-blue-400'
                          : 'text-space-text hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* grid projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

        {/* sil y a des projets alors affiche la boucle, sinon affiche msg erreur */}
        {currentProjects.length > 0 ? (
          currentProjects.map((projet) => (
            <div
              key={projet.id}
              onClick={() => setSelectedProject(projet)}
              className="cursor-pointer h-full"
            >
              <ProjectCard project={projet} />
            </div>
          ))
        ) : (
          // affichage quand ya aucun projet (recherche vide par ex)
          <div className="col-span-1 md:col-span-2 glass-panel bg-space-panel rounded-lg p-20 text-center border-dashed border-white/10">
            <Search size={48} className="mx-auto text-blue-500 mb-4 opacity-30" />
            <p className="text-lg text-space-muted font-bold uppercase tracking-widest opacity-40">Données introuvables.</p>
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {/* securité: s'affiche que si on a plus d'une page */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 pt-6 border-t border-white/5">

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-center">

            {/* btn precedent */}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                // remonte en haut au clic
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              // si btn est desactite alors il devient gris, sinon normal
              className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-all font-bold text-sm ${currentPage === 1
                  ? 'text-space-muted opacity-50 cursor-not-allowed bg-transparent'
                  : 'text-space-text hover:bg-white/10 hover:text-white active:scale-95'
                }`}
            >
              <ChevronLeft size={18} />
              <span className="hidden xs:inline">Précédent</span>
            </button>

            {/* page actuelle */}
            <span className="text-space-muted font-mono text-xs px-4 py-2 bg-space-dark rounded-xl border border-white/10 shadow-inner whitespace-nowrap">
              Page <strong className="text-white">{currentPage}</strong> <span className="opacity-50">/</span> {totalPages}
            </span>

            {/* btn suivant */}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                // remonte en haut au clic 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              // si btn est desactive devient gris, sinon normal
              className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-all font-bold text-sm ${currentPage === totalPages
                  ? 'text-space-muted opacity-50 cursor-not-allowed bg-transparent'
                  : 'text-space-text hover:bg-white/10 hover:text-white active:scale-95'
                }`}
            >
              <span className="hidden xs:inline">Suivant</span>
              <ChevronRight size={18} />
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsList;