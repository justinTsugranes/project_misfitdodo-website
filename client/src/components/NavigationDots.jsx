const NavigationDots = ({ active }) => {
  const renderNavigationDot = (item, index) => {
    const isActive = active === item
    return (
      <button
        key={`${item}-${index}`}
        className={`app__navigation-dot ${isActive ? 'active' : ''}`}
        onClick={() =>
          document.getElementById(item).scrollIntoView({ behavior: 'smooth' })
        }
        aria-label={`Go to ${item}`}
      />
    )
  }

  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
        renderNavigationDot,
      )}
    </div>
  )
}

export default NavigationDots
