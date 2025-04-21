import React from 'react';
import { motion } from 'framer-motion';

export default function Languages() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.4rem',
        marginBottom: '2rem'
      }}>🌐 Idiomas</h2>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: '1rem'
      }}>
        {/* Texto a la izquierda */}
        <div style={{
          flex: '1 1 500px',
          minWidth: '280px',
          fontSize: '1.35rem',
          lineHeight: '2rem'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <strong style={{ color: '#00B8D9', fontSize: '1.5rem' }}>🇲🇽 Español:</strong> Nativo
            </li>
            <br />
            <li>
              <strong style={{ color: '#00B8D9', fontSize: '1.5rem' }}>🇺🇸 Inglés:</strong> Nivel A2 (en progreso)
            </li>
          </ul>
        </div>

        {/* Imagen a la derecha */}
        <div style={{
          flex: '1 1 520px',
          minWidth: '320px',
          textAlign: 'center'
        }}>
          <img
            src="/assets/undraw_chat_qmyo.svg"
            alt="Idiomas"
            style={{
              width: '100%',
              maxWidth: '580px',
              height: 'auto',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
