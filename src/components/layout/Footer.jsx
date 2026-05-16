// fichier composant qui gère le footer
// contient: partie avec btn contactez moi & le footer avec credits
// @param {Function} onContactClick: fonction pour ouvrir le formulaire de contact

import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer({ onContactClick }) {
    return (
        // les balises vides <> et </> : appelé fragment
        // react oblige quun composant retourne qu un élément parent
        // a cause des 2 blocs differents, fragment est obligatoire
        <>

            {/* BLOC CONTACTEZ MOI */}
            <div className="max-w-[1400px] mx-auto w-full px-6 py-12 relative z-10">
                <div className="glass-panel bg-space-panel rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border-t-2 border-blue-500/20 shadow-2xl">

                    {/* lumière bleue en bg */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* titre */}
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
                        <span className="nebula-text">Contactez-moi</span>
                    </h2>

                    {/* contenu texte */}
                    <p className="text-space-muted max-w-2xl mx-auto mb-8 relative z-10 text-xl">
                        <em>Je suis actuellement à la recherche d'une <strong>alternance</strong>.</em><br />
                        N'hésitez pas à me contacter pour discuter de vos projets !
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        {/* btn email (ouvre logiciel) */}
                        <a
                            href="mailto:alison.dehaies@epitech.eu"
                            className="px-8 py-4 bg-space-dark hover:bg-white/5 text-white border border-white/10 font-bold text-lg rounded-lg transition-all flex items-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
                            aria-label="M'envoyer directement un email"
                        >
                            Email direct
                        </a>

                        {/* btn formulaire contact */}
                        <button
                            onClick={onContactClick}
                            aria-label='Ouvrir le formulaire de contact'
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-lg transition-all shadow-neon-blue flex items-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
                        >
                            Formulaire de contact
                        </button>
                    </div>
                </div>
            </div>

            {/* FOOTER CREDITS */}
            <footer className="mt-auto border-t border-white/5 relative z-10">
                <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* partie gauche */}
                    <div className="space-y-4 text-center md:text-left text-space-text">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] opacity-80">Liaison de bord</h3>

                        <div className="flex justify-center md:justify-start gap-6">
                            {/* GitHub */}
                            <a
                                href="https://github.com/Meegy-exe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Mon profil GitHub"
                                className="text-space-muted hover:text-white transition-all hover:scale-110"
                            >
                                <FaGithub size={24} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/alison-dehaies-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Mon profil LinkedIn"
                                className="text-space-muted hover:text-blue-400 transition-all hover:scale-110"
                            >
                                <FaLinkedin size={24} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:alison.dehaies@epitech.eu"
                                aria-label="M'envoyer directement un email"
                                className="text-space-muted hover:text-blue-400 transition-all hover:scale-110"
                            >
                            </a>
                        </div>
                    </div>

                    {/* partie droite */}
                    <div className="flex flex-col items-center md:items-end gap-3 text-xs font-mono tracking-widest">
                        <p className="text-sm text-space-muted font-medium">© 2026 Alison Dehaies (Meegy)</p>

                        <a
                            href="https://lohanl3f.github.io/PortfolioYuko-React/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-space-muted hover:text-white transition-colors group text-sm"
                            aria-label="Portfolio de Lohan Lefèvre"
                        >
                            <Heart size={14} className="text-blue-500/50 group-hover:text-blue-400" />
                            <span className="uppercase">Avatar par Lohan Lefèvre</span>
                        </a>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;