"use client"
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Education.css'
//h
const Education = () => {
  const educationData = [
    {
      period: '2024 - Present',
      title: 'B.Tech in Electronics and Communication',
      institution: 'Velammal Institute of Technology',
      description: 'Currently pursuing my degree with a strong focus on both theoretical knowledge and practical applications of modern technology. Maintaining a CGPA of 8.8.',
      achievements: ['CGPA: 8+', 'Inter college Hackthon', 'Project Lead']
    },
    {
      period: '2023 - 2024',
      title: 'NEET Preparation',
      institution: 'Aakash Institute,Tanjore',
      description: 'Intensive preparation for NEET exam that taught me resilience, discipline, time management, and problem-solving skills. Scored 537 in NEET 2024.',
      achievements: ['Score: 537', 'Time Management', 'Problem Solving']
    },
    {
      period: '2009 - 2023',
      title: 'School Education',
      institution: 'Infant Jesus Matriculation School',
      description: 'Completed schooling with active participation in science fairs and sports. Served as captain of the boys throwball team, developing leadership and teamwork skills.',
      achievements: ['Percentage: 89%', 'Sports Captain', 'Team Leadership']
    }
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span>Education</span>
        </motion.h2>

        <motion.div 
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== educationData.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content">
                <span className="timeline-period">{edu.period}</span>
                <h3>{edu.title}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
                
                <div className="achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <span key={idx} className="achievement-tag">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
