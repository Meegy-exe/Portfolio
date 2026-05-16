import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

const ProjectGallery = ({ screenshots }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!screenshots || screenshots.length === 0) return null;

    return (
        <>
            {/* La carte utilise exactement les mêmes classes que Présentation et Organisation */}
            <section className="glass-panel rounded-2xl p-8 bg-[#0d1117]">
                
                {/* L'en-tête identique aux autres cartes, avec une petite mention pour le clic */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h3 className="text-[#60a5fa] font-bold uppercase text-sm tracking-widest flex items-center gap-2">
                        <ImageIcon size={20} /> Galerie du projet
                    </h3>
                    <span className="text-xs text-[#8b949e] italic flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <ZoomIn size={14} /> Cliquez pour agrandir
                    </span>
                </div>
                
                {/* LA GRILLE PLUS PETITE : grid-cols-2 ou 3 au lieu d'immenses images */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {screenshots.map((screen, index) => (
                        <div 
                            key={index}
                            onClick={() => setSelectedImage(screen)}
                            className="overflow-hidden rounded-lg cursor-pointer border border-white/10 hover:border-[#60a5fa]/50 shadow-md transition-all group bg-[#010103] aspect-video relative"
                        >
                            <img 
                                src={screen} 
                                alt={`Capture ${index + 1}`} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* La Lightbox (inchangée, elle marche très bien !) */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010103]/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-[#8b949e] hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10 z-50"
                    >
                        <X size={24} />
                    </button>

                    <img 
                        src={selectedImage} 
                        alt="Zoom projet" 
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </>
    );
};

export default ProjectGallery;