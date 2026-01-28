import React, { useEffect } from 'react'
import '../App.css'

export default function ListItem(props) {

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(props.list))
        console.log(props.list)
    }, [props.list])

    return (
        <div><ol>
            {props.list.map(item => (
                <li key={item.id}>
                    <h4>Product Name: {item.name}</h4>
                    <h4>Price: {item.price} Rupees</h4>
                    <h4>Stock: {item.stock > 0 ? item.stock : 'Out of Stock'}  </h4>
                </li>
            ))}
        </ol></div>
    )
}
