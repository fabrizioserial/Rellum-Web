import React,{useState,useEffect} from 'react'
import './NavbarDesktop.css'
import Logo_Long from '../../../img/long_logo.png'
import { Link } from 'react-router-dom';
import uk from '../../../img/cuk.png'
import sp from '../../../img/csp.png'


export const NavbarDesktop = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  
    const [Color,setColor] = useState(false)


    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setColor(currentScrollPos < window.innerHeight - 100)
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos >0) || currentScrollPos < window.innerHeight - 200);
        setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    

    return (
        <div className={!Color ?"navbar-cont gradient" : "navbar-cont transparente"} style={visible? {top:0} : {top:"-55px"}}>
            <img className="navbar-logo" src={Logo_Long}/>
            <div className="navbar-items-cont">
                <div className="link-background">
                    <Link to="/" className="navbar-item black">Services</Link>
                </div>
                <div className="link-background">
                    <Link to="/" className="navbar-item black">Proyect</Link>
                </div>
                <div className="link-background">
                    <Link to="/" className="navbar-item blue">Contact us</Link>
                </div>
                <div>
                    <img style={{height:"20px"}} src={uk}/>
                </div>
            </div>
        </div> 
       
    )
}
