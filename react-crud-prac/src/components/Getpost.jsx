import React from 'react'
import { useEffect } from "react"
import { deletePost, getPost } from "../api/PostApi"
import { useState } from 'react'
import './card.css'

export default function Getpost() {

    const [data, setData] = useState([])

    const getPostData = async () => {
        const res = await getPost()
        console.log(res.data)
        setData(res.data)
    }

    useEffect(() => {
        getPostData()
    }, [])

    const handleDelete = async (id) => {
        await deletePost(id)

        const updateData = data.filter(post => post.id !== id)
        setData(updateData)
    }

    return (
        <>
            <ol>
                {data.map((curElem) => {
                    const { id, body, title } = curElem
                    return <li key={id} className='card'>
                        <p>Title: {title}</p>
                        <p>News: {body}</p>
                        <button>Edit</button>
                        <button onClick={() => { handleDelete(id) }}>Delete</button>
                    </li>
                })}
            </ol>
        </>
    )
}

