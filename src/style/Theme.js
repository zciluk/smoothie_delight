import React from 'react'
import { ThemeProvider } from 'styled-components'
import media from './media'

// global StyledComponents theme component. Used for media queries and global colours. Note: it only accepts single children component
const Theme = ({ children }) => (
   <ThemeProvider
      theme={{
       lightpurple: "#FC009E",   
       ...media
      }}>
      {children}
   </ThemeProvider>
)
export default Theme;