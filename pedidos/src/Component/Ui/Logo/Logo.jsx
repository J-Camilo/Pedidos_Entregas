/*--------------------------- Dependecies ------------------------------ */
import React from 'react';
import './Logo.css'
import img from './Icon.jpg'

export const Logo = (props) => {
    return (
        <div className='ContentMainLogo'>
            <div className="logo">
                <div></div>
                <div></div>
                <div></div>
                <img src={img} alt="logo-owner" className="img-owner" />
            </div>
        </div>
    )
}