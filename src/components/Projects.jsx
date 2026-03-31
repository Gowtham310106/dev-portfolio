import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeOverlay, setActiveOverlay] = useState(null)

  const projects = [
        {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: '/ecom.png',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard build for hostel students.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
      liveLink: 'https://needzy.store',
      githubLink: '#',
      featured: true
    },
     {
      id: 2,
      title: 'E-commerce website for a fridge magnet business',
      category: 'frontend',
      image: '/ant.png',
      description: 'E-commerce website for a fridge magnet business.',
      technologies: ['React', 'tailwinfcss', 'JavaScript'],
      liveLink: 'https://ant-hand.netlify.app ',
      githubLink: 'https://github.com/Gowtham310106/Ant-hands',
      featured: true
    },
      {
      id: 3,
      title: 'AI animal detection and deterrent system',
      category: 'frontend',
      image: '/rail.jpg',
      description: 'It is an ai based animal classification and deterrent system in railway tracks.',
      technologies: ['python', 'audrino', 'yolo'],
      liveLink: '#project ',
      githubLink: 'https://github.com/Gowtham310106/AI-railSaviour',
      featured: true
    },
       {
      id: 4,
      title: 'Demo e-commerce site for a client',
      category: 'frontend',
      image: '/sky.png',
      description: 'E-commerce website for a resin artist.',
      technologies: ['React', 'tailwindcss', 'JavaScript'],
      liveLink: 'https://gowtham310106.github.io/Sky-choices/',
      githubLink: 'https://github.com/Gowtham310106/Sky-choices',
      featured: true
    },
        {
      id: 5,
      title: 'qr-generator',
      category: 'backend',
      image: '/qr.png',
      description: 'Backed practice application- a qr generating app(It generates instant qr images for the links provided).',
      technologies: ['node.js', 'express.js', 'EJS'],
      liveLink: 'https://qr-generator-26yk.onrender.com',
      githubLink: 'https://github.com/Gowtham310106/qr-generator',
      featured: false
    },
    {
      id: 6,
      title: 'Modern Calculator',
      category: 'frontend',
      image: '/calc.png',
      description: 'A sleek, responsive calculator with advanced functionality and modern UI design.',
      technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
      liveLink: 'https://gowtham310106.github.io/calculator/',
      githubLink: 'https://github.com/Gowtham310106/calculator',
      featured: false
    },
    {
      id: 7,
      title: 'Full Stack TODO List',
      category: 'fullstack',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/053/221/729/small_2x/checklist-business-performance-monitoring-concept-business-using-tablet-online-survey-filling-out-check-digital-form-task-photo.jpg',
      description: 'A comprehensive todo application with user authentication and real-time updates.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      liveLink: '#',
      githubLink: 'https://github.com/Gowtham310106/TODO',
      featured: false
    },

 
   
    //   {
    //   id: 6,
    //   title: 'Full Stack students mark management system',
    //   category: 'fullstack',
    //   image: '/ant.png',
    //   description: "A fullstack application for student's marks management(asked by our department HOD) .",
    //   technologies: ['React', 'tailwinfcss', 'JavaScript'],
    //   liveLink: '# ',
    //   githubLink: 'https://github.com/Gowtham310106/ece-dept-app',
    //   featured: false
    // },
   

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
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
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
                className={`project-card ${project.featured ? 'featured' : ''} ${activeOverlay === project.id ? 'overlay-active' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
                layout
                onClick={() => {
                  // Toggle overlay on mobile
                  if (window.innerWidth <= 768) {
                    setActiveOverlay(activeOverlay === project.id ? null : project.id)
                  }
                }}
              >
                <div className="project-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    animate={{ 
                      opacity: activeOverlay === project.id ? 1 : undefined 
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => {
                      // Close overlay when clicking on overlay background (not links)
                      if (e.target === e.currentTarget || e.target.classList.contains('project-overlay')) {
                        if (window.innerWidth <= 768) {
                          setActiveOverlay(null)
                        }
                      }
                      // Prevent card click when clicking on overlay
                      e.stopPropagation()
                    }}
                  >
                    <div 
                      className="project-links"
                      onClick={(e) => {
                        // Prevent closing when clicking on links container
                        e.stopPropagation()
                      }}
                    >
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <i className='bx bx-link-external'></i>
                      </motion.a>
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <i className='bx bxl-github'></i>
                      </motion.a>
                    </div>
                  </motion.div>
                  {project.featured && (
                    <motion.div 
                      className="featured-badge"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                <div className="project-content">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        {tech}
                      </motion.span>
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