import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
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
    // Fetch the data from the client
    const query = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    client.fetch(query).then((data) => {
      setTestimonials(data)
    })

    client.fetch(brandsQuery).then((data) => {
      setBrands(data)
    })
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          {/* This div wraps the testimonial item, which includes an image and testimonial content */}
          <div className="app__testimonial-item app__flex">
            {/* Displays the image of the current testimonial */}
            <img
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt={testimonials[currentIndex].name}
            />
            {/* Wraps the testimonial content */}
            <div className="app__testimonial-content">
              {/* Displays the feedback of the current testimonial */}
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              {/* Wraps the name and company of the current testimonial */}
              <div>
                {/* Displays the name of the current testimonial */}
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                {/* Displays the company of the current testimonial */}
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          {/* This div wraps the left and right arrow buttons */}
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
        {/* Maps through all the brands and displays their logos */}
        {brands.map((brand) => (
          // This motion div animates the brand logos when they are in view
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brands._id}
          >
            {/* Displays the brand logo */}
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
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
