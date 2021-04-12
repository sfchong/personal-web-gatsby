import React from "react"
import "@fontsource/noto-sans"
import "@fontsource/noto-sans/700.css"
import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/700.css"
import "@fontsource/source-code-pro"
import "../styles/main.scss"
import Header from "./header"
import Footer from "./footer"

export const Layout = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <Header />
      <div className="site-wrapper">
        <div className="content-wrapper">{props.children}</div>
      </div>
      <Footer />
    </>
  )
}

export const HomeLayout = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <Header />
      <div className="site-wrapper">{props.children}</div>
      <Footer />
    </>
  )
}
