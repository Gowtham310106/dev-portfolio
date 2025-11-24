import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Your EmailJS credentials
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_az0cpgf',
    TEMPLATE_ID: 'template_c2tcdcg',
    PUBLIC_KEY: '0sfYVb8P7QnN4PXUd'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus(null)

  // Add current time for the email template
  const now = new Date()
  const timeString = now.toLocaleString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  })

  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        time: timeString
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    console.log('EmailJS result:', result)

    if (result.text === 'OK') {
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  } catch (error) {
    console.error('Error sending email:', error)
    setSubmitStatus('error')
    setTimeout(() => {
      setSubmitStatus(null)
    }, 5000)
  } finally {
    setIsSubmitting(false)
  }
}

  const contactInfo = [
    {
      icon: 'bx bxs-envelope',
      label: 'Email',
      value: 'gowtham310106@gmail.com',
      link: 'mailto:gowtham310106@gmail.com'
    },
    {
      icon: 'bx bxs-phone',
      label: 'Phone',
      value: '+91 9789502278',
      link: 'tel:+919789502278'
    },
    {
      icon: 'bx bxs-map',
      label: 'Location',
      value: 'Tamil Nadu, India',
      link: '#'
    }
  ]

  const socialLinks = [
    { 
      icon: 'bx bxl-linkedin', 
      href: 'https://www.linkedin.com/in/gowtham-kumar-260080332/',
      color: '#0077B5'
    },
    { 
      icon: 'bx bxl-github', 
      href: 'https://github.com/Gowtham310106',
      color: '#333'
    },
    { 
      icon: 'bx bxl-whatsapp', 
      href: 'https://wa.me/919789502278',
      color: '#25D366'
    },
    { 
      icon: 'bx bxl-facebook', 
      href: 'https://www.facebook.com/profile.php?id=100050975210709',
      color: '#1877F2'
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact <span>Me</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>Let's Work Together</motion.h3>
            <motion.p variants={itemVariants}>
              Feel free to get in touch! Whether you have a question, feedback, or just want to 
              connect, I'm always open to conversations. Let's collaborate and create something amazing!
            </motion.p>

            <motion.div className="contact-list" variants={itemVariants}>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className={info.icon}></i>
                  <div>
                    <h4>{info.label}</h4>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="contact-social" variants={itemVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--i': index, '--color': link.color }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    backgroundColor: link.color
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"  // Changed back to 'name'
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <i className='bx bx-user'></i>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"  // Changed back to 'email'
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <i className='bx bx-envelope'></i>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <i className='bx bx-bookmark'></i>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <i className='bx bx-message'></i>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className="status-message success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <i className='bx bx-check-circle'></i>
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="status-message error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <i className='bx bx-error-circle'></i>
                  <div>
                    <strong>Failed to send message</strong>
                    <p>Please try again or contact me directly.</p>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <i className='bx bx-loader-alt bx-spin'></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className='bx bx-send'></i>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact