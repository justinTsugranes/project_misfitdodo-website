import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { client, urlFor } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([]) // Set a state variable "abouts" that will hold the data returned from Sanity

  useEffect(() => {
    const query = '*[_type == "abouts"]' // Define the Sanity query to get all documents of type "abouts"

    client.fetch(query).then((data) => {
      // Fetch the data from Sanity using the query
      setAbouts(data) // Set the state variable "abouts" to the data returned from Sanity
    })
  }, [])

  return (
    <>
      <h2 className="head-text">
        Elevating<span> Your Brand</span> Through<span> Expert Design</span>
      </h2>

      <div className="app__profiles">
        {/* Iterate over the "abouts" data returned from Sanity */}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {/* Use the urlFor() function to get the URL for the image */}
            <img src={urlFor(about.imgUrl)} alt="about-title" />
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
