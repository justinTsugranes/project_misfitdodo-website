// /* eslint-disable jsx-a11y/control-has-associated-label */
// /* eslint-disable jsx-a11y/anchor-has-content */

// const NavigationDots = ({ active }) => (
//   <div className="app__navigation">
//     {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
//       // this array creates 6 dots
//       (item, index) => (
//         <a
//           href={`#${item}`}
//           key={item + index}
//           className="app__navigation-dot"
//           style={active === item ? { backgroundColor: '#313BAC' } : {}}
//           aria-label={`Go to ${item}`}
//         />
//       ),
//     )}
//   </div>
// )

// export default NavigationDots

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
