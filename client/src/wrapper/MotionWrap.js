import { motion } from 'framer-motion'

const MotionWrap = (Component, classNames) => {
  // This is a Higher Order Component (HOC) that wraps the passed component and adds animation functionality using framer-motion
  return function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        // This is the framer-motion animation effect that will be triggered when the component is scrolled into view
        // It will move the component down by 100px, then back up by 50px, and finally back to its original position
        // The component's opacity will also animate from 0 to 1
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    )
  }
}

export default MotionWrap
