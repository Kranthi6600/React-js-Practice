import { useState } from 'react'
import { addUser } from '../api/UserApi.jsx'

export default function AddUser({ onUserAdded }) {

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !avatar) return;

        const newUser = {
            name,
            avatar,
            createdAt: new Date().toISOString()
        }

        try {
            const res = await addUser(newUser)
            onUserAdded(res.data)
            setName('')
            setAvatar('')
            console.log(res.data)
        } catch (error) {
            console.log('UNABLE TO ADD USER: ', error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Avatar URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />

                <button type="submit">Add</button>
            </form>
        </>
    )
}
