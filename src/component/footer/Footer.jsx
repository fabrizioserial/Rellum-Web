import React,{useState,useEffect} from 'react'
import './Footer.css'
import logo from '../../img/logo-complete.png'
import instagram from '../../img/instagram-brands.png'
import wpp from '../../img/whatsapp-brands.png'
import { connect } from 'react-redux'
import { Link } from 'react-scroll';


const Footer = ({language}) => {
    const [lang,setLang] = useState(language)

    useEffect(()=>{
        setLang(language)
    },[language])

    return (
        <div className="footer-cont-page">
            <div className="footer-flex footer-logo">
                <img alt="" src={logo} className="footer-img"/>
                <div className="footer-img-logo-cont">
                    <img alt="" src={instagram} className="footer-img-logo"/>
                    <img alt="" src={wpp} className="footer-img-logo" style={{marginLeft:"20px"}}/>

                </div>

            </div>
            <div className="footer-flex footer-menu">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >{lang && lang === "EN" ? "Home":"Inicio"}</Link>
                <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={100}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >{lang && lang === "EN" ? "Services":"Servicios"}</Link>
                {/*
                <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >{lang && lang === "EN" ? "Projects":"Proyectos"}</Link>
                */}
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={25}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                >{lang && lang === "EN" ? "Contact us":"Contactanos"}</Link>
            </div>
            <div className="footer-flex"></div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps)(Footer)
