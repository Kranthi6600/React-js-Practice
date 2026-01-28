import React from 'react'

export default function Map() {

    const carList = ['Ford', 'Supra', 'Dodge', 'Thar']

    carList.push('Nano')

    const users = [
        { id: 1, name: 'Loki', age: 33},
        { id: 2, name: 'Thor', age: 53},
        { id: 3, name: 'Spider-Man', age: 23},
    ]

    const fruits = ['Apple', 'Banana', 'Grapes', 'Guava', 'Water Melon']

  return (
    <div>
        <ol>
            {carList.map(car=>{
               return <li key={car}>{car}</li>
            })}
        </ol>

        <ol>
            {users.map(user=>(
                <li key={user.id}>{user.name} is {user.age} years old</li>
            ))}
        </ol>

        <ol>
            {fruits.map((fruit, idx)=>{
                return <li key={fruit}>Number: {fruit}, Index: {idx}</li>
            })}
        </ol>
    </div>
  )
}
