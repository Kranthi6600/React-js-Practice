import React from 'react'
import Sidenav from './Sidenav.jsx'
import dataContext from './context/NavContext.jsx'

export default function Navbar() {
    const data = 'dude  dudee.. duuddeee.....'
    return (
        <>
            <dataContext.Provider value = {data}>
                <Sidenav />
            </dataContext.Provider>
        </>
    )
}
