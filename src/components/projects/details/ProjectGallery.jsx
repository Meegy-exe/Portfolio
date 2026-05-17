// fichier composant qui gere la galerie photo
import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

// screenshots: recupere le tableau dimg du composant parent
const ProjectGallery = ({ screenshots }) => {
    // etat pour stocker limg selectionné
    const [selectedImage, setSelectedImage] = useState(null);

    // securité: ne charge pas ce composant sil ny a pas de photos sur le projet
    if (!screenshots || screenshots.length === 0) return null;
    return (
        // <>: (obligatoire pour react) evite de creer des div en plus
        <>
            {/* bloc principal de la galerie */}
            <section className="glass-panel rounded-2xl p-8 bg-[#0d1117]">

                {/* HEADER galerie */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    {/* titre */}
                    <h3 className="text-[#60a5fa] font-bold uppercase text-sm tracking-widest flex items-center gap-2">
                        <ImageIcon size={20} /> Galerie du projet
                    </h3>
                    {/* bulle d'info */}
                    <span className="text-s text-[#8b949e] italic flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <ZoomIn size={14} /> Cliquez pour agrandir
                    </span>
                </div>

                {/* GRID miniature */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {/* map: boucle qui affiche toutes les imgs */}
                    {screenshots.map((screen, index) => (
                        <div
                            // key: (obligatoire pour react) pour utiliser une boucle
                            key={index}
                            // lors du clic, place lien dans letat pour laggrandir
                            onClick={() => setSelectedImage(screen)}
                            // aspect-video: format rectangulaire (16/9eme)
                            // group: cible les elements enfants au hover (effet zoom)
                            className="overflow-hidden rounded-lg cursor-pointer border border-white/10 hover:border-[#60a5fa]/50 shadow-md transition-all group bg-[#010103] aspect-video relative"
                        >
                            <img
                                src={screen}
                                // incrémentation & alt
                                alt={`Capture d'écran ${index + 1} du projet`}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                // lazy: attend limg soit visible pour la charger
                                loading="lazy"
                                // securité: au cas ou limg est cassé, mets placeholder
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x300/1e293b/60a5fa?text=Image+Indisponible';
                                    // evite boucle infini
                                    e.target.onerror = null;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}
            {/* sécurité: saffiche que si selectedImage est pas null */}
            {selectedImage && (
                <div
                    // fixed inset-0: prend tout lecran
                    // z-[100]: passe par dessus les elements du site
                    // backdrop-blur-md: floute le site en arriere plan
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010103]/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
                    // SI luser clique sur le fond, permet de sortir de la galerie
                    onClick={() => setSelectedImage(null)}>
                    {/* btn pour fermer la galerie */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-[#8b949e] hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10 z-50">
                        <X size={24} />
                    </button>
                    {/* IMG galerie */}
                    <img
                        src={selectedImage}
                        alt="Agrandissement de la capture d'écran"
                        // max-w & max-h: empeche limg de sortir de lecran
                        // object-contain: conserve les proportions de limg
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
                        // empeche le clic de limg de declencher le onClick parent (celui qui ferme la photo)
                        onClick={(e) => e.stopPropagation()}
                        // img au cas ou limg du projet crash
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/800x600/1e293b/60a5fa?text=Image+Indisponible';
                            e.target.onerror = null;
                        }} />
                </div>
            )}
        </>
    );
};
export default ProjectGallery;