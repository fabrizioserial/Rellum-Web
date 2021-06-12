import React from 'react'
import './Footer.css'
import logo from '../../img/logo-complete.png'
import instagram from '../../img/instagram-brands.png'
import wpp from '../../img/whatsapp-brands.png'

export const Footer = () => {
    return (
        <div className="footer-cont-page">
            <div className="footer-flex footer-logo">
                <img src={logo} className="footer-img"/>
                <div className="footer-img-logo-cont">
                    <img src={instagram} className="footer-img-logo"/>
                    <img src={wpp} className="footer-img-logo" style={{marginLeft:"20px"}}/>

                </div>

            </div>
            <div className="footer-flex footer-menu">
                <a>Home</a>
                <a>Services</a>
                <a>Proyects</a>
                <a>Contact us</a>
            </div>
            <div className="footer-flex"></div>
        </div>
    )
}
