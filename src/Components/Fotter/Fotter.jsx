import React from 'react'
import './Fotter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Fotter = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
            <p>ARENA</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-conatiner'>
                <img src={instagram_icon} alt=""></img>
            </div>
            <div className='footer-icons-conatiner'>
                <img src={pintester_icon} alt=""></img>
            </div>
            <div className='footer-icons-conatiner'>
                <img src={whatsapp_icon} alt=""></img>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>copyright @2023-All Rights Resserved</p>
        </div>
    </div>
  )
}

export default Fotter