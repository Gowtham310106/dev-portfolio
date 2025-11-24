import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Active section detection
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
     { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const logoVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4
      }
    }),
    hover: {
      y: -3,
      transition: { type: "spring", stiffness: 400 }
    }
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <motion.a 
          className="logo" 
          href="#home"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.img 
            src="logo.jpg" 
            alt="GK Logo"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
          <span>Gowtham</span>
        </motion.a>
        
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <motion.a 
                key={item.name}
                href={item.href} 
                onClick={closeMenu}
                className={isActive ? 'active' : ''}
                style={{ '--i': index }}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                custom={index}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            )
          })}
        </nav>

        <motion.div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header