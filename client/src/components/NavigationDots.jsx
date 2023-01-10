import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => (
          // Each link has an href that corresponds to an element with an ID matching the link text
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          >
            {item}
          </a>
        ),
      )}
    </div>
  )
}

export default NavigationDots
