"use client"
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeOverlay, setActiveOverlay] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Ant Hands',
      category: 'fullstack',
      image: '/ant.png',
      description: 'A premium fridge magnets seller e-commerce platform with a focus on custom designs and seamless shopping experience.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://anthands.in',
      githubLink: null,
      featured: true
    },
    {
      id: 2,
      title: 'Stickymoments',
      category: 'fullstack',
      image: '/sticky.png',
      description: 'Business-to-customer e-commerce platform for personalized magnets and accessories with automated order processing.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://sticymoment.in',
      githubLink: null,
      featured: true
    },
    {
      id: 3,
      title: 'Snaptales Magnet',
      category: 'fullstack',
      image: '/snap.png',
      description: 'An elegant e-commerce experience for photo-to-magnet conversions and high-quality gifting solutions.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://snaptalesmagnet.in',
      githubLink: null,
      featured: true
    },
    {
      id: 4,
      title: 'Riva Magnets',
      category: 'frontend',
      image: '/riva.png',
      description: 'A modern, clean e-commerce interface for high-end magnet products (Currently under development).',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Framer Motion'],
      liveLink: 'https://rivamagnets.vercel.app',
      githubLink: null,
      featured: false
    },
    {
      id: 5,
      title: 'Guppys World',
      category: 'fullstack',
      image: '/guppy.png',
      description: 'Comprehensive aquarium fish selling e-commerce website with inventory management and secure payment gateways.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://guppysworld.com',
      githubLink: null,
      featured: true
    },
    {
      id: 6,
      title: 'Royal Fins',
      category: 'fullstack',
      image: '/fins.png',
      description: 'Premium aquarium shop featuring exotic fish and aquatic accessories with a streamlined checkout process.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://royalfins.shop',
      githubLink: null,
      featured: false
    },
    {
      id: 7,
      title: 'Creospidy',
      category: 'fullstack',
      image: '/creo.png',
      description: 'Thread arts gifting e-commerce platform showcasing unique handmade designs with custom ordering features.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
      liveLink: 'https://creospidy.vercel.app',
      githubLink: null,
      featured: false
    },
    {
      id: 8,
      title: 'Outing Management System',
      category: 'fullstack',
      image: '/outing.png',
      description: 'A complete PWA web application for college campuses to manage student outings and permissions efficiently.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'PWA'],
      liveLink: 'https://outing-pi.vercel.app',
      githubLink: null,
      featured: true
    },
    {
      id: 9,
      title: 'GoalOS',
      category: 'fullstack',
      image: '/goal.png',
      description: 'A multi-user daily habit tracking system built to help users manage and achieve their goals through data visualization.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Appwrite'],
      liveLink: 'https://goalos.vercel.app',
      githubLink: null,
      featured: false
    },
    {
      id: 10,
      title: 'APCM - CRM Webapp',
      category: 'fullstack',
      image: '/apcm.png',
      description: 'A comprehensive CRM and enterprise resource planning system for a Bangalore-based pest control business (Currently under development).',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://apcm-crm.vercel.app',
      githubLink: null,
      featured: false
    },
    {
      id: 11,
      title: 'Attainment Webapp',
      category: 'fullstack',
      image: '/attain.png',
      description: 'Mark attainment calculation system for college departments to simplify educational auditing and reporting.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://attainment-sigma.vercel.app',
      githubLink: null,
      featured: false
    },
    {
      id: 12,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: '/ecom.png',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard build for hostel students.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
      liveLink: 'https://needzy.store',
      githubLink: '#',
      featured: false
    },
    {
      id: 13,
      title: 'AI Rail Saviour',
      category: 'frontend',
      image: '/rail.jpg',
      description: 'An AI-based animal classification and deterrent system for railway tracks to prevent accidents.',
      technologies: ['Python', 'Arduino', 'YOLO'],
      liveLink: '#',
      githubLink: 'https://github.com/Gowtham310106/AI-railSaviour',
      featured: false
    },
    {
      id: 14,
      title: 'Sky Choices',
      category: 'frontend',
      image: '/sky.png',
      description: 'Elegant e-commerce website for a resin artist showcasing custom handmade products.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://gowtham310106.github.io/Sky-choices/',
      githubLink: 'https://github.com/Gowtham310106/Sky-choices',
      featured: false
    },
    {
      id: 15,
      title: 'QR Generator',
      category: 'backend',
      image: '/qr.png',
      description: 'Instant QR code generation application for links and text with a focus on backend efficiency.',
      technologies: ['Node.js', 'Express.js', 'EJS'],
      liveLink: 'https://qr-generator-26yk.onrender.com',
      githubLink: 'https://github.com/Gowtham310106/qr-generator',
      featured: false
    },
    {
      id: 16,
      title: 'Modern Calculator',
      category: 'frontend',
      image: '/calc.png',
      description: 'A sleek, responsive calculator with advanced functionality and a high-performance UI.',
      technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
      liveLink: 'https://gowtham310106.github.io/calculator/',
      githubLink: 'https://github.com/Gowtham310106/calculator',
      featured: false
    },
    {
      id: 17,
      title: 'Full Stack TODO',
      category: 'fullstack',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/053/221/729/small_2x/checklist-business-performance-monitoring-concept-business-using-tablet-online-survey-filling-out-check-digital-form-task-photo.jpg',
      description: 'Cloud-synced task management application with real-time updates and user authentication.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      liveLink: '#',
      githubLink: 'https://github.com/Gowtham310106/TODO',
      featured: false
    },
    {
      id: 18,
      title: 'Royal Cake Accessories',
      category: 'fullstack',
      image: '/royal.png',
      description: 'A specialized catalogue website for a Nagpur-based cake accessories business to effectively showcase their product range.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://royal-cake-accessories.vercel.app/',
      githubLink: null,
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

// Horizontal Scroll Logic removed for performance. Use native horizontal scrolling via CSS.

  return (
    <section id="projects" className="projects">
      <div className="projects-static-container">
        <div className="projects-wrapper">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
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

            <div className="horizontal-track-container">
              <div className="projects-horizontal-track">
                <AnimatePresence mode="wait">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      className={`project-card ${project.featured ? 'featured' : ''} ${activeOverlay === project.id ? 'overlay-active' : ''}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="project-image">
                        <img src={project.image} alt={project.title} loading="lazy" />
                        <div className="project-overlay">
                          <div className="project-links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Site">
                              <i className='bx bx-link-external'></i>
                            </a>
                            {project.githubLink && (
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View GitHub Code">
                                <i className='bx bxl-github'></i>
                              </a>
                            )}
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
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

