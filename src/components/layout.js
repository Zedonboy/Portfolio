/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "../components/NavBar"
import "./layout.css"
import "../assets/css/all.css"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import Pink from "@material-ui/core/colors/pink"

const theme = createMuiTheme({
  palette: {
    primary: {
      light : "#272C34",
      main: "#121117"
    },

    secondary : {
      main : Pink["A200"]
    },

    text : {
      primary : "#ffffff"
    }
  },
})
const Layout = ({ children }) => {
  
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built By Declan with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
