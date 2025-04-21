import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>👨🏻‍🎓 Educación</h2>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        fontSize: '1.2rem',
        lineHeight: '2rem',
        paddingInline: '1rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#00B8D9',
          marginBottom: '0.3rem'
        }}>
          Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA), IPN
        </h3>

        <p style={{ fontWeight: '500', fontSize: '1.1rem', marginBottom: '1rem' }}>
          📍 Ciudad de México, México — <em>Actualmente en 6º semestre</em>
        </p>

        <p style={{ fontWeight: '600' }}>✍🏻 Proyectos destacados:</p>
        <p>
          <strong>Aplicación móvil multiplataforma:</strong> App con Flutter y Firebase para gestión de tareas, autenticación de usuarios y sincronización en tiempo real.
        </p>
        <p>
          <strong>Sistema CRUD con PHP y SQL Server:</strong> Web para gestión de inventarios, utilizando interfaces responsivas con Bootstrap y CSS avanzado.
        </p>

        <p style={{ fontWeight: '600' }}>📜 Cursos relevantes:</p>
        <ul>
          <li>Desarrollo de Aplicaciones Móviles</li>
          <li>Programación Orientada a Objetos</li>
          <li>Bases de Datos Avanzadas</li>
        </ul>

        {/* Imagen abajo a la derecha */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem'
        }}>
          <img
            src="/assets/undraw_education_3vwh.svg"
            alt="Educación"
            style={{
              width: '100%',
              maxWidth: '420px',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
