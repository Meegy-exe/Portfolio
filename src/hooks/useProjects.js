// fichier hook qui gère la logique de la liste des projets
// recupere les donnees initiales et defini 4 projets par page par defaut

import { useState, useMemo } from 'react';

export function useProjects(initialProjects, projectsPerPage = 4) {
  // etats locaux (la memoire du hook)
  // texte tapé dans la barre de recherche
  const [searchQuery, setSearchQuery] = useState('');
  // type de tri actuel (recent par defaut)
  const [sortBy, setSortBy] = useState('recent');
  // numero de la page actuelle
  const [currentPage, setCurrentPage] = useState(1);

  // useMemo: opti react le code dedans ne se relance QUE si un truc dans le tableau a la fin change
  // ca evite de recalculer tout le tri a chaque fois que luser clique sur un truc
  const { currentProjects, totalPages } = useMemo(() => {
    
    // etape filtrage avec la barre de recherche
    // garde que les projets qui contiennent le texte tapé (dans le titre, la caté ou les tech)
    let processed = initialProjects.filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // etape tri
    processed.sort((a, b) => {
      // tri par favoris (etoile) d'abord, puis par date
      if (sortBy === 'favorites') {
        if (b.isFavorite !== a.isFavorite) {
          return Number(b.isFavorite) - Number(a.isFavorite);
        }
        return new Date(b.date) - new Date(a.date);
      }
      // tri par date decroissante (+ recent)
      if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
      // tri par date croissante (+ ancien)
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      // tri par pertinence (note de priorité que tu as mis dans tes datas)
      if (sortBy === 'pertinent') return (b.priority || 0) - (a.priority || 0);
      
      return 0; // si rien correspond, bouge pas
    });

    // etape pagination
    // calcul du nb total de pages
    const total = Math.ceil(processed.length / projectsPerPage);
    
    // decoupe le tableau pour garder que les 4 projets de la page actuelle
    const paginated = processed.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    );

    // renvoie le resultat de tous ces calculs
    return { currentProjects: paginated, totalPages: total };
    
  }, [initialProjects, searchQuery, sortBy, currentPage, projectsPerPage]); // <--- les variables surveillées par useMemo

  // a la fin du hook, renvoie toutes les variables et les fonctions de modification
  // pour que le composant qui l'utilise (app.jsx) puisse s'en servir
  return {
    searchQuery, setSearchQuery,
    sortBy, setSortBy,
    currentPage, setCurrentPage,
    currentProjects, totalPages
  };
}