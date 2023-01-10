/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react'

// Component to render the navigation dots at the bottom of the page
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
      // this array creates 6 dots
      (item, index) => (
        <a
          href={`#${item}`} // use anchor tag  to link it to the section
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}} // change the color of the dot that is active
          aria-label={`Go to ${item}`} // add the aria-label prop to the anchor tag
        />
      ),
    )}
  </div>
)

export default NavigationDots
