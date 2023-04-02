import { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { sanityClient } from '../../lib'
import './Testimonial.scss'

const Testimonial = () => {
  // State to hold the current index of the testimonial being displayed
  const [currentIndex, setCurrentIndex] = useState(0)
  // State to hold the testimonials data that we fetch from the client
  const [testimonials, setTestimonials] = useState([])
  // State to hold the brands data that we fetch from the client
  const [brands, setBrands] = useState([])

  // Function to handle the click event on the prev/next buttons
  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    sanityClient.fetch(query).then((data) => {
      setTestimonials(data)
      console.log(`Testimonials:`, data)
    })

    sanityClient.fetch(brandsQuery).then((data) => {
      setBrands(data)
      console.log(`Brands:`, data)
    })
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgurl.url}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            {/* Left arrow button */}
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft />
            </div>

            {/* Right arrow button */}
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* This div wraps all the brand logos */}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brands._id}
          >
            <img src={brand.imgUrl.url} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
)
