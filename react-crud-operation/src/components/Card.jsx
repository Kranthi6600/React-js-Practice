import React from 'react'
import '../components/card.css'

export default function Card({list, onEdit, onDelete}) {
  return (
    <>
        <ul className='card'>
            {list.map((e, i)=>(
                <li key={i} className='item'>{e}
                <button onClick={() =>onEdit(i)}>Edit</button>
                <button onClick={() => onDelete(i)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
  )
}
