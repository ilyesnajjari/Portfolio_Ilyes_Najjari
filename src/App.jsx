import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { projects } from './data/portfolioData';

// Lazy loading for pages
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const ProjectPage = React.lazy(() => import('./Pages/ProjectPage'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/Portfolio_Ilyes_Najjari" element={<Home projects={projects} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page/:id" element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>Chargement...</div>}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;