import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext';
import About from './pages/About';
import Education from './pages/Education';
import TechSkills from './pages/TechSkills';
import SoftSkills from './pages/SoftSkills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Languages from './pages/Languages';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/educacion" element={<Education />} />
        <Route path="/habilidades-tecnicas" element={<TechSkills />} />
        <Route path="/habilidades-blandas" element={<SoftSkills />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/certificaciones" element={<Certifications />} />
        <Route path="/idiomas" element={<Languages />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Router>
      <nav style={{ background: '#00B8D9', padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/">Perfil</Link>
        <Link to="/educacion">Educación</Link>
        <Link to="/habilidades-tecnicas">Técnicas</Link>
        <Link to="/habilidades-blandas">Blandas</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/certificaciones">Certificaciones</Link>
        <Link to="/idiomas">Idiomas</Link>
        <Link to="/contacto">Contacto</Link>
        <button onClick={toggleTheme} className="toggle-theme">
          {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}
