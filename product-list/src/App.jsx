import { useEffect, useState } from 'react'
import './App.css'
import AddItem from './components/AddItem.jsx'
import ListItem from './components/ListItem.jsx'

function App() {
  const [list, setList] = useState(()=>{
    const savedList = localStorage.getItem('products');
    return savedList ? JSON.parse(savedList) : []; 
  })
  
  return (
    <>
      <h1>PRODUCT - LIST</h1>

      <AddItem setList={setList} />

      <ListItem list={list} />

    </>
  )
}

export default App
