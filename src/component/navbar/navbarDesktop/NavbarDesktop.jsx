import React,{useState,useEffect} from 'react'
import './NavbarDesktop.css'
import Logo_Long from '../../../img/long_logo.png'
import { Link } from 'react-scroll';
import uk from '../../../img/cuk.png'
import sp from '../../../img/csp.png'
import { setLanguage } from '../../../redux/actions/actions.js'
import { connect } from 'react-redux'



const NavbarDesktop = ({language,setLanguage}) => {
    
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  
    const [Color,setColor] = useState(true)
    const [lang,setLang] = useState(language)



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

    const handleSwitchLang = () =>{
        lang === "EN" ? setLanguage({language:"ES"}) : setLanguage({language:"EN"}) 
    }

    useEffect(()=>{
        setLang(language)
    },[language])

    return (
        <div className={Color ?"navbar-cont transparentes" : "navbar-cont gradient"} style={visible? {top:0} : {top:"-55px"}}>
            <img alt="" className="navbar-logo" src={Logo_Long}/>
            <div className="navbar-items-cont">
                <div className="link-background">
                    <Link 
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className="navbar-item black"
                    >{lang && lang === "EN" ? "Services" : "Servicios"}</Link>
                </div>
                {
                    /*
                    <div className="link-background">
                    <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className="navbar-item black"
                    >{lang && lang === "EN" ? "Projects" : "Proyectos"}</Link>
                </div>
                    */
                }            
                <div className="link-background">
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className="navbar-item black"
                    >{lang && lang === "EN" ? "Contact us" : "Contacto"}</Link>
                </div>
                <div>
                    <img alt="" style={{height:"20px",cursor:"pointer"}} onClick={handleSwitchLang} src={lang && lang === "EN" ? uk : sp}/>
                </div>
            </div>
        </div> 
       
    )
}

const mapDispatchToProps = {
    setLanguage
}

const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarDesktop)
