import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  // Hooks to manage the state of the form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Destructuring the form data for easy access
  const { name, email, message } = formData

  // Event handler for when the user types in the input fields
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Event handler for when the user submits the form
  const handleSubmit = () => {
    setLoading(true)

    // Construct the contact object
    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    // Use the client library to send the contact object to the server
    client
      .create(contact)
      .then(() => {
        // If the contact was sent successfully
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className="head-text">Lets Make It Happen - Reach Out to Us Today</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            hello@misfitdodo.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (310) 598-7936" className="p-text">
            +1 (310) 598-7936
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          {/* Name */}
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          {/* Email */}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          {/* Message */}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {/* Submit */}
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        // Form Submitted
        <div>
          <h3 className="head-text">We're going to be great together!</h3>
        </div>
      )}
    </>
  )
}

// AppWrap and MotionWrap are Higher Order Components (HOC)
// that are used to add additional functionality to the Footer component

// AppWrap takes 3 arguments
// 1st argument is the component to be wrapped
// 2nd argument is the type of the component
// 3rd argument is the classname to be added to the component
export default AppWrap(
  // MotionWrap takes 2 arguments
  // 1st argument is the component to be wrapped
  // 2nd argument is the classname to be added to the component
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
)
