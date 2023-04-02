import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../assets'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-11, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>👋</span> */}
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">welcome to</p>
              <h1 className="head-text">misfitDodo Media</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">We are Digital Media Creators</p>
            <p className="p-text">We are Brand Developers</p>
            <p className="p-text">We are Experience Makers</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile.bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {/* Render a list of circles */}
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="cicle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
