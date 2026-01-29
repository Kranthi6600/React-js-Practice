import React from 'react'
import { addPost } from '../api/PostApi'
import { useState } from 'react'

export default function AddData() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleAdd = async () => {
        const postData = {
            title,
            body,
            userId: 1
        }
        await addPost(postData)

        if (postData.title === '') {
            console.log('title is empty')
        }

        setTitle('')
        setBody('')
        console.log(postData)
    }

    return (
        <>
            <h3>Title</h3>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            <h3>News</h3>
            <input
                value={body}
                onChange={(e) => setBody(e.target.value)}></input>

            <button onClick={handleAdd}>Add</button>
        </>
    )
}
