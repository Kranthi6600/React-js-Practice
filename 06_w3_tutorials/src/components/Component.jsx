import React, { useState } from 'react'
import { UserContext } from './Contexts/userContext'
import Component2 from './Component2'

export default function Component() {

  const [user, setUser] = useState('spidey')

  return (
    <UserContext.Provider value={user}>
      <h2>Hello {user}! </h2>
      <Component2 />
    </UserContext.Provider>
  )
}
