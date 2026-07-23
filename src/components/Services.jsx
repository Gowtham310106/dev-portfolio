"use client"
import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      icon: 'bx bx-code-alt',
      title: 'Custom Web Apps',
      description: 'I deliver high-performance, user-centric web applications that drive engagement and solve real business problems using modern frameworks.',
      features: ['React.js Expert', 'Scalable Architecture', 'Performance Focused', 'Responsive Design']
    },
    {
      icon: 'bx bx-server',
      title: 'Backend Systems',
      description: 'I build secure, scalable backend architectures and robust API integrations that form a reliable foundation for your business operations.',
      features: ['Node.js & Express', 'Secure API Design', 'Database Management', 'Cloud Integration']
    },
    {
      icon: 'bx bx-rocket',
      title: 'Business Digitalization',
      description: 'I help businesses transition to digital platforms, optimizing workflows and implementing tools that increase efficiency and ROI.',
      features: ['Workflow Automation', 'E-commerce Solutions', 'SEO Strategy', 'Analytics Integration']
    },
    {
      icon: 'bx bx-layout',
      title: 'UI/UX Strategy',
      description: 'I design thoughtful, intuitive user experiences that prioritize your business goals while providing maximum value to your customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Interactive Design']
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span>Services</span>
        </motion.h2>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              
              <h3>{service.title}</h3>
              
              <p>{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className='bx bx-check'></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="service-btn">
                Get Started
                <i className='bx bx-chevron-right'></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
