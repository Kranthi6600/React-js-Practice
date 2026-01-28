import React, { useState } from 'react'
import Theme2 from './Theme2'
import { ThemeContext } from './Contexts/ThemeContext'
import Theme3 from './Theme3';

export default function Theme() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const containerStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '40px',
    transition: '0.3s ease',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={containerStyle}>
        <h3>Theme Component</h3>
        <p>Current Theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Theme2 />
        <Theme3 />
      </div>
    </ThemeContext.Provider>
  )
}
