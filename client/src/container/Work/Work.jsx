import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.scss'

const Work = () => {
  const [works, setWorks] = useState([]) // Set a state variable "works" that will hold the data returned from Sanity
  const [filterWork, setFilterWork] = useState([]) // Set a state variable "works" that will hold the data returned from Sanity
  const [activeFilter, setActiveFilter] = useState('All') // Set a state variable "activeFilter" that will hold the active filter
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 }) // Set a state variable "animateCard" that will hold the animation data

  useEffect(() => {
    // Define the Sanity query to get all documents of type "works"
    const query = '*[_type == "works"]'

    // Fetch the data from Sanity using the query
    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])

  // Function to handle the filter
  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    // Set a timeout to delay the animation
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      // Check if the filter is "All" or not
      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        Our <span>Creative</span> Works
      </h2>

      <div className="app__work-filter">
        {['All', 'UI/UX', 'Web App', 'Mobile App', 'ReactJS'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          ),
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')
