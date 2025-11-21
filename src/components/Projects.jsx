import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Modern Calculator',
      category: 'frontend',
      image: '/images/ui.jpg',
      description: 'A sleek, responsive calculator with advanced functionality and modern UI design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://gowtham310106.github.io/calculator/',
      githubLink: 'https://github.com/Gowtham310106/calculator',
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack TODO List',
      category: 'fullstack',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/053/221/729/small_2x/checklist-business-performance-monitoring-concept-business-using-tablet-online-survey-filling-out-check-digital-form-task-photo.jpg',
      description: 'A comprehensive todo application with user authentication and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: 'https://github.com/Gowtham310106/TODO',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: '/images/ecommerce.jpg',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'frontend',
      image: '/images/weather.jpg',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Backend', value: 'backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest <span>Projects</span>
        </motion.h2>

        <motion.div 
          className="filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <i className='bx bx-link-external'></i>
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github'></i>
                      </a>
                    </div>
                  </div>
                  {project.featured && <div className="featured-badge">Featured</div>}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects