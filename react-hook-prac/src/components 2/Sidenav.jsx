import React, { useContext } from 'react'
import dataContext from './context/NavContext.jsx'

export default function Sidenav() {
    const data = useContext(dataContext)
  return (
    <>
        {data}
    </>
        
  )
}
