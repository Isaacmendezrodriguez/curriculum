import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 >
        📬 Contacto
      </h2>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        padding: '0 1rem'
      }}>
        {/* Texto + enlaces */}
        <div style={{
          flex: '1 1 500px',
          minWidth: '280px',
          fontSize: '1.25rem',
          lineHeight: '2rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Si deseas colaborar, tienes preguntas o simplemente quieres saludar,
            puedes escribirme o encontrarme en las siguientes plataformas:
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '1.5rem',
            marginTop: '1rem'
          }}>
            <a href="mailto:mendezrodriguezisaac4@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/gmail.png" alt="Email" style={iconStyle} />
            </a>
            <a href="https://github.com/Isaacmendezrodriguez" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github-mark.png" alt="GitHub" style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/isaac-mendez-rodriguez-2b4480357/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/LI-In-Bug.png" alt="LinkedIn" style={iconStyle} />
            </a>
          </div>
        </div>

        {/* Imagen de contacto */}
        <div style={{
          flex: '1 1 450px',
          minWidth: '280px',
          textAlign: 'center'
        }}>
          <img
            src="/assets/undraw_contact-us_kcoa.svg"
            alt="Ilustración de contacto"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '14px'
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}

const iconStyle = {
  width: '60px',
  height: '60px',
  transition: 'transform 0.3s ease',
  borderRadius: '8px'
};
