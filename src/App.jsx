// fichier principal de l'app (chef d'orchestre qui rassemble tous les components)

import React, { useState, useEffect } from 'react';
import BackgroundSpace from './components/layout/BackgroundSpace';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import ProjectsList from './components/projects/ProjectsList';
import ProjectDetails from './components/projects/ProjectDetails';
import ContactForm from './components/contact/ContactForm';

// import des datas & logique
import { projectData } from './data/portfolio';
import { useProjects } from './hooks/useProjects';

// import styles
import './App.css';
import './universe.css';

function App() {
  // etats locaux : memoire lapp pour savoir sur quelle page est luser (defaut accueil)
  const [activePage, setActivePage] = useState('Accueil');
  // pour savoir quel projet luser regarde (defaut aucun)
  const [selectedProject, setSelectedProject] = useState(null);

  // recupere toutes les var & fonctions depuis le hook (useProject)
  const {
    searchQuery, setSearchQuery, sortBy, setSortBy,
    currentPage, setCurrentPage, currentProjects, totalPages
  } = useProjects(projectData, 4);

  // quand la var activePage / selectedProject change alors fait scroller luser en haut des projets
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProject]);

  // fonction decoute pour ce qui est tapé dans la barre de recherche
  // si luser tape entrée alors
  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      // affiche page projet
      setActivePage('Projets');
      setSelectedProject(null);
    }
  };

  // fonction pour decider quel projet afficher selon le clic user
  const renderContent = () => {
    // si luser est sur page contact ALORS
    if (activePage === 'Contact') {
      // affiche page contact
      return <ContactForm onBack={() => setActivePage('Projets')} />;
    }
    // si  luser est sur page accueil ALORS
    if (activePage === 'Accueil') {
      // affiche page accueil
      return <Home onNavigateToProjects={() => setActivePage('Projets')} />;
    }
    // SI projet cliqué ALORS
    if (selectedProject) {
      // affiche la page détaillé du projet
      return <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }

    // par defaut afiche grid des projets
    return (
      <ProjectsList
        currentProjects={currentProjects}
        searchQuery={searchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        setSelectedProject={setSelectedProject}
      />
    );
  };

  return (
    // bloc principal de la page
    <div className="min-h-screen font-sans relative overflow-x-hidden flex flex-col">

      {/* planète en fond + étoile */}
      <BackgroundSpace />

      {/* z-10 important pour que le contenu principal soit au dessus du fond */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* barre de navigation */}
        <Header
          activePage={activePage}
          setActivePage={setActivePage}
          searchQuery={searchQuery}
          handleSearchInputChange={(event) => setSearchQuery(event.target.value)}
          handleSearchKeyPress={handleSearchKeyPress}
          setSelectedProject={setSelectedProject}
        />

        {/* body de la page (sidebar sur la gauche, contenu principale milieu droite) */}
        <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col lg:flex-row gap-8 py-8 relative flex-grow">
          <Sidebar />
          <main className="lg:w-3/4 space-y-6">
            {renderContent()}
          </main>
        </div>

        {/* footer page */}
        <Footer onContactClick={() => {
          setActivePage('Contact');
          // addoucit le scroll
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
      </div>
    </div>
  );
}

export default App;