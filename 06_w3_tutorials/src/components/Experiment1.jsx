import React, { useState } from 'react'

export default function Experiment1({title}) {

    const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
    }

  return (
    <div>
        <h1>Count = {count}</h1>
        <button onClick={handleClick}>{title}</button>
    </div>
  )
}
