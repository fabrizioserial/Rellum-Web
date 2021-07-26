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
                        <p className="home-black">{lang && lang === "EN" ? "Make your ideas" : "Hacemos tus ideas"}</p>
                        <div className="home-div-reality">
                            <p className="home-black">{lang && lang === "EN" ? "reality" : "realidad"}</p><p className="home-blue">.</p>
                        </div>
                        <div className="home-text-info-cont" >
                            <p className="home-text-info">{
                            lang && lang === "EN" ? 
                            `Rellüm software will transform your
                            ideas into robust and powerful
                            IT solutions.`:
                            `En Rellüm software transformamos
                            tus ideas en performantes
                            soluciones tecnológicas.`}</p>
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