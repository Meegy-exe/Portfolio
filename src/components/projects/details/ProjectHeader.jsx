// fichier composant qui gère le header de la page détaillé dun projet sélectionné
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// reformatagede la date (pour avoir le format fr)
// YYYY-MM-DD en DD Mois YYYY
const formatDateFr = (dateStr) => {
    // securité: sil nya pas de date, ne return rien
    if (!dateStr) return "";

    // decoupe la date séparer annee mois jour
    const parts = dateStr.split('-');

    // tableau avec les mois (lindex 0 étant janvier)
    const months = [
        "Janvier", "Février", "Mars",
        "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre",
        "Octobre", "Novembre", "Décembre"
    ];

    // (? :): operateur ternaire
    // mise en forme dans le cas d'une date complete affiche J M A
    // cas dune date juste M A
    // (-1 sur les mois car les tableaux commencent a 0)
    return parts[2] ? `${parseInt(parts[2], 10)} ${months[parseInt(parts[1], 10) - 1]} ${parts[0]}` : `${months[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
};

// bloc principal
// project: recupere les data du projet du composant parent
const ProjectHeader = ({ project }) => {
    return (
        // bloc principal du header
        <div className="glass-panel rounded-2xl p-8 border-t-2 border-blue-500/20 shadow-2xl bg-[#0d1117]">

            {/* titre & date */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                {/* bloc avec titre & résumé */}
                <div>
                    {/* titre du projet */}
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        {project.title}
                    </h1>
                    {/* résumé */}
                    <p className="text-xl text-blue-400 font-medium italic">
                        {project.summary}
                    </p>
                </div>

                {/* partie date */}
                <div className="flex items-center gap-3 bg-[#010103] p-3 rounded-xl border border-white/5">
                    <Calendar size={20} className="text-[#8b949e]" />
                    {/* appel pour la fonction de date */}
                    <span className="text-lg font-mono text-white">{formatDateFr(project.date)}</span>
                </div>
            </div>

            {/* btn voir projet & github */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                {/* GITHUB */}
                {/* sécurité: n'affiche le btn github que sil est renseigné */}
                {project.repository && project.repository.length > 0 && (
                    <a
                        href={project.repository}
                        // noopener noreferrer: obligatoire (evite les problemes des nouveaux onglets)
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all font-bold">
                        <FaGithub size={20} /> Code Source
                    </a>
                )}

                {/* btn voir projet */}
                {/* sécurité: n'affiche le btn que sil est renseigné */}
                {project.demoLink && project.demoLink.length > 0 && (
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                        Voir le projet en direct <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>
    );
};
export default ProjectHeader;