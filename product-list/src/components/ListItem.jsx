import React, { useEffect, useState } from 'react'
import '../App.css'

export default function ListItem(props) {

    const handleRemove = (id) => {
        props.setList(prev => prev.filter(item => item.id !== id))

        if (props.editItem?.id === id) {
            props.setEditItem(null)
        }
    }

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(props.list))
        console.log('List length:', props.list.length)
    }, [props.list])

    return (
        <div><ol>
            {props.list.map(item => (
                <li key={item.id}>
                    <h4>Product Name: {item.name}</h4>
                    <h4>Price: {item.price} Rupees</h4>
                    <h4>Stock: {item.stock > 0 ? item.stock : 'Out of Stock'}  </h4>
                    <button onClick={() => props.setEditItem(item)}>Edit</button>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
            ))}
        </ol></div>
    )
}
