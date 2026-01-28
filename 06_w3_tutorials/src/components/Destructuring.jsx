import React from 'react'

export default function Destructuring(props) {

    const person = {
        firstName: 'psyche',
        secondName: 'spidey',
        age: 23,
        // country: 'India'
    }

    let { firstName, age, secondName, country = 'India' } = person;

    const { age: propAge, secondName: propName, country: propCountry } = props

    return (
        <div>
            {/* <h3>Hey this is {person.secondName} and i'm {person.age} and from {person.country}</h3> */}

            <h3>Hey this is {secondName} and i'm {age} and from {country}</h3>

            {/* Note: props are given through app.jsx in destructuring component */}
            
            <h3>Hey this is {propName} and i'm {propAge} and from {propCountry}</h3>
        </div>
    )
}
