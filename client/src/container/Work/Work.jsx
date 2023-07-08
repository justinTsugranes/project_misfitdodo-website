import { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { sanityClient } from '../../lib'
import './Work.scss'

const Work = () => {
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const query = '*[_type == "works"]'
    sanityClient.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    if (item === 'All') {
      setFilterWork(works)
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(item)))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // This will trigger the staggered animation again
      setFilterWork((prev) => [...prev])
    }, 500)

    return () => clearTimeout(timer)
  }, [filterWork])

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
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork?.map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={index}
            variants={{
              hidden: { y: 100, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="show"
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl.url} alt={work.name} />

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
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
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
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')
