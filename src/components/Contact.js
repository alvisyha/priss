"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3>Contact Information</h3>
          <p>
            <i className="fas fa-phone"></i> (+62) 8953-773-18776
          </p>
          <p>
            <i className="fas fa-envelope"></i> sephiapristanti9@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Purwokerto, Central Java, Indonesia
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

