import React from 'react'
import './Letter.css'
const Letter = () => {
  return (
    <div className='letter'>
        <h1>Get exclusive offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Letter