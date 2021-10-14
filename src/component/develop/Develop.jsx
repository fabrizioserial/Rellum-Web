import React,{ useState , useEffect } from 'react'
import './Develop.css'
import { connect } from 'react-redux'
import { DevelopSection } from './developSection/DevelopSection';



const Develop = ({language}) => {
    const [lang,setLang] = useState(language)

    useEffect(()=>{
        setLang(language)
    },[language])

    return (
        <div className="develop-cont">
            <DevelopSection side="I" image="1" title={lang && lang === "EN" ? "Websites" : "Páginas web"} text1="We develop quality pages with" text2="the latest technologies in this" text3="ambit"/>
            <DevelopSection side="D" image="3" title={lang && lang === "EN" ? "Mobile applications" : "Aplicaciones móviles"} text1="We develop quality mobile aplication with" text2="the latest technologies in this" text3="ambit"/>
            <DevelopSection side="I" image="2" title="Hardware & IoT" text1="We develop bespoke technological" text2="solutions of the highest level" text3="and performance"/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps)(Develop)
