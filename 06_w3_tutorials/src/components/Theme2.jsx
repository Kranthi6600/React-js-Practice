import React, { useContext } from 'react'
import { ThemeContext } from './Contexts/ThemeContext'

export default function Theme2() {

    const theme= useContext(ThemeContext)

    const style={
        backgroudColor: theme === 'light' ? '#000000ff' : '#b4b3b3ff',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        transition: '0.3s ease',
    };

  return (
    <div  style={style}>
        <h3>Theme2 Component</h3>
        <p>Current theme is: <strong>{theme}</strong></p>
    </div>
  )
}
