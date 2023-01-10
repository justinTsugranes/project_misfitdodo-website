import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { about } from '../../constants'
import './About.scss'

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Elevating<span> Your Brand</span> Through<span> Expert Design</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt="about-title" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
