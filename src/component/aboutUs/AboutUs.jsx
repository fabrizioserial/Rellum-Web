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
                    <p className="about-text">{lang && lang === "EN" ? "Robust and powerful": "Soluciones integrales"}</p>
                    <p className="about-text">{lang && lang === "EN" ? "IT solutions built with" : "creadas con las últimas"}</p>
                    <p className="about-text">{lang && lang === "EN" ?"the latest ":""}<span style={{color:"#33A5F7"}}>{lang && lang === "EN" ? "tools": "herramientas "}</span> {lang && lang === "EN" ? "and" : "y"}<span style={{color:"#33A5F7"}}>{lang && lang === "EN" ? "": " tecnologías"}</span> </p>
                    <p className="about-text"><span style={{color:"#33A5F7"}}>{lang && lang === "EN" ? "technologies ": ""}</span>{lang && lang === "EN" ? "out there" : "del mercado"}<span style={{color:"#33A5F7"}}>{"."}</span></p>

                </div>
            </div>
            <div className={first ? "about-cont-content  fade-in-image animated fadeInUp": "hidden"}>
                <div className="about-content-row"  >
                    <div className="about-content-item">
                        <div className="about-content-holder">
                            <img  alt="" className="about-item-img" src={about1}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ? "Knowing the idea" : "Conocemos la idea"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `You tell us your idea, with full of details. Rest assured that your idea is safe with us.`:
                            `Nos cuentas tu idea con el mayor detalle detalle posible.
                             Quédate tranquilo, no se la diremos a nadie.`}</p>
                        </div>
                    </div>
                     <div className="about-content-item">
                        <div className="about-content-holder">
                            <img alt="" className="about-item-img" src={about4}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ? "Gathering the best team" : "Armamos el mejor equipo"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `We bring you the best team that will accompany you throughout the project.`:
                            `Te traemos el mejor equipo
                            que te acompañará durante todo el proyecto.`}</p>
                        </div>
                    </div>
                </div>
                <div className="about-content-row">
                    <div className="about-content-item">
                        <div className="about-content-holder">
                            <img alt="" className="about-item-img" src={about2}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ?  "Developing the product":"Desarrollamos el producto"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `We develop with the latest tools and technologies out there, essential in such a competitive market.`:
                            `Utilizamos las últimas herramientas y teconologías que existen, fundamental en un mercado tan competitivo.`}</p>
                        </div>
                    </div>
                     <div className="about-content-item">
                        <div className="about-content-holder">
                            <img alt="" className="about-item-img" src={about3}/>
                            <h3 className="about-item-title">{lang && lang === "EN" ? "Launching to the market":"Lanzamos al mercado"}</h3>
                            <p className="about-item-text">{lang && lang === "EN" ? 
                            `We accompany you in the launch and maintenance of the product. You will never be left alone.`:
                            `Te acompañamos en la etapa de lanzamiento y mantenimiento del producto. Nunca estarás solo.`}</p>
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
