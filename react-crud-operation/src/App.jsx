import React, { useState } from 'react'
import './App.css'
import '../src/components/card.css'
import Card from './components/Card.jsx'

export default function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  // console.log(name)

  const handleAdd = () => {
    if (!name.trim()) return;

    if (editIndex !== null) {
      const updatedList = [...list]
      updatedList[editIndex] = name
      console.log(updatedList)
      setList(updatedList)
      setEditIndex(null)
    } else {
      setList([...list, name])
    }

    console.log(name)
    setName('')

  }

  const handleEdit = (index) => {
    setName(list[index])
    setEditIndex(index)
    console.log(index)
  }

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index)
    setList(updatedList)
  }



  return (
    <>
      <h1>CRUD</h1>

      <h4>Name: </h4>
      <input type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name} />

      <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>

      {list.length > 0 && <Card list={list}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />}
    </>
  )
}
