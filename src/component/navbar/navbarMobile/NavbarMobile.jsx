import React,{useState,useEffect} from 'react'
import './NavbarMobile.css'
import Logo_Long from '../../../img/long_logo.png'
import { Link } from 'react-router-dom';
import uk from '../../../img/cuk.png'
import sp from '../../../img/csp.png'
import barmenu from '../../../img/bars-solid.png'
import { MenuMobile } from './menuMobile/MenuMobile'


export const NavbarMobile = ({width}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  
    const [menu,setMenu] = useState(false)

    const openMenu = () =>{
        setMenu(!menu)
    }

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        menu == false && setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos >0));
        menu == false && setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {
        console.log(visible)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <div className="navbar-mobile-cont whiteBack" style={visible? {top:0} : {top:"-250px"}}>
            <img className="navbar-mobile-logo" src={Logo_Long}/>
            <img className="navbar-mobile-menu" src={barmenu} onClick={openMenu}/>
            {menu && <MenuMobile/>}
        </div> 
    )
}
