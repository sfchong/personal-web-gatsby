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
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    // get user preference from browser local storage
    let preferDark = localStorage.getItem("darkMode")

    if (preferDark == null) {
      // if user preference not found, check system default
      preferDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    } else {
      preferDark = preferDark === "true"
    }

    setDarkMode(preferDark)
  }, [darkMode])

  const toggleDarkMode = () => {
    // save user preference to local storage
    localStorage.setItem("darkMode", !darkMode)

    setDarkMode((prev) => !prev)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="site-wrapper">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
