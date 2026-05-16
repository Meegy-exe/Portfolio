// fichier gérant le composant du formulaire de contact (en lien avec emailjs)
// @param {Function} onBack: fonction de callback pour retourner à la page précédente (évite de sortir du portfolio)

import React, { useState, useRef } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

function ContactForm({ onBack }) {
    // statut gère l'envoi: '' soit vide, sending soit en cours ou success soit réussi
    const [status, setStatus] = useState('');

    // réf direct sur le form DOM exigé par emailjs pour récupérer les valeurs des inputs
    const form = useRef();

    // fonction qui va gérer l'envoi du formulaire, et empeche le reload de la page
    // gère aussi appel asynchrone API EmailJS
    function handleSubmit(event) {
        // evite reload
        event.preventDefault();
        // lance le statut envoi en cours
        setStatus('sending');

        // appel API EmailJS avec var crypté (.env)
        // import: obligatoire avec react
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(function () {
                // statut réussi
                setStatus('success');
                // alors reset les champs du form
                form.current.reset();
            })
            .catch(function (error) {
                // statut echec (console log)
                console.error("Erreur EmailJS:", error.text);
                // message derreur
                alert("Une erreur est survenue lors de l'envoi du message.");
                // reboot le btn pour reessayer
                setStatus('');
            });
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* btn nav retour aux projets */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-space-muted hover:text-white transition-colors group"
                aria-label="Retour aux projets"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Retour aux projets
            </button>

            {/* bloc du form */}
            <div className="glass-panel rounded-2xl p-8 md:p-12 border-t-2 border-blue-500/20 shadow-2xl bg-space-panel">


                {/* VALIDATION DENVOI */}
                {/* concept react rendu conditionnel: permet de faire des conditions (si alors...) */}
                {/* status === success: si l'envoi est reussi ALORS */}
                {status === 'success' ? (
                    // affiche la réponse apres l'envoi du form
                    <div className="text-center py-10 animate-in zoom-in duration-500">
                        <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                        <h2 className="text-3xl font-black text-white mb-4">Message envoyé !</h2>
                        <p className="text-space-muted text-lg mb-8">
                            Merci beaucoup de m'avoir contactée. Je vous répondrai dans les plus brefs délais !
                        </p>
                    </div>

                ) : (

                    // FORMULAIRE DE CONTACT
                    <>
                        {/* haut du form */}
                        <h1 className="text-4xl font-black text-white mb-2">
                            Envoyez-moi un <span className="nebula-text">message</span>
                        </h1>
                        <p className="text-space-muted mb-10 text-lg">Je vous répondrai dès que possible !</p>

                        {/* lié à emailjs */}
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">

                            {/* grid reponsive nom mail (1 colonne sur mobile et 2 sur pc) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* NOM */}
                                <div className="space-y-2">
                                    <label htmlFor="user_name" 
                                    className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                        Nom
                                    </label>
                                    <input
                                        required
                                        id="user_name"
                                        type="text"
                                        name="name"
                                        className="w-full bg-space-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all focus:ring-1 focus:ring-blue-500/50"
                                        placeholder="Nom complet"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="space-y-2">
                                    <label htmlFor="user_email" 
                                    className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                        Adresse Email
                                    </label>
                                    <input
                                    required
                                        id="user_email"
                                        type="email"
                                        name="email"
                                        className="w-full bg-space-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all focus:ring-1 focus:ring-blue-500/50"
                                        placeholder="exemple@email.com"
                                    />
                                </div>
                            </div>

                            {/* CONTENU MESSAGE */}
                            <div className="space-y-2">
                                <label htmlFor="user_message" className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                    Votre message
                                </label>
                                <textarea
                                    required
                                    id="user_message"
                                    name="message"
                                    rows="6"
                                    className="w-full bg-space-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all resize-none focus:ring-1 focus:ring-blue-500/50"
                                    placeholder="Décrivez votre demande, collaboration de projet, offre d'emploi..."
                                ></textarea>
                            </div>

                            {/* btn de validation + etat de chargement */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white font-black rounded-xl transition-all shadow-neon-blue flex items-center justify-center gap-3 transform hover:-translate-y-1 disabled:transform-none"
                            >
                                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                                {status !== 'sending'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ContactForm;