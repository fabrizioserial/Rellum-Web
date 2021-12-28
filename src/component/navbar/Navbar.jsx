import React,{useState,useEffect} from 'react'
import './Navbar.css'
import { NavbarMobile } from './navbarMobile/NavbarMobile';
import NavbarDesktop from './navbarDesktop/NavbarDesktop';


export const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);

    useEffect(()=>{
        console.log(width)
    },[width])
    
    return (
        <>
        {
        (width < breakpoint) ?
            <NavbarMobile width={width}/>    
        :
            <NavbarDesktop/>
        } 
        </>
       
    )
}
