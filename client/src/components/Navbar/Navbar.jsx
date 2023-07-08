import { useState, useCallback } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../assets'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = useCallback((value) => {
    setToggle(value)
  }, [])

  const menuItem = (item) => (
    <li key={`link-${item}`}>
      <a href={`#${item}`} onClick={() => handleToggle(false)}>
        {item}
      </a>
    </li>
  )

  return (
    <nav className="app__navbar" role="navigation">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Company logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map(menuItem)}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => handleToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => handleToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map(menuItem)}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
