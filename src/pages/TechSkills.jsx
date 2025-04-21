import React from 'react';
import { motion } from 'framer-motion';

export default function TechSkills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>👨‍💻 Habilidades Técnicas</h2>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'flex-start'
      }}>
        {/* Columna izquierda */}
        <div>
          <p><strong>💻 Lenguajes de Programación:</strong></p>
          <ul>
            <li><strong>Frontend:</strong></li>
            <ul>
              <li><span style={highlight}>HTML, CSS, JavaScript</span></li>
              <li><span style={highlight}>ReactJS</span></li>
            </ul>
            <li><strong>Backend:</strong></li>
            <ul>
              <li><span style={highlight}>Node.js</span></li>
              <li><span style={highlight}>Java</span></li>
            </ul>
            <li><strong>Móvil:</strong> </li>
            <ul>
              <li><span style={highlight}>Flutter</span></li>
              <li><span style={highlight}>Dart</span></li>
            </ul>
          </ul>

          <p><strong>⚙️ Metodologías Ágiles:</strong></p>
          <ul>
            <li><span style={highlight}>Scrum</span></li>
            <li><span style={highlight}>Agile</span></li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div style={{ paddingLeft: '1rem' }}>
          <p><strong>📚 Frameworks:</strong></p>
          <ul>
            <li style={highlight}>ReactJS</li>
            <li style={highlight}>Node.js</li>
            <li style={highlight}>Bootstrap</li>
          </ul>

          <p><strong>🗂 Control de Versiones:</strong></p>
          <ul>
            <li style={highlight}>Git</li>
            <li style={highlight}>GitHub</li>
          </ul>

          <p><strong>🧮 Bases de Datos:</strong></p>
          <ul>
            <li style={highlight}>SQL Server</li>
            <li style={highlight}>MySQL</li>
            <li style={highlight}>Firebase</li>
          </ul>

          <p><strong>🎨 Diseño y Prototipado:</strong></p>
          <ul>
            <li style={highlight}>Figma</li>
          </ul>
        </div>

        <div style={{ gridColumn: '1 / span 2', marginTop: '2rem' }}>
  <img
    src="/assets/undraw_code-typing_laf4.svg"
    alt="Habilidades Técnicas"
    style={{
      width: '100%',
      borderRadius: '14px'
      // 👇 Sombra eliminada
      // boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
    }}
  />
</div>
      </div>
    </motion.section>
  );
}

const highlight = {
  color: '#00B8D9',
  fontWeight: 600
};
