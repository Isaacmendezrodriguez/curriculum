import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          padding: '2rem 1rem'
        }}
      >
        {/* Columna de texto con estilo atractivo */}
        <div style={{
          flex: '1 1 600px',
          minWidth: '300px',
          fontSize: '1.2rem',
          lineHeight: '2rem'
        }}>
          <h2 style={{
            fontSize: '2.4rem',
            marginBottom: '1.5rem',
            color: '#222'
          }}>
            🚀 Proyectos Destacados
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{ margin: 0 }}>
                <strong style={highlight}>Aplicación móvil de gestión de tareas:</strong> Desarrollo de una app con Flutter y Firebase que permite a los usuarios crear, editar y eliminar tareas, con sincronización en tiempo real y notificaciones push.
              </p>
            </div>

            <div>
              <p style={{ margin: 0 }}>
                <strong style={highlight}>Landing Page para Monchis Media:</strong> Diseño y desarrollo de una página web responsiva enfocada en la atracción de clientes potenciales, utilizando HTML, CSS y JavaScript.
              </p>
            </div>

            <div>
              <p style={{ margin: 0 }}>
                <strong style={highlight}>API REST con Node.js:</strong> Creación de una API para la gestión de usuarios y autenticación, implementando Express y MySQL.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen alineada a la derecha */}
        <div style={{
          flex: '1 1 450px',
          minWidth: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img
            src="/assets/undraw_visionary-technology_6ouq.svg"
            alt="Proyectos"
            style={{
              width: '100%',
              maxWidth: '500px',
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
  fontWeight: '600'
};
