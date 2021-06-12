import React from 'react'
import './Home.css'
import Logo from '../../img/logo.png'

export const Home = () => {
    return (
        <div className="home-cont-page">
        <div className="home-decoration-left"/>
            <div className="home-container">
                <div className="home-text">
                    <div className="home-text-cont">
                        <p className="home-black">Make your ideas</p>
                        <div className="home-div-reality">
                            <p className="home-black">reality</p><p className="home-blue">.</p>
                        </div>
                        <div className="home-text-info-cont" >
                            <p className="home-text-info">Rellüm software will transform your
                            ideas into robust and powerful
                            IT solutions.</p>
                        </div>
                    </div>

                </div>
                <img className="home-img fade-in-image fadeInUp animated" src={Logo}/>
            </div>
        </div>
    )
}
