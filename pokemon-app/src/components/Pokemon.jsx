import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pokemon() {
    const [num, setNum] = useState(1)
    const [name, setName] = useState('select a digit 👆');
    const [moves, setMoves] = useState('select a digit 👆')
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name)
            setMoves(res.data.moves.length)
        }

        getData()
    })

    return (
        <div>
            <h1>you choose {num} value</h1>
            <select name="" id="" value={num} onChange={(e) => {
                setNum(e.target.value)
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <h1>my name is {name}</h1>
            <h1>my name is {moves}</h1>
        </div>
    )
}
