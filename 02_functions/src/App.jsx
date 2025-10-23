import React from 'react'

function App() {

  function handleClick(e){
    console.log(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleClick} />
    </div>
  )
}

export default App