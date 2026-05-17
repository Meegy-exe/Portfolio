// fichier composant qui gère l'affichage à quoi ressemble une card de projet
// recoit le para project qui cible les datas d'un projet en particulier

import React from 'react';
import { Calendar, Star, Users, User, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// fonction pour que les dates anglaises apparaissent de maniere fr
function formatDateFr(dateStr) {
    // securité sil n'y a pas de date
    if (!dateStr) return "";

    // ajout un tiret dans la date
    const parts = dateStr.split('-');

    // tableau des mois
    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const year = parts[0];
    // récupère les mois en lettre
    const month = months[parseInt(parts[1], 10) - 1];
    // permet davoir le jour non indiqué
    const day = parts[2];

    // SI il y a un jour alors ça l'affiche sinon juste mois & année
    if (day) return `${parseInt(day, 10)} ${month} ${year}`;
    return `${month} ${year}`;
}

function ProjectCard({ project }) {
    // sécurité: sil y a bien une img
    const hasImage = project.image && (typeof project.image === 'string' ? project.image.length > 0 : !Array.isArray(project.image) || project.image.length > 0);

    return (
        // bloc principal de la card
        <article
            className="glass-panel h-full rounded-xl overflow-hidden hover:shadow-2xl hover:nebula-border-active transition-all duration-300 flex flex-col group border border-white/10 hover:border-blue-500/30 bg-space-panel">

            {/* HAUT de la card (miniature) */}
            <div className="w-full h-48 sm:h-52 relative overflow-hidden border-b border-white/5 bg-space-dark shrink-0">

                {/* si il y a une img alors*/}
                {hasImage ? (
                    <img
                        src={project.image}
                        alt={`Miniature du projet ${project.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300/1e293b/60a5fa?text=Image+Indisponible'; e.target.onerror = null; }}
                    />
                ) : (
                    // sinon fond de base
                    <div className="w-full h-full flex flex-col items-center justify-center text-blue-500/20 relative">
                        {/* motif pour sans img */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat"></div>
                        <Code size={48} className="mb-2 opacity-50 relative z-10" />
                        <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-50 relative z-10">Image à venir</span>
                    </div>
                )}

                {/* dégradé entre img & text */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-space-panel to-transparent pointer-events-none"></div>
            </div>

            {/* TITRE PROJET */}
            <div className="p-6 pb-4 border-b border-white/5">
                <div className="flex justify-between items-start mb-3">

                    {/* titre & icone si favoris */}
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                        {project.isFavorite && <Star size={20} className="text-yellow-400 fill-yellow-400" />}
                    </h3>

                    {/* partie des badges Zone des Badges à droite (Équipe/Solo et Date) */}
                    <div className="flex items-center gap-3">

                        {/* si le projet etait en groupe alors */}
                        {project.isGroupProject ? (
                            // affiche badge groupe
                            <span title="Projet de groupe" className="text-space-muted bg-white/5 p-2 rounded-md flex items-center gap-1.5 text-sm">
                                <Users size={16} /> {project.teamSize && project.teamSize}
                            </span>
                        ) : (
                            // sinon affiche solo
                            <span title="Projet solo" className="text-space-muted bg-white/5 p-2 rounded-md">
                                <User size={16} />
                            </span>
                        )}

                        {/* date */}
                        <span className="text-sm font-mono text-space-muted bg-space-dark px-2.5 py-1.5 rounded border border-white/10 flex items-center gap-1.5">
                            <Calendar size={14} /> {formatDateFr(project.date)}
                        </span>
                    </div>
                </div>

                {/* summary du projet (résumé) */}
                <p className="text-base text-blue-400/80 font-medium italic">
                    {project.summary}
                </p>
            </div>

            {/* BODY de la card (description, tech) */}
            <div className="p-6 flex-grow flex flex-col">

                {/* line-clamp-3: coupe le texte au dela de 3 lignes avec ... */}
                <p className="text-space-text text-base mb-6 leading-relaxed line-clamp-3" title={project.description}>
                    {project.description}
                </p>

                {/* partie des tech */}
                <div className="mb-5">
                    <p className="text-xs text-blue-400 font-bold uppercase mb-2.5 tracking-wider">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                        {/* boucle du tableau des techn pour toutes les afficher */}
                        {project.technologies.map((tech, idx) => (
                            <span key={idx}
                                className="text-xs text-space-muted border border-white/5 px-2.5 py-1 rounded bg-white/5 font-bold uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bloc des Méthodes (Affiche le bloc uniquement s'il y a des méthodes dans le tableau) */}
                {project.methods && project.methods.length > 0 && (
                    <div className="mb-6">
                        <p className="text-xs text-space-muted font-bold uppercase mb-2.5 tracking-wider">Méthodes</p>
                        <div className="flex flex-wrap gap-2">
                            {project.methods.map((method, idx) => (
                                <span key={idx} className="text-xs text-blue-400/80 border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 rounded font-medium uppercase tracking-wider">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* FOOTER de la card */}
                {/* mt-auto: permet de pousser le bloc en bas de la card */}
                <div className="flex flex-wrap gap-4 mt-auto pt-5 border-t border-white/5">

                    {/* repo du projet */}
                    {project.repository && project.repository.length > 0 && (
                    // e.stopPropagation(): evite douvrir la card et ouvre la demo du site
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm font-bold text-space-muted hover:text-white transition-colors uppercase tracking-widest z-10"
                        >
                            <FaGithub size={18} /> Code Source
                        </a>
                    )}

                    {/* demo du projet (déployé) */}
                    {project.demoLink && project.demoLink.length > 0 && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-widest ml-auto z-10"
                        >
                            Voir la démo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;