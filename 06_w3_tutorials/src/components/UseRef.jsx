import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
  const inputEl = useRef();
  const [input, setInput] = useState('')
  const count = useRef(0);

  const focusInput = () => {
    inputEl.current.focus();
  }

  useEffect(() => {
    count.current = count.current + 1;
  })


  return (
    <div>
      <input type="text" ref={inputEl} value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={focusInput}>Focus Input</button>
      <p>count = {count.current}</p>
    </div>
  )
}
