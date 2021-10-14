import React,{ useState , useEffect } from 'react'
import './Home.css'
import Logo from '../../img/logo.png'
import { connect } from 'react-redux'


const Home = ({language}) => {
    const [lang,setLang] = useState(language)

    useEffect(()=>{
        setLang(language)
    },[language])

    return (
        <div id="home" className="home-cont-page">
        <div className="home-decoration-left"/>
            <div className="home-container">
                <div className="home-text">
                    <div className="home-text-cont">
                        <p className="home-black">{lang && lang === "EN" ? "IT solutions" : "Soluciones informáticas"}</p>
                        <div className="home-div-reality">
                            <p className="home-black">{lang && lang === "EN" ? "for companies" : "para empresas"}</p><p className="home-blue">.</p>
                        </div>
                        <div className="home-text-info-cont" >
                            <p className="home-text-info">{
                            lang && lang === "EN" ? 
                            `We develop custom `:
                            `Desarrollamos sistemas de `}<span style={{color:"#33A5F7"}}>{lang && lang === "EN" ? "software": "software"}</span> {lang && lang === "EN" ? "and" : "y"} <span style={{color:"#33A5F7"}}>{lang && lang === "EN" ? "hardware": "hardware"}</span>{
                                lang && lang === "EN" ? 
                                ` systems with the highest industry standards.`:
                                ` a medida con los estándares más altos de la industria.`}</p>
                        </div>
                    </div>

                </div>
                <img alt="" className="home-img fade-in-image fadeInUp animated" src={Logo}/>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps)(Home)