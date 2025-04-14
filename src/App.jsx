import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProjectPage from './Pages/ProjectPage';
import { projects } from './Data/portfolioData'; // 👈 Assurez-vous que 'projects' est exporté

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} /> {/* 👈 On passe les projets ici */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page/:id" element={<ProjectPage />} /> {/* Modification ici */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;