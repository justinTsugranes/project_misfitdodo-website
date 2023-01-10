import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
  // State to hold the experiences and skills data that we fetch from the client
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])
  // State to hold the active experience/work so that we can show the tooltip when the mouse is over it
  const [active, setActive] = useState(null)

  useEffect(() => {
    // Fetch the data from the client
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperiences(data)
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // onMouseEnter and onMouseLeave handlers to set the active state
                      onMouseEnter={() => setActive(work.name)}
                      onMouseLeave={() => setActive(null)}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {active === work.name && (
                      // If the 'active' state variable matches the name of the current work,
                      // render the Tooltip component and pass in the required props.
                      <Tooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    )}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  // AppWrap is a higher order component that wraps the Skills component
  // The first argument is the component to wrap and the second argument is the name of the page.
  // The third argument is the className that is applied to the main container of the wrapped component.
  MotionWrap(Skills, 'app__skills'), // MotionWrap is also a higher order component that adds animation to the wrapped component.
  'skills',
  'app__whitebg',
)
