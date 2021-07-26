import React,{useState,useRef,useEffect} from 'react'
import './AboutUs.css'
import about1 from '../../img/about1.png'
import about2 from '../../img/about3.png'
import about3 from '../../img/about4.png'
import about4 from '../../img/about2.png'
import { connect } from 'react-redux';

const AboutUs = ({language}) => {

    const referencia = useRef(null)
    const [visible,setVisible] = useState(false)
    const [first,setFirst] = useState(false)
    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.2
    }
    const [lang,setLang] = useState(language)

    useEffect(()=>{
        setLang(language)
    },[language])


    const callbackFunction = (entries)=>{
        const [entry] = entries
        setVisible(entry.isIntersecting)
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options)    
        if (referencia.current) observer.observe(referencia.current)
        
        return () => {
        if(referencia.current) observer.unobserve(referencia.current)
        }   
    },[referencia,options])

    useEffect(()=>{
        visible && setFirst(true)
    },[visible])

    return (
        <div id="service" ref={referencia} className="about-cont-page">
            <div className="about-cont-text">
                <div className="about-cont-text-holder">
                    <p className="page-section-text">{lang && lang === "EN" ? "Services" : "Servicios"}</p>
                    <p className="about-text">{lang && lang === "EN" ? "High performance": "Gran desempeño"}</p>
                    <p className="about-text">{lang && lang === "EN" ? "and" : "en"} <span style={{color:"#33A5F7"}}>{lang && lang === "EN" ? "services": "servicios"}</span> {lang && lang === "EN" ? "for" : "para"}</p>
                    <p className="about-text">{lang && lang === "EN" ? "it solutions" : "soluciones"}<span style={{color:"#33A5F7"}}>{lang && lang === "EN" && "."}</span></p>
                    <p className="about-text">{lang && lang === "ES" && "tecnologicas"}<span style={{color:"#33A5F7"}}>{lang && lang === "ES" && "."}</span></p>

                </div>
            </div>
            <div className={first ? "about-cont-content  fade-in-image animated fadeInUp": "hidden"}>
                <div className="about-content-row"  >
                    <div className="about-content-item">
                        <div className="about-content-holder">
                            <img  alt="" className="about-item-img" src={about1}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ? "Knowing the idea" : "Conocemos la idea"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `You tell us your idea, with
                            full of details`:
                            `Nos cuentas tu idea con el mayor detalle`}</p>
                        </div>
                    </div>
                     <div className="about-content-item">
                        <div className="about-content-holder">
                            <img alt="" className="about-item-img" src={about4}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ? "Find the best team" : "Encontramos el mejor equipo"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `We bring you the best team
                            to make true your idea`:
                            `Te traemos el mejor equipo
                            que hará realidad tu idea`}</p>
                        </div>
                    </div>
                </div>
                <div className="about-content-row">
                    <div className="about-content-item">
                        <div className="about-content-holder">
                            <img alt="" className="about-item-img" src={about2}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ?  "Quality development":"Desarrollo de calidad"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `We make softwares with high
                            quality and performance`:
                            `Hacemos softwares con la
                            mayor calidad y performance`}</p>
                        </div>
                    </div>
                     <div className="about-content-item">
                        <div className="about-content-holder">
                            <img alt="" className="about-item-img" src={about3}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ? "Performing product":"Productos performante"}</h3>
                            <p className="about-item-text">You tell us your idea, with
                            full of details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps)(AboutUs)
