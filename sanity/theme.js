import {buildLegacyTheme} from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-brand': '#0cb3d5',
  '--my-gray': '#666',
  '--my-gray-base': '#666',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand colors */
  '--brand-primary': props['--my-brand'],

  /* Default button */
  '--default-button-color': props['--my-gray'],
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-brand'],
})
