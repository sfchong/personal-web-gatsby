import React from 'react';

const ThemeScriptComponent = () => {
  const themeScript = `
    (function () {
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
    
      const body = document.querySelector("body");
  
      if (preferDark) {
        body.classList.add("dark");
      }
    })();
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};

export default ThemeScriptComponent;
