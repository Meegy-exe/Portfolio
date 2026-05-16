// fichier composant qui gère le ciel etoilé
import React from 'react';

function BackgroundSpace() {
  return (
    // bloc principal
    // fixed inset-0: prend tout l'écran et reste fixe au scroll
    // z-0: place tout au fond
    // pointer-events-none: empêche le fond de bloquer la souris
    <div className="fixed inset-0 pointer-events-none z-0">

      {/* LAYER DETOILES */}
      {/* div représente une couche détoiles, avec leger mouvement (different mouvement selon la div) */}
      <div className="absolute inset-0 stars-layer-1 opacity-40"></div>
      <div className="absolute inset-0 stars-layer-2"></div>
      <div className="absolute inset-0 stars-layer-3"></div>
      <div className="absolute inset-0 stars-layer-colored"></div>

      {/* ETOILES FILANTES */}

      {/* 1: haut à droite (démarre après 2 sec du chargement du site) */}
      <div className="shooting-star absolute top-[15%] right-[20%] [animation-delay:2s]"></div>

      {/* 2: milieu à droite (démarre après 8 sec) */}
      <div className="shooting-star absolute top-[45%] right-[10%] [animation-delay:8s]"></div>

      {/* 3: bas à droite (démarre après 4 sec) */}
      <div className="shooting-star-purple absolute bottom-[20%] right-[15%] [animation-delay:4s]"></div>

      {/* HALOS LUMINEUX */}
      {/* 1: haut à gauche */}
      <div className="absolute -top-[10%] -left-[10%] w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[140px]"></div>

      {/* 2: bas à droite */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] bg-blue-800/15 rounded-full blur-[140px]"></div>

      {/* PLANETES */}
      {/* {{}}: syntaxe react (premiere {} previent que cest du js), deuxieme {} créent un objet avec les para */}
      {/* animationDelay -160s pour que les planetes soient deja visible */}
      <div className="planet-ringed" style={{ top: '55%', left: '0%', animationDelay: '-160s' }}></div>
      <div className="planet-moon" style={{ top: '10%', left: '20%', animationDelay: '-10s' }}></div>
      <div className="planet-mars" style={{ top: '40%', left: '0%', animationDelay: '-100s' }}></div>

      {/* HALO de lumière */}
      {/* absolute: pour placer nimporte ou sur la page */}
      {/* -top-[10%] & -left-[10%]: permet de pousser le halo en haut a gauche */}
      {/* w-1/2 h-1/2: largeur & hauteur a 50% sur l'ecran. */}
      {/* bg-blue-600/10: bleu avec 10% dopacite */}
      {/* rounded-full: arrondie */}
      {/* blur-[140px]: floute le rond donne effet halo */}

      {/* 1er en haut à gauche */}
      <div className="absolute -top-[10%] -left-[10%] w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[140px]"></div>

      {/* 2eme en bas a droite */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] bg-blue-800/15 rounded-full blur-[140px]"></div>
    </div>
  );
}

export default BackgroundSpace;