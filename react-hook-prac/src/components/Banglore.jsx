import React, { useContext } from 'react'
import Hyderabad from './Hyderabad.jsx'
import giftContext from './context/GiftContext.jsx'

export default function Banglore() {
    const gift = useContext(giftContext)
    return (
        <>
            <div>Banglore</div>
            {gift}
        </>

    )
}
