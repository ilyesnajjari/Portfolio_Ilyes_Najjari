import { motion } from 'framer-motion';
import './Home.css';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {projects.map((section) => (
        <div key={section.section} className="portfolio-section">
          <h2 className="portfolio-section__title">{section.section}</h2>
          <div className="grid">
            {section.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Home;
