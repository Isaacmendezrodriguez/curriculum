import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '1.8rem'
      }}>
        🎓 Certificaciones
      </h2>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: '1rem'
      }}>
        {/* Lista de certificaciones */}
        <div style={{
          flex: '1 1 500px',
          fontSize: '1.9rem',
          lineHeight: '2rem',
          minWidth: '480px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong style={highlight}>Desarrollo de Aplicaciones Móviles con Flutter</strong> — Platzi</li>
            <li><strong style={highlight}>Fundamentos de Git y GitHub</strong> — Platzi</li>
            <li><strong style={highlight}>Introducción a SQL y Bases de Datos</strong> — Platzi</li>
          </ul>
        </div>

        {/* Imagen más cercana al texto */}
        <div style={{
          flex: '1 1 400px',
          minWidth: '260px',
          textAlign: 'center'
        }}>
          <img
            src="/assets/undraw_certificate_71gt.svg"
            alt="Certificaciones"
            style={{
              width: '100%',
              maxWidth: '380px',
              borderRadius: '12px'
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
