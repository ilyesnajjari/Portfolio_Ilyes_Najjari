import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/page/${project.id}`} className="project-card__link">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="project-card"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-card__image"
        />
        <div className="project-card__content">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
