import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 2000)
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
    { icon: 'bx bxl-linkedin', href: 'https://www.linkedin.com/in/gowtham-kumar-260080332/' },
    { icon: 'bx bxl-github', href: 'https://github.com/Gowtham310106' },
    { icon: 'bx bxl-whatsapp', href: 'https://wa.me/919789502278' },
    { icon: 'bx bxl-facebook', href: 'https://www.facebook.com/profile.php?id=100050975210709' }
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
                <div key={index} className="contact-item">
                  <i className={info.icon}></i>
                  <div>
                    <h4>{info.label}</h4>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="contact-social" variants={itemVariants}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--i': index }}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
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
                  name="email"
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