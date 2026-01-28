import React, { useState } from 'react'
import '../App.css'

export default function AddItem(props) {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)


    const handleAdd = () => {
        if (!name.trim()) {
            return alert('Product name is empty');
        }

        if (price === null || Number.isNaN(price) || price <= 0) {
            return alert('Invalid price')
        }
        if (stock === null || Number.isNaN(stock) || stock < 0) {
            return alert('Invalid stock')
        }

        const newItem = {
            id: crypto.randomUUID(),
            name: name,
            price: price,
            stock: stock,
        }
        console.log(newItem.id)

        props.setList(prev => [...prev, newItem])
        setName('')
        setPrice(null)
        setStock(null)
        // console.log(name)
        // console.log(price)
        // console.log(list)

    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className='form'>
                <label htmlFor="product">Name</label>
                <input type="text" id='product' value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="productPrice">Price</label>
                <input type="number" id='productPrice' value={price ?? ''} onChange={(e) => setPrice(e.target.valueAsNumber)} />

                <label htmlFor="product-stock">Stock</label>
                <input type="number" id='product-stock' value={stock ?? ''} onChange={(e) => setStock(e.target.valueAsNumber)} />

                <button onClick={handleAdd}>Add Item</button>
            </div>
        </div>
    )
}
