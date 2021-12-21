import React from 'react'
import wpp from '../../img/wpplogo.png'
import './WhatsappButton.css'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

export const WhatsappButton = () => {
    return (
        <>
            <img className="wpp-btn" src={wpp} onClick={() => openInNewTab("https://wa.me/+5491127497829")}/> 
        </>
    )
}
