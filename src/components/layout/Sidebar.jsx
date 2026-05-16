// fichier composant qui gère la sidebar
// contient: pp, infos et skills

import React, { useState } from 'react';
import { Terminal, Book, MapPin } from 'lucide-react';
// import data depuis portfolio.js
import { profilData, skillsData } from '../../data/portfolio';
// import pp
import Avatar from '../../assets/profile/avatar.webp';

function Sidebar() {
  // crée un état pour le texte dans la bulle (par defauts juste ...)
  const [bubbleState, setBubbleState] = useState('dots');

  return (
    // sidebar prend 25% de lécran
    <aside className="lg:w-1/4 space-y-6">
      {/* CARD PROFILE */}
      <div className="glass-panel bg-space-panel rounded-xl p-6 shadow-2xl space-y-4 border-t-2 border-blue-500/10">

        {/* bloc pp */}
        <div className="relative mb-6 mt-12 flex justify-center">
          {/* selon etat */}
          {/* bulle SANS texte*/}
          <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-16 bg-white text-black p-2 rounded-full text-lg font-bold text-center shadow-xl transition-all duration-300 origin-bottom z-10 ${bubbleState === 'dots' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
            }`}>
            ...
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white"></div>
          </div>

          {/* bulle AVEC texte */}
          <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-52 bg-white text-black p-3 rounded-2xl text-[13px] font-bold text-center shadow-xl transition-all duration-300 origin-bottom z-20 ${bubbleState === 'message' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
            }`}>
            Vous pouvez aussi m'appeler Meegy !
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white"></div>
          </div>

          {/* pp */}
          {/* si curseur ou non */}
          <div
            className="w-32 h-32 rounded-full border-2 border-blue-500/30 overflow-hidden relative group cursor-pointer bg-space-dark shadow-lg hover:shadow-neon-blue transition-shadow duration-300"
            onMouseEnter={() => setBubbleState('message')}
            onMouseLeave={() => setBubbleState('dots')}
          >
            <img
              src={Avatar}
              alt={`Avatar de ${profilData.name}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* data du profil */}
        <div>
          <h2 className="text-3xl font-black text-white leading-tight">
            {profilData.name}</h2>
          <p className="text-xl text-blue-400 font-light tracking-tight mt-1">
            {profilData.username}</p>
        </div>

        {/* BIO */}
        <div className="py-5 border-t border-b border-white/5">
          {/* bordure bleue sur la gauche" */}
          <div className="pl-4 border-l-2 border-blue-500/30">
            <div
              // text-pretty: empêche que les mots soient coupés
              // dangerouslySetInnerHTML: de base react emepche les injections de code, dans ce cas ça permet de dire que cest un code sur
              className="text-base leading-relaxed text-space-muted italic text-pretty"
              dangerouslySetInnerHTML={{ __html: profilData.bio }}
            />
          </div>
        </div>

        {/* info (metier, ecole, lieu) */}
        <div className="space-y-4 text-base text-space-muted pt-5">
          <div className="flex items-center gap-3">
            <Terminal size={18} className="text-blue-400" /> {profilData.role}
          </div>
          <div className="flex items-center gap-3">
            <Book size={18} className="text-space-muted" /> {profilData.school}
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-blue-400" /> {profilData.location}
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="glass-panel bg-space-panel rounded-xl p-8 shadow-2xl min-h-[420px] flex flex-col border-t-2 border-blue-500/10">

        {/* titre */}
        <h3 className="text-base font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4 flex items-center gap-2">
          Compétences
        </h3>

        {/* bloc des skills */}
        <div className="space-y-6 flex-grow">

          {skillsData.map((categoryData) => (
            <div key={categoryData.category}>

              <p className="text-xs text-blue-400 font-bold uppercase mb-3 tracking-wider">
                {categoryData.category}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {categoryData.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-space-text bg-white/5 border border-white/10 text-xs px-3 py-1.5 rounded hover:border-blue-400/50 hover:text-white transition-all cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

    </aside>
  );
}

export default Sidebar;