import { motion } from 'framer-motion'

const MotionWrap = (
  Component,
  { classNames, animation = {}, transition = { duration: 0.5 } },
) => {
  // Default animation values
  const defaultAnimation = { y: [100, 50, 0], opacity: [0, 0, 1] }
  const appliedAnimation = { ...defaultAnimation, ...animation }

  function WrappedComponent() {
    return (
      <motion.div
        whileInView={appliedAnimation}
        transition={transition}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    )
  }

  // Give the wrapped component a more helpful display name for debugging
  WrappedComponent.displayName = `MotionWrap(${
    Component.displayName || Component.name || 'Component'
  })`

  return WrappedComponent
}

export default MotionWrap
