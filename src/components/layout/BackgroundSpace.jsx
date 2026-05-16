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

      {/* PLANETES */}
      {/* {{}}: syntaxe react (premiere {} previent que cest du js), deuxieme {} créent un objet avec les para */}
      {/* animationDelay -160s pour que les planetes soient deja visible */}
      <div className="planet-ringed" style={{ top: '55%', left: '0%', animationDelay: '-160s' }}></div>
      <div className="planet-moon" style={{ top: '10%', left: '20%', animationDelay: '-10s' }}></div>
      <div className="planet-mars" style={{ top: '40%', left: '0%', animationDelay: '-100s' }}></div>

      {/* HALO de lumière */}
      {/* absolute: pour placer nimporte ou sur la page */}
      {/* rounded-full: arrondie */}
      {/* blur-[140px]: floute le rond donne effet halo */}

      {/* 1er en haut à gauche */}
      {/* -top-[10%] & -left-[10%]: permet de pousser le halo en haut a gauche */}
      {/* w-[40vw] & h-[40vw]: largeur & hauteur a 40% sur l'ecran */}
      {/* bg-blue-600/10: bleu avec 10% dopacite */}
      <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-blue-600/15 rounded-full blur-[140px]"></div>
      {/* 2eme en bas a droite */}
      {/* w-[35vw] & h-[35vw]: + petit que le 1er */}
      {/* bg-blue-800/20: bleu + sombre mais + opaque (20%) */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[35vw] h-[35vw] bg-blue-800/20 rounded-full blur-[140px]"></div>

      {/* TEST */}
      {/* fix (trait pour les halos sur grands écrans) */}
      {/* color banding: evit les traits moches sur grands écrans */}
      {/* inset-0: prend 100% de l'écran (top 0 b 0 l 0 r 0) */}
      {/* opacity-[0.04]: extrement leger pour donner un leger effet */}
      {/* mix-blend-overlay: lelement fusionne avec le fond pour blender le rendu */}
      {/* pointer-events-none: OBLIGATOIRE, empeche les clics souris */}
      <div
        className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}
      ></div>
    </div>
  );
}

export default BackgroundSpace;