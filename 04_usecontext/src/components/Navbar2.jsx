import React from 'react'

function Navbar2(props) {

    console.log(props);
    
  return (
    <div className='nav2'>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Profile</h3>
        <h3>{props.theme}</h3>
    </div>
  )
}

export default Navbar2