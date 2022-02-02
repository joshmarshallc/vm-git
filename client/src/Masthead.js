import React from 'react'
import masthead from './masthead.png'
import './Masthead.css'

function Masthead() {
    return (
        <div className='masthead_container' >
            <img className='masthead' src={masthead} />
        </div>
    )
}

export default Masthead
