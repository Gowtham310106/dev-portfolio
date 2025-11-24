import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Certificates.css'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2024',
      image: '/certificates/fullstack.jpg',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      credentialLink: 'https://coursera.org/verify/XYZ123',
      description: 'Comprehensive full-stack web development certification covering frontend and backend technologies.'
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2024',
      image: '/certificates/react.jpg',
      skills: ['React', 'Redux', 'React Router', 'Hooks'],
      credentialLink: 'https://coursera.org/verify/ABC456',
      description: 'Advanced React development certification focusing on modern React patterns and best practices.'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      issuer: 'Udemy',
      date: '2023',
      image: '/certificates/nodejs.jpg',
      skills: ['Node.js', 'Express', 'REST APIs', 'JWT'],
      credentialLink: 'https://udemy.com/certificate/XYZ789',
      description: 'Backend development with Node.js and Express, covering API development and authentication.'
    },
    {
      id: 4,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      image: '/certificates/javascript.jpg',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6+'],
      credentialLink: 'https://freecodecamp.org/certificate/JS123',
      description: 'Comprehensive JavaScript certification focusing on algorithms and data structures.'
    },
    
  ]

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCertificate(null)
    document.body.style.overflow = 'auto'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span>Certifications</span>
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Continuous learning and professional development through recognized certifications
        </motion.p>

        <motion.div
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => openModal(certificate)}
            >
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <div className="view-certificate">
                    <i className='bx bx-search-alt'></i>
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              <div className="certificate-content">
                <div className="certificate-header">
                  <h3>{certificate.title}</h3>
                  <span className="issuer-badge">{certificate.issuer}</span>
                </div>
                
                <div className="certificate-meta">
                  <span className="date">
                    <i className='bx bx-calendar'></i>
                    {certificate.date}
                  </span>
                </div>

                <div className="certificate-skills">
                  {certificate.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="skill-tag more">+{certificate.skills.length - 3}</span>
                  )}
                </div>

                <div className="certificate-actions">
                  <a 
                    href={certificate.credentialLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="verify-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className='bx bx-link-external'></i>
                    Verify
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="certificate-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  <i className='bx bx-x'></i>
                </button>

                <div className="modal-image">
                  <img src={selectedCertificate.image} alt={selectedCertificate.title} />
                </div>

                <div className="modal-details">
                  <h3>{selectedCertificate.title}</h3>
                  <div className="modal-meta">
                    <span><strong>Issuer:</strong> {selectedCertificate.issuer}</span>
                    <span><strong>Date:</strong> {selectedCertificate.date}</span>
                  </div>
                  
                  <p>{selectedCertificate.description}</p>

                  <div className="modal-skills">
                    <h4>Skills Covered:</h4>
                    <div className="skills-list">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a 
                      href={selectedCertificate.credentialLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <i className='bx bx-link-external'></i>
                      Verify Certificate
                    </a>
                    <button className="btn-secondary" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Certificates