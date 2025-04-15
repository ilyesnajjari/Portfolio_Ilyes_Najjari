import React from 'react';
import './Contact.css'; // Assurez-vous que les styles sont bien importés
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-card">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl text-center">Contactez-moi</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Retrouvez mes coordonnées ci-dessous pour me contacter ou télécharger mon CV.
        </p>

        <div className="contact-links">
          <a
            href="mailto:ilyes.najjari@hotmail.com"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon fa-envelope" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ilyes-najjari-a4695628b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon fa-linkedin" />
            <span className="linkedin-text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/ilyesnajjari"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faGithub} className="icon fa-github" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/Portfolio_Ilyes_Najjari/CV.pdf"
            download="Ilyes_Najjari_CV.pdf"
            className="download-button"
          >
            Télécharger mon curriculum vitæ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;