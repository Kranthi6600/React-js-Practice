import React from 'react'

function Receiver(props) {

    const handleDelete =() =>{
        props.onDelete(props.index)
    }
    return (
        <div className='receiver'>
            <h3 className='head'>{props.title}</h3>
            <hr />
            <p className='details'>{props.details}</p>
            
            <div className="btn-div">
                <button className='btn border text-white'
                        onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Receiver