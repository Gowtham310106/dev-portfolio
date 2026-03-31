import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Typed from 'typed.js'
import '../styles/Home.css'

const Home = () => {
  const typedRef = useRef(null)
  const profileRef = useRef(null)
  
  // Motion values for 3D tilt effect
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 50, damping: 15 })
  const springY = useSpring(rotateY, { stiffness: 50, damping: 15 })

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "Professional Problem Solver", "UI/UX Specialist"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  // 3D Tilt effect for profile picture
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateXValue = (y - centerY) / 10
        const rotateYValue = (centerX - x) / 10
        
        rotateX.set(rotateXValue)
        rotateY.set(rotateYValue)
      }
    }

    const handleMouseLeave = () => {
      rotateX.set(0)
      rotateY.set(0)
    }

    const profile = profileRef.current
    if (profile) {
      profile.addEventListener('mousemove', handleMouseMove)
      profile.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (profile) {
        profile.removeEventListener('mousemove', handleMouseMove)
        profile.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [rotateX, rotateY])

  // Animated particles - Reduced count for better performance
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }))

  const socialLinks = [
    { icon: 'bx bxl-github', href: 'https://github.com/Gowtham310106', color: '#333' },
    { icon: 'bx bxl-instagram', href: 'https://www.instagram.com/__gowtham_cameo_/', color: '#E4405F' },
    { icon: 'bx bxl-linkedin', href: 'https://www.linkedin.com/in/gowtham-kumar-260080332/', color: '#0077B5' },
    { icon: 'bx bxl-whatsapp', href: 'https://wa.me/919789502278', color: '#25D366' },
  ]



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section className="home" id="home">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            Developing Digital Solutions
          </motion.h3>
          <motion.h1 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            GOWTHAM <span>KUMAR</span>
          </motion.h1>
          <motion.h3 variants={itemVariants}>
            And I'm a <span className="text" ref={typedRef}></span>
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Delivering high-quality web applications and intuitive user experiences tailored to your business needs. 
            Specialized in building scalable solutions with a focus on client success and technical excellence.
          </motion.p>
          
          <motion.div 
            className="home-sci" 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--i': index, '--hover-color': link.color }}
                whileHover={{ 
                  scale: 1.3, 
                  y: -8,
                  rotate: 360,
                  boxShadow: "0 10px 30px rgba(0, 171, 240, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 + 0.3 }
                }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.a 
              className="btn-box" 
              href="#about"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(0, 171, 240, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.2 }
              }}
            >
              Know More About Me
              <motion.i 
                className='bx bx-chevron-right'
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="profile-picture"
          ref={profileRef}
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="image-container"
            style={{
              rotateX: springY,
              rotateY: springX,
              transformStyle: "preserve-3d"
            }}
          >
            <img 
              className="profile" 
              src="plazo.jpeg" 
              alt="Gowtham Kumar"
            />
            <div className="glow-effect"></div>
            <motion.div 
              className="profile-ring"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home