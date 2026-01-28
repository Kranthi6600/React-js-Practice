import { useRef, useState } from 'react'
import './App.css'
// import Navbar from './components 2/Navbar.jsx'
// import Banglore from './components/Banglore.jsx'
// import giftContext from './components/context/GiftContext.jsx'

function App() {

  // const gift = 'banana'
  const [count, setCount] = useState(0)

  const ref = useRef()

  return (
    <>
      <h1>Hi</h1>
      {/* <giftContext.Provider value={gift}>
        <Banglore/>
    </giftContext.Provider> */}
      {/* <Navbar/> */}
      <button onClick={() => { setCount(count + 1) }}>count {count}</button>
    </>
  )
}

export default App
