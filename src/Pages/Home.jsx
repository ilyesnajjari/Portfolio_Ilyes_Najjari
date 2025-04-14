import { useEffect } from 'react';
import './Home.css';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
    }
  }, []);

  return (
    <div className="portfolio">
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
    </div>
  );
};

export default Home;
