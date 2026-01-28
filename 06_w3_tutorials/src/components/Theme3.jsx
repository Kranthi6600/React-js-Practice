import React, { useContext } from 'react'; // ✅ import useContext here
import { ThemeContext } from './Contexts/ThemeContext';

export default function Theme3() {
  const theme2 = useContext(ThemeContext); // ✅ now works fine

  return (
    <div
      style={{
        backgroundColor: theme2 === 'light' ? '#ffffffff' : '#000000ff',
        color: theme2 === 'light' ? '#000' : '#ffffffff',
        padding: '20px',
        marginTop: '20px',
      }}
    >
      <h3>Theme3 Component</h3>
      <p>Current theme: {theme2}</p>
    </div>
  );
}
