import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      icon: 'bx bx-code-alt',
      title: 'Frontend Development',
      description: 'I create responsive and interactive web interfaces using modern frameworks like React, ensuring optimal user experience across all devices.',
      features: ['React.js', 'HTML5/CSS3', 'JavaScript ES6+', 'Responsive Design']
    },
    {
      icon: 'bx bx-server',
      title: 'Backend Development',
      description: 'I build robust and scalable server-side applications with Node.js and Express, implementing secure APIs and efficient database management.',
      features: ['Node.js', 'Express.js', 'REST APIs', 'Database Design']
    },
    {
      icon: 'bx bx-rocket',
      title: 'Web Optimization',
      description: 'I optimize websites for maximum speed and performance, implementing best practices for SEO and user experience enhancement.',
      features: ['Performance', 'SEO Optimization', 'Best Practices', 'Analytics']
    },
    {
      icon: 'bx bx-mobile-alt',
      title: 'Responsive Design',
      description: 'I design and develop mobile-first websites that provide seamless experience across all screen sizes and devices.',
      features: ['Mobile First', 'Cross-browser', 'Progressive Web Apps', 'UI/UX Design']
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