import React, { useState } from 'react'
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
                        title="View Live Site"
                      >
                        <i className='bx bx-link-external'></i>
                      </motion.a>
                      {project.githubLink && (
                        <motion.a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          title="View GitHub Code"
                        >
                          <i className='bx bxl-github'></i>
                        </motion.a>
                      )}
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
