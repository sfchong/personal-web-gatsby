import React, { useState, useEffect, ReactNode } from 'react';
import '@fontsource/noto-sans';
import '@fontsource/noto-sans/700.css';
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-code-pro';
import '../styles/main.scss';
import Header from './header';
import Footer from './footer';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  // Set HTML body background to dark color, body tag is not React component, access directly using document.body
  const setHtmlBodyDark = (isDarkMode: boolean) => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    // save user preference to local storage, the value is always reversed after toggling
    localStorage.setItem('darkMode', String(!darkMode));

    // if current value is not dark mode, means after toggle it will be dark mode
    setHtmlBodyDark(!darkMode);
    setDarkMode((prev) => !prev);
  };

  // initialize dark mode state based on body class set by theme script
  useEffect(() => {
    const bodyClasses = document?.querySelector('body')?.classList;

    if (bodyClasses?.value) {
      const isDark = bodyClasses.value === 'dark';
      setDarkMode(isDark);
    }
  }, []);

  return (
    <div id="theme-container" className={darkMode ? 'dark' : undefined}>
      {/* <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      <main className="site-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
