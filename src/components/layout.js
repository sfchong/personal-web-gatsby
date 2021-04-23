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

  /*
   * window will be undefined during SSR
   * we must wait until it is available on the client before
   * checking for system color scheme.
   */
  const checkDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches

  React.useEffect(() => {
    setDarkMode(checkDarkMode)
  }, [checkDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="site-wrapper">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
