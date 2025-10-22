import React from 'react'
import hamburger from '../assets/hamburger.svg'

function Card(props) {
    return (
        <div className="parent">
            <div className="top">
                <div>
                    <img src={props.companyLogo} alt="" />
                </div>
                <div>
                    <button className='btn text-white border'>Save</button>
                </div>
            </div>

            <div className="center">
                <div className='child2'>
                    <h5>{props.companyName}</h5>
                    <h6>{props.datePosted}</h6>
                </div>
                <h3>{props.position}</h3>
                <div className='d-flex gap-3'>
                    {props.tags.map((tag, index) => (
                        <p key={index} className='border rounded px-2 py-1'>{tag}</p>
                    ))}
                </div>

            </div>

            <div className="bottom">
                <div>
                    <h4>{props.hourlyRate}</h4>
                    <div className="child1">
                        {props.locations.map((loc, i) => (
                            <p key={i} className='border rounded px-2'>{loc}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <button className='btn border text-white'>Apply Now</button>
                </div>
            </div>
        </div>

    )
}

export default Card