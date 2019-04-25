import React from "react";
import { ThemeProvider } from "styled-components";
import media from "./media";

// global StyledComponents theme component. Used for media queries and global colours. Note: it only accepts single children component
const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      lightpurple: "#FC009E",
      black: "#000000",
      white: "#FFFFFF",
      darkpurple: "#26081B",
      ...media
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;
