import { useState } from 'react'
import { images } from '../../assets'
import { AppWrap, MotionWrap } from '../../wrapper'
import { sanityClient } from '../../lib'
import './Footer.scss'

// Custom hook for form handling
const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState)

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return {
    formData,
    handleChangeInput,
  }
}

// Custom hook for form submission
const useSubmit = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (contact) => {
    setLoading(true)
    setError(null)

    try {
      await sanityClient.create(contact)
      setIsFormSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    isFormSubmitted,
    loading,
    error,
    handleSubmit,
  }
}

const Footer = () => {
  const { formData, handleChangeInput } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const { isFormSubmitted, loading, error, handleSubmit } = useSubmit()

  const { name, email, message } = formData

  return (
    <>
      <h2 className="head-text">Lets Make It Happen - Reach Out To Us Today</h2>

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
      {error && <p className="error-message">{error}</p>}
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
          <button
            type="button"
            className="p-text"
            onClick={() => handleSubmit(formData)}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">We're going to be great together!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
)
