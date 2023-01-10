import React from 'react'

import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { BFaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BFaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  )
}

export default SocialMedia
