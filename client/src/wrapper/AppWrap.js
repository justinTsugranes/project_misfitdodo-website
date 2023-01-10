import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

/* Higher Order Component (HOC) - used as a wrapper for the main components of the app */
const AppWrap = (Component, idName, classNames) => {
  // The HOC returns an anonymous function that takes no arguments and returns JSX
  return function HOC() {
    // The JSX returned by the HOC:
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/* Render the social media component */}
        <SocialMedia />

        <div className="app__wrapper app__flex">
          {/* Render the passed in component (with props and state if any) */}
          <Component />
          <div className="copyright">
            {/* Display a copyright message */}
            <p className="p-text">@2022 misfitDodo Media</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        {/* Render the navigation dots component */}
        <NavigationDots active={idName} />
      </div>
    )
  }
}

export default AppWrap
