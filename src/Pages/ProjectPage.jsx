import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData'; // Importer les projets
import './ProjectPage.css'; // Importer le fichier CSS spécifique à la page projet

const ProjectPage = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  const project = projects
    .flatMap((section) => section.projects) // Accède à tous les projets dans toutes les sections
    .find((p) => p.id === parseInt(id)); // Trouve le projet correspondant à l'ID

  const [fullscreenImage, setFullscreenImage] = useState(null); // État pour l'image en plein écran

  useEffect(() => {
    // Fait défiler la page vers le haut lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1); // Navigue vers la page précédente
    window.scrollTo(0, 0); // Fait défiler vers le haut après navigation
  };

  if (!project) {
    return <div className="p-10 text-red-500 text-center">Projet introuvable.</div>;
  }

  return (
    <div className="project-page p-10 max-w-5xl mx-auto">
      {/* Bouton Retour */}
      <button
        onClick={handleBack} // Navigue vers la page précédente
        className="back-button"
      >
        ← Retour
      </button>

      {/* Titre du projet */}
      <h1 className="project-title text-4xl font-bold text-center text-[#fdf5e6] mb-6">
        {project.title}
      </h1>

      <div className="project-layout flex flex-col md:flex-row gap-6">
        {/* Colonne gauche : Petites bulles */}
        <div className="project-details flex-[0.6] flex flex-col gap-6">
          {/* Description */}
          <div className="bubble bg-light-bg p-4 rounded-lg shadow-md description">
            <h2 className="text-xl font-semibold mb-2 text-primary">Description :</h2>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </div>

          {/* Détails */}
          <div className="bubble bg-light-bg p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-primary">Détails :</h2>
            <div className="details-grid">
              <div className="detail-item">
                <strong>Date de Réalisation :</strong>
                <p>{project.startDate} - {project.endDate}</p>
              </div>
              <div className="detail-item">
                <strong>Rôle et Collaboration :</strong>
                <p>{project.teamRole}</p>
              </div>
              <div className="detail-item">
                <strong>Challenges :</strong>
                <ul className="challenge-list list-disc pl-5">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bubble bg-light-bg p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-primary">Technologies :</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-bubble inline-block bg-hover-bg text-primary text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="inline-block w-5 h-5 mr-2"
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Lien vers le code source */}
          {project.link && (
            <div className="bubble bg-light-bg p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-primary">Code Source :</h2>
              <a
                href={project.link}
                className="flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub Logo"
                  className="github-logo"
                />
              </a>
            </div>
          )}
        </div>

        {/* Colonne droite : Grosse bulle Résultats/Demo */}
        {project.media && project.media.length > 0 && (
          <div className="bubble bg-light-bg p-4 rounded-lg shadow-md project-demo">
            <h2 className="text-xl font-semibold mb-4 text-primary">Résultats / Demo :</h2>
            <div className="main-media flex flex-wrap gap-4">
              {project.media.map((item, index) => (
                <div key={index} className="media-item">
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={`${project.title} - Media ${index + 1}`}
                      className="rounded-lg w-full object-cover shadow-lg cursor-pointer"
                      onClick={() => setFullscreenImage(item.src)} // Affiche l'image en plein écran
                    />
                  ) : item.type === 'video' ? (
                    <video
                      controls
                      className="rounded-lg w-full object-cover shadow-lg cursor-pointer"
                      onMouseEnter={(e) => {
                        if (e.target.requestFullscreen) {
                          e.target.requestFullscreen(); // Active le mode plein écran
                        } else if (e.target.webkitRequestFullscreen) {
                          e.target.webkitRequestFullscreen(); // Pour Safari
                        } else if (e.target.mozRequestFullScreen) {
                          e.target.mozRequestFullScreen(); // Pour Firefox
                        } else if (e.target.msRequestFullscreen) {
                          e.target.msRequestFullscreen(); // Pour IE/Edge
                        }
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture des vidéos.
                    </video>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Affichage de l'image en plein écran */}
      {fullscreenImage && (
        <div
          className="fullscreen-overlay fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setFullscreenImage(null)} // Ferme l'image en cliquant
        >
          <img src={fullscreenImage} alt="Fullscreen" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;