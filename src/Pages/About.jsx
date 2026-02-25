import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { personalInfo, experiences, education, skills } from '../data/portfolioData';

const About = () => {

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Section d'introduction */}
      <div className="intro-bubble">
        <h1>À propos de moi</h1>
        <p>{personalInfo.bio}</p>
      </div>

      {/* Conteneur des sections côte à côte */}
      <div className="sections-container">
        {/* Section Expériences */}
        <div className="section">
          <h2>Expériences</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <h3>{experience.title} - {experience.company}</h3>
              <p>{experience.period}</p>
              <ul>
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section Compétences */}
        <div className="section">
          <h2>Compétences</h2>
          <div className="skills-container">
            {/* Hard Skills */}
            <div className="skill-box hard-skills">
              <h3>Savoir-faire</h3>
              {Object.entries(skills.hardskills).map(([category, items], index) => (
                <div key={index} className="skill-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  <ul className="skill-icons">
                    {items.map((skill, i) => (
                      <li key={i} data-name={skill.name}>
                        <img
                          src={skill.url}
                          alt={skill.name}
                          loading="lazy"
                          style={{ width: '48px', height: '48px', margin: '0 8px' }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="skill-box">
              <h3>Savoir-être</h3>
              <ul>
                {skills.soft.map((softSkill, index) => (
                  <li key={index}>{softSkill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section Formation */}
        <div className="section">
          <h2>Formation</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              {edu.image && (
                <img src={edu.image} alt={edu.degree} loading="lazy" className="education-image" />
              )}
              <div className="education-content">
                <h3>{edu.degree} - {edu.institution}</h3>
                <p className="education-period">{edu.period}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;