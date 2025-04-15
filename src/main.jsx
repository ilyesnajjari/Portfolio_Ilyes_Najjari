import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*Cas 1 : Tu veux juste mettre à jour ton site déjà en ligne
git add .                           # Ajoute tous les fichiers modifiés
git commit -m "modifs"             # Crée un commit avec un message
git push                           # Envoie le code sur GitHub
npm run build                      # Recompile le site pour la prod
npm run deploy                     # Envoie le site sur GitHub Pages
*/