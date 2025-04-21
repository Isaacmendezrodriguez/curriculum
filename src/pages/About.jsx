import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🎯 Perfil Profesional</h2>

      {/* Contenido centrado */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        paddingInline: '1rem'
      }}>
        <p>
          Estudiante de Ingeniería en Informática con sólida formación en desarrollo de aplicaciones multiplataforma y desarrollo web.
          Experiencia en proyectos que integran tecnologías como <strong>Flutter</strong>, <strong>Java</strong> y <strong>C</strong>,
          así como en la gestión de bases de datos. Apasionado por la creación de soluciones tecnológicas innovadoras y con habilidades
          destacadas en <strong>trabajo en equipo</strong> y <strong>comunicación efectiva</strong>.
          Busco una oportunidad como <strong>becario</strong> para aplicar y expandir mis conocimientos en un entorno profesional.
        </p>

        {/* Imagen centrada abajo */}
        <img
          src="/assets/undraw_web-developer_ggt0.svg"
          alt="Perfil Profesional"
          style={{
            width: '100%',
            maxWidth: '500px',
            marginTop: '2rem',
            borderRadius: '12px'
            // Puedes comentar o eliminar la sombra si no deseas:
            // boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </motion.section>
  );
}



