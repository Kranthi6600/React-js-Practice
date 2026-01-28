import { useState } from "react"
import Navbar from "./components/Navbar"


function App() {

  const [theme, setTheme] = useState('light')
  return (
    <>
      <Navbar theme={theme} />
      
    </>
  )
}

export default App
