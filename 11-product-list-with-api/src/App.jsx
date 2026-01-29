import React, { useEffect, useState } from 'react'
import { API } from './api/ProductApi.jsx'
import './App.css'

export default function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () =>{
      try {
        const res = await fetch(API);
        const data = await res.json()
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if(loading) return <div>Loading...</div>
  

  const filteredProducts = products.filter(p => {
    return (p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()))
  })


  return (
    <>
      <h1>PRODUCT-LIST-WITH-API</h1>

      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <ul>
        {filteredProducts.map(p=>(
          <li key={p.id}>
            <img src={p.image} alt={p.title} style={{
              maxWidth: '150px'
            }}/>
            <h3>Title: {p.title}</h3>
            <h4>Category: {p.category}</h4>
            <h4>Description: {p.description}</h4>
            <h4>Reviews: {p.rating.count} Rating: {p.rating.rate} </h4>
            <h4>Price: {p.price}</h4>
          </li>
        ))}
      </ul>

    </>
  )
}
