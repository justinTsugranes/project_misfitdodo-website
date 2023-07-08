import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const socialMediaLinks = [
  { name: 'Twitter', url: 'https://twitter.com/misfitdodo', icon: BsTwitter },
  {
    name: 'Facebook',
    url: 'https://facebook.com/misfitdodo',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/misfitdodo',
    icon: BsInstagram,
  },
]

const SocialMedia = () => {
  return (
    <div className="app__social">
      {socialMediaLinks.map(({ name, url, icon: Icon }) => (
        <div key={name}>
          <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
            <Icon />
          </a>
        </div>
      ))}
    </div>
  )
}

export default SocialMedia
