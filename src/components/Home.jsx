import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import '../styles/Home.css'

const Home = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "UI/UX Designer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const socialLinks = [
    { icon: 'bx bxl-facebook', href: 'https://www.facebook.com/profile.php?id=100050975210709' },
    { icon: 'bx bxl-github', href: 'https://github.com/Gowtham310106' },
    { icon: 'bx bxl-whatsapp', href: 'https://wa.me/919789502278' },
    { icon: 'bx bxl-linkedin', href: 'https://www.linkedin.com/in/gowtham-kumar-260080332/' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section className="home" id="home">
      <div className="container">
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants}>Hello, It's Me</motion.h3>
          <motion.h1 variants={itemVariants}>
            GOWTHAM <span>KUMAR</span>
          </motion.h1>
          <motion.h3 variants={itemVariants}>
            And I'm a <span className="text" ref={typedRef}></span>
          </motion.h3>
          <motion.p variants={itemVariants}>
            A passionate Fullstack Developer with creative thinking and a strong eye for design. 
            I create digital experiences that are both beautiful and functional.
          </motion.p>
          
          <motion.div className="home-sci" variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--i': index }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a className="btn-box" href="#about">
              Know More About Me
              <i className='bx bx-chevron-right'></i>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="profile-picture"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <img className="profile" src="plazo.jpeg" alt="Gowtham Kumar" />
            <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home