import React,{useState,useEffect} from 'react'
import './MenuMobile.css'
import { Link } from 'react-router-dom';



export const MenuMobile = ({closeMenu}) => {
    const [menu,setMenu] = useState(false)

    const openMenu = () =>{
        setMenu(!menu)
    }

    return (
            <div className="navbar-mobile-items-cont">
                <div className="link-mobile-background">
                    <Link to="/" className="navbar-mobile-item black">Services</Link>
                </div>
                <div className="link-mobile-background">
                    <Link to="/" className="navbar-mobile-item black">Proyect</Link>
                </div>
                <div className="link-mobile-background">
                    <Link to="/" className="navbar-mobile-item black">Contact us</Link>
                </div>
            </div>
    )
}
