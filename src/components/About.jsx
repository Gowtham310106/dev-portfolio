import React from 'react'
import { motion } from 'framer-motion'
import Counter from './Counter'
import '../styles/About.css'

const About = () => {
  const stats = [
    { number: '1.5+', text: 'Years Experience' },
    { number: '20+', text: 'Projects Completed' },
    { number: '15+', text: 'Clients Completed' },
    { number: '6+', text: 'Technologies' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span>Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="plazo.jpeg" alt="Gowtham Kumar" />
              <div className="floating-elements">
                <div className="floating-element element-1">🚀</div>
                <div className="floating-element element-2">💻</div>
                <div className="floating-element element-3">🎨</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>
              Full Stack Developer & UI/UX Enthusiast
            </motion.h3>
            
            <motion.p variants={itemVariants}>
              I am a passionate Full Stack Developer with a creative mindset and a strong eye for 
              design and functionality. I specialize in building robust, scalable, and visually 
              appealing web applications using modern technologies.
            </motion.p>

            <motion.p variants={itemVariants}>
              With expertise in both frontend and backend development, I create seamless digital 
              experiences that combine beautiful interfaces with powerful functionality. I'm 
              constantly learning and exploring new technologies to bring innovative solutions to life.
            </motion.p>

            <motion.div className="stats-grid" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4><Counter value={stat.number} duration={4} /></h4>
                  <p>{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn-box">
                Let's Work Together
                <i className='bx bx-chevron-right'></i>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About