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
      image: '/certificates/fullstack.png',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Express', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'OAuth', 'git', 'GitHub', 'Deployment'],
      credentialLink: 'https://www.udemy.com/certificate/UC-77d1501d-9106-4915-93e4-0b625473d9f6/',
      description: 'Comprehensive full-stack web development certification covering frontend and backend technologies.'
    },
        {
      id: 2,
      title: 'Effective Leadership',
      issuer: 'HP Life',
      date: '2025',
      image: '/certificates/leader.png',
      skills: ['leadership', 'team management', 'communication', 'problem-solving', 'decision-making', 'team building'],
      credentialLink: 'https://www.life-global.org/certificate/aed86ddc-19f2-463f-88d1-bcc52ac08919',
      description: " Learned about effective leadership and its importance, how to successfully leverage different leadership strategies, and why ethics plays a role in effective leadership."
    },
    {
      id: 3,
      title: 'Effective Business Websites',
      issuer: 'HP Life',
      date: '2025',
      image: '/certificates/web.png',
      skills: ['business websites', 'web design', 'user experience', 'SEO', 'content strategy', 'conversion optimization'],
      credentialLink: 'https://www.life-global.org/certificate/d7ef40fb-6a01-499b-88ed-d41d492cef43',
      description: " Learned the importance of business websites, how to design effective websites, and strategies to optimize website performance."
    },
        {
      id: 4,
      title: 'Building a Product from Scratch',
      issuer: 'LinkedIn Learning',
      date: '2025',
      image: '/certificates/productdev.png',
      skills: ['product development', 'market research', 'prototyping', 'user testing', 'launch strategies', 'agile methodologies'],
      credentialLink: 'https://www.linkedin.com/learning/certificates/77c69da69d520ba4d3781d91f7a210f42a57f92ac2d74a2aee2ad640889c2771?trk=share_certificate #productdevelopment.',
      description: "This course provided insights into the end-to-end process of building a product, from ideation to launch."
    },
           {
      id: 5,
      title: 'Product Management: Building a Product Roadmap',
      issuer: 'LinkedIn Learning',
      date: '2025',
      image: '/certificates/projectdev.png',
      skills: ['product management', 'roadmapping', 'stakeholder communication', 'prioritization', 'market analysis', 'agile methodologies'],
      credentialLink: 'https://www.linkedin.com/learning/certificates/923c12fcef7deb343a6216d4d93d85aea6ec16d548b3487d2e28527a0ebd7ed9?trk=share_certificate #productmanagement #productroadmapping.',
      description: "This course covered the essentials of creating and managing a product roadmap to align with business goals and customer needs."
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