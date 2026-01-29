import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { getUsers } from './api/UserApi.jsx'
import AddUser from './components/AddUser.jsx'


function App() {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const res = await getUsers()
      setUsers(res.data)
    } catch (error) {
      console.log('Failed: ', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserAdded = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser])
  }

  return (
    <>
      <h1>API DATA</h1>

      <AddUser onUserAdded={handleUserAdded}/>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map(user => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              width: "200px",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "1px 1px 5px rgba(0,0,0,0.1)"
            }}>

            <img src={user.avatar} alt={user.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            <h3>{user.name}</h3>
            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
