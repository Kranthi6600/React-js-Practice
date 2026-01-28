import React, { useContext } from 'react'
import { UserContext } from './Contexts/userContext'

export default function Component2() {

    const user = useContext(UserContext)

    return (
        <div>
            <h1>Component2</h1>
            <h4>Hello {user} again!</h4>
        </div>
    )
}
