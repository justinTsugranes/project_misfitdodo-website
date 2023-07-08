import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { sanityClient } from '../../lib'
import './About.scss'

const fetchAbouts = () => {
  const query = '*[_type == "abouts"]'
  return sanityClient.fetch(query)
}

const About = () => {
  // Set a state variable "abouts" that will hold the data returned from Sanity
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    fetchAbouts().then(setAbouts).catch(console.error)
  }, [])

  const aboutsElements = useMemo(
    () =>
      abouts.map((about) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title}
        >
          <img src={about.imgUrl.url} alt={about.title} />
          <h2 className="bold-text app__profile-title">{about.title}</h2>
          <p className="p-text app__profile-description">{about.description}</p>
        </motion.div>
      )),
    [abouts],
  )

  return (
    <>
      <h2 className="head-text">
        Elevating<span> Your Brand</span> Through<span> Expert Design</span>
      </h2>
      <div className="app__profiles">{aboutsElements}</div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, { classNames: 'app__about' }),
  'about',
  'app__whitebg',
)
