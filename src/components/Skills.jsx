import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Skills.css'

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', percentage: 90, icon: 'bx bxl-html5', color: '#e34f26' },
    { name: 'CSS', percentage: 85, icon: 'bx bxl-css3', color: '#1572b6' },
    { name: 'JavaScript', percentage: 80, icon: 'bx bxl-javascript', color: '#f7df1e' },
    { name: 'React', percentage: 80, icon: 'bx bxl-react', color: '#61dafb' },
    { name: 'Node.js', percentage: 75, icon: 'bx bxl-nodejs', color: '#339933' },
    { name: 'Python', percentage: 75, icon: 'bx bxl-python', color: '#3776ab' },
    { name: 'PostgreSQL', percentage: 75, icon: 'bx bxl-postgresql', color: '#336791' },
    { name: 'Express.js', percentage: 70, icon: 'bx bxl-express-js', color: '#000000' },
    { name: 'REST API', percentage: 80, icon: 'bx bx-api', color: '#ff6b6b' },
    { name: 'C++', percentage: 65, icon: 'bx bxl-c-plus-plus', color: '#00599c' }
  ]

  const professionalSkills = [
    { name: 'Creativity', percentage: 90, color: '#00abf0' },
    { name: 'Communication', percentage: 86, color: '#ff6b6b' },
    { name: 'Leadership', percentage: 92, color: '#4ecdc4' },
    { name: 'Problem Solving', percentage: 75, color: '#ffd93d' }
  ]

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
      opacity: 1
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span>Skills</span>
        </motion.h2>

        <div className="skills-grid">
          <motion.div 
            className="technical-skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                >
                  <div className="skill-header">
                    <div className="skill-info">
                      <i className={skill.icon} style={{ color: skill.color }}></i>
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="professional-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Professional Skills</h3>
            <div className="radial-skills">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="radial-skill"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="radial-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path
                        className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="circle"
                        stroke={skill.color}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: skill.percentage / 100 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" className="percentage">
                        {skill.percentage}%
                      </text>
                    </svg>
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills