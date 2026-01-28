import React, { Children, useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../context/ThemeContext'

function Navbar(props) {

    const data = useContext(ThemeDataContext)
    console.log(data);
    

  return (
    <div className='nav'>
       <h1>{data}</h1>
       <Navbar2 theme={props.theme}>
        {props.children}
       </Navbar2>
    </div>
  )
}

export default Navbar