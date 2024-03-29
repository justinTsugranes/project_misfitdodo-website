import { NavigationDots, SocialMedia } from '../components'

const currentYear = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
})

/* Higher Order Component (HOC) - used as a wrapper for the main components of the app */
const AppWrap = (Component, { idName, classNames }) => {
  function WrappedComponent() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          {/* Render the passed in component (with props and state if any) */}
          <Component />
          <div className="copyright">
            <p className="p-text">@{currentYear} misfitDodo Media</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    )
  }

  // Give the wrapped component a more helpful display name for debugging
  WrappedComponent.displayName = `AppWrap(${
    Component.displayName || Component.name || 'Component'
  })`

  return WrappedComponent
}

export default AppWrap
