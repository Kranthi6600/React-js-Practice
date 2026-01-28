import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [editId, setEditId] = useState(null)
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list])

  const handleAdd = () => {
    if (!name.trim()) return alert('input is empty');

    if (editId !== null) {
      const updatedList = list.map(item =>
        item.id === editId ? { ...item, name } : item
      )
      setList(updatedList)
      setEditId(null)

    } else {
      const newItem = {
        id: Date.now(),
        name: name
      }
      setList([...list, newItem])
      // console.log(newItem.id)
    }
    setName('')
    // console.log(name)
  }

  const handleEdit = (item) => {
    setName(item.name)
    setEditId(item.id)
  }


  const handleDelete = (id) => {
    const updatedList = list.filter(item => item.id !== id)
    setList(updatedList)
    // console.log(updatedList)
  }


  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Todo-List</h1>
      <label htmlFor='taskInput'>Name: </label>
      <input id='taskInput' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>{editId !== null ? 'Update' : 'Add'}</button>
      <button onClick={() => { setEditId(null); setName(''); }}>Cancel</button>

      <ul>
        {list.map(item => (

          <li key={item.id}>{item.name}
            <div>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>


        ))}
      </ul>
    </>

  )
}

export default App
