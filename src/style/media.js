import { css } from 'styled-components'

// max-width media queries settings for responsive design. They are applied to global theme in App.js, to avoid importing media.js in every component
const sizes = {
   bigscreen: 1800,
   laptop: 1200,
   tablet: 900,
   phone: 600
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})