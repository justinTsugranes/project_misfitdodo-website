import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { sanityClient } from '../../lib'
import './About.scss'

const About = () => {
  // Set a state variable "abouts" that will hold the data returned from Sanity
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    sanityClient.fetch(query).then((data) => {
      setAbouts(data)
      console.log(`Abouts:`, data)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">
        Elevating<span> Your Brand</span> Through<span> Expert Design</span>
      </h2>

      <div className="app__profiles">
        {/* Iterate over the "abouts" data returned from Sanity */}
        {abouts?.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl.url} alt="about-title" />
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

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
