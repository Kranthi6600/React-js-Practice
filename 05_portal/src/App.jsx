import React from 'react'
import Modal from "./components/Modal"
import { useState } from 'react'


export default function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <button onClick={()=> setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
        <h1>Fancy Name</h1>
      </Modal>
    </div>
  )
}

