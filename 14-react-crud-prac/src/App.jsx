import { useEffect } from 'react'
import { addPost, getPost } from './api/PostApi.jsx'
import './App.css'
import Getpost from './components/Getpost.jsx'
import './components/card.css'
import AddData from './components/AddData.jsx'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([])

  const handleAddPost = async (postData) => {
    const res = await addPost(postData)
    setPosts([res.data, ...posts])
  }

  return (
    <>
      <h1>Hello CRUD oper</h1>
      <AddData onAdd={handleAddPost} />

      <Getpost />
    </>
  )
}

export default App
