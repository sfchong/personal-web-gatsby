import React from "react"
import "@fontsource/noto-sans"
import "@fontsource/noto-sans/700.css"
import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/700.css"
import "@fontsource/source-code-pro"
import "../styles/main.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="site-wrapper">{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
