import React from 'react';
import { motion } from 'framer-motion';

export default function SoftSkills() {
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
      }}>
        🧠 Habilidades Blandas
      </h2>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        paddingInline: '1rem'
      }}>
        {/* Texto a la izquierda */}
        <div style={{
          flex: '1 1 500px',
          fontSize: '1.2rem',
          lineHeight: '2rem',
          minWidth: '300px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <strong style={highlight}>Trabajo en equipo:</strong> Disfruto colaborar, compartir ideas y aportar para lograr objetivos comunes.
            </li>
            <br />
            <li>
              <strong style={highlight}>Comunicación efectiva:</strong> Capacidad para expresar ideas claramente y escuchar activamente a los demás.
            </li>
            <br />
            <li>
              <strong style={highlight}>Resolución de conflictos:</strong> Mantengo la calma y busco soluciones efectivas ante desacuerdos.
            </li>
            <br />
            <li>
              <strong style={highlight}>Adaptabilidad:</strong> Me ajusto fácilmente a cambios y nuevas situaciones.
            </li>
            <br />
            <li>
              <strong style={highlight}>Aprendizaje continuo:</strong> Convivo con el hecho de que todos los días las tecnologías cambian y se actualizan.
            </li>
          </ul>
        </div>

        {/* Imagen a la derecha */}
        <div style={{
          flex: '1 1 500px',
          textAlign: 'center',
          minWidth: '320px'
        }}>
          <img
            src="/assets/undraw_work-friends_g4mn.svg"
            alt="Habilidades Blandas"
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

const highlight = {
  color: '#00B8D9',
  fontWeight: 600,
  fontSize: '1.3rem'
};
