import React from 'react'
import './ConstactUs.css'

export const ConstactUs = () => {
    return (
        <div className="contact-cont-page">
            <div className="contact-cont-text">
                <h1 className="contact-text-title black">Tell us what's</h1>
                <div className="contact-title-cont">
                    <h1 className="contact-text-title black">on your mind</h1>
                    <h1 className="contact-text-title blue">.</h1>
                </div>
                <p className="contact-text-text">And let's start creating your dream </p>
                <p className="contact-text-text">project!</p>
            </div>
            <div className="contact-cont-form">
                <div className="contact-cont-input">
                    <p className="contact-input-text">My name is</p>
                    <input placeHolder="Enter your name" className="contact-input-input"/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">My email is</p>
                    <input placeHolder="Enter your email" className="contact-input-input"/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">My company is</p>
                    <input placeHolder="Enter your company name" className="contact-input-input"/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">My budget is around</p>
                    <input placeHolder="Enter your budget" className="contact-input-input"/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">Tell us your idea</p>
                    <textarea placeHolder="Write here what's on your mind" className="contact-input-textarea" row="5"/>
                </div>
                <div className="contact-cont-input">
                    <button className="contact-input-submit">SEND</button>
                </div>

            </div>
        </div>
    )
}
