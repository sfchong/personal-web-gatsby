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

  useEffect(() => {
    // get user preference from browser local storage
    const preferDarkFromStorage = localStorage.getItem('darkMode');
    let preferDark = false;

    if (preferDarkFromStorage === null) {
      // if user preference not found, check system default
      preferDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      preferDark = preferDarkFromStorage === 'true';
    }

    setHtmlBodyDark(preferDark);
    setDarkMode(preferDark);
  }, [darkMode]);

  const toggleDarkMode = () => {
    // save user preference to local storage, the value is always reversed after toggling
    localStorage.setItem('darkMode', String(!darkMode));

    // if current value is not dark mode, means after toggle it will be dark mode
    setHtmlBodyDark(!darkMode);
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="site-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
