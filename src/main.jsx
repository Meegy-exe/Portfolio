// fichier racine (point de depart du site)
// il prend le composant App (chef dorchestre) et relie le site

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // strictmode: outil de securite de react qui verifie sil ny a pas de bugs cachés
  <StrictMode>
    <App />
  </StrictMode>,
);