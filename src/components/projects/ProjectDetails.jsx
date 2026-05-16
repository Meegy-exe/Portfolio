// fichier composant qui gère laffichage de la page dun projet
// a tout les datas du projet & fonction onBack pour retourner en arriere

import React from 'react';
import { Terminal, ArrowLeft } from 'lucide-react';

// import sous composants
import ProjectHeader from './details/ProjectHeader';
import ProjectGallery from './details/ProjectGallery';

function ProjectDetails({ project, onBack }) {
    return (
        // bloc principal
        <div className="space-y-8 animate-in fade-in duration-500 relative">

            {/* btn retour aux projets */}
            <button
                aria-label="Retour aux projets"
                onClick={onBack}
                className="flex items-center gap-2 text-space-muted hover:text-white transition-colors group mb-4"
            >
                {/* effet sur licone a lhover */}
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Retour aux projets
            </button>

            {/* HEADER du projet (titre) */}
            {/* import sous composant */}
            <ProjectHeader project={project} />

            {/* BODY projet */}
            {/* {/* grid-cols-1: responsive sur mobile */}
            {/* lg:grid-cols-3: responsive sur pc (3 colonnes) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* partie gauche prend 66% de lespace dispo */}
                <div className="lg:col-span-2 space-y-8">

                    {/* partie présentation */}
                    <section className="glass-panel rounded-2xl p-8 bg-space-panel">
                        <h3 className="text-blue-400 font-bold uppercase text-sm tracking-widest mb-6 flex items-center gap-2">
                            <Terminal size={20} /> Présentation du projet
                        </h3>
                        <div className="text-lg text-space-text leading-relaxed space-y-4">
                            <p>{project.description}</p>

                            {/* sil y a une consigne alors */}
                            {project.instructions && (
                                // affiche consigne
                                <blockquote className="border-l-4 border-blue-500/30 pl-6 italic text-space-muted py-2">
                                    {project.instructions}
                                </blockquote>
                            )}
                        </div>
                    </section>

                    {/* partie organisation sil y a du contenu */}
                    {project.organisation && project.organisation.length > 0 && (
                        <section className="glass-panel rounded-2xl p-8 bg-space-panel">
                            <h3 className="text-blue-400 font-bold uppercase text-sm tracking-widest mb-6 flex items-center gap-2">
                                <Terminal size={20} /> Organisation & Méthodologie
                            </h3>

                            <ul className="grid grid-cols-1 gap-4">
                                {/* boucle du tableau d'organisation pour afficher les etapess */}
                                {project.organisation.map((step, i) => (
                                    <li key={i} className="flex gap-4 text-lg text-space-text bg-white/5 p-4 rounded-xl border border-white/5">
                                        {/* incremente et affiche un numéro par etape */}
                                        <span className="text-blue-500 font-bold">0{i + 1}</span> {step}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* partie galerie img */}
                    <div className="pt-4">
                        <ProjectGallery screenshots={project.screenshots} />
                    </div>
                </div>

                {/* partie droite prend 33% de l'espace dispo */}
                <div className="space-y-8">

                    {/* partie tech */}
                    <section className="glass-panel rounded-2xl p-8 bg-space-panel">
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Technologies utilisées</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {/* boucle pour afficher les tech */}
                            {project.technologies.map(tech => (
                                <span key={tech}
                                    className="text-space-text bg-white/5 border border-white/10 text-xs px-3 py-1.5 rounded hover:border-blue-400/50 hover:text-white transition-all cursor-default font-medium uppercase">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* partie ce que j'ai appris */}
                    {/* securité: ne saffiche que sil y a du contenu */}
                    {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                        <section className="glass-panel rounded-2xl p-8 bg-space-panel">
                            <h3 className="text-blue-400 font-bold uppercase text-sm tracking-widest mb-6 flex items-center gap-2">
                                <Terminal size={20} /> Ce que j'ai appris
                            </h3>
                            <ul className="space-y-4">
                                {project.lessonsLearned.map((lesson, i) => (
                                    <li key={i} className="flex gap-3 text-base text-space-text">
                                        {/* point coloré */}
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        {lesson}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* methodologies */}
                    {/* securite : ne s'affiche que si le projet a des methodes */}
                    {project.methods && project.methods.length > 0 && (
                             <section className="glass-panel rounded-2xl p-8 bg-space-panel">
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Méthodologies</h3>
                        <div className="flex flex-wrap gap-2.5">
                                {project.methods.map(method => (
                                    <span key={method}
                                        className="text-space-text bg-white/5 border border-white/10 text-xs px-3 py-1.5 rounded hover:border-blue-400/50 hover:text-white transition-all cursor-default font-medium uppercase">
                                        {method}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* partie axe amelioration */}
                    {/* securité: ne saffiche que sil y a du contenu */}
                    {project.nextSteps && project.nextSteps.length > 0 && (
                        <section className="glass-panel rounded-2xl p-8 bg-space-panel">
                            <h3 className="text-blue-400 font-bold uppercase text-sm tracking-widest mb-6 flex items-center gap-2">
                                <Terminal size={20} /> Axes d'améliorations
                            </h3>
                            <ul className="space-y-4">
                                {project.nextSteps.map((step, i) => (
                                    <li key={i} className="flex gap-3 text-base text-space-text">
                                        {/* point coloré */}
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>

        </div>
    );
}

export default ProjectDetails;