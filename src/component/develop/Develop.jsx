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
            <DevelopSection side="I" image="1" title={lang && lang === "EN" ? "Websites" : "Páginas web"} text1={lang && lang === "EN" ? "We design and develop modern," : "Diseñamos y desarrollamos páginas web"} text2={lang && lang === "EN" ? "fluid and intuitive websites.": "modernas, fluídas e intuitivas."} text3={lang && lang === "EN" ? "The technologies used are React or Flutter." : "Las tecnologías empleadas son React o Flutter."}/>
            <DevelopSection side="D" image="3" title={lang && lang === "EN" ? "Mobile applications" : "Aplicaciones móviles"} text1={lang && lang === "EN" ? "Compatible with both Android and iOs devices." : "Compatibles con dispositivos Android e iOs."} text2={lang && lang === "EN" ? "Native and hibrid." : "Nativas e híbridas."} text3={lang && lang === "EN" ? "We use React Native, Flutter or B4X." : "Utilizamos React Native, Flutter, o B4X."}/>
            <DevelopSection side="I" image="2" title="Hardware & IoT" text1={lang && lang === "EN" ? "We develop all kind of electronic devices," : "Desarrollamos todo tipo de dispositivos"} text2={lang && lang === "EN" ? "designing and manufacturing both" : "electrónicos, diseñando y fabricando"} text3={lang && lang === "EN" ? "hardware and software." : "tanto el software como el hardware."}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps)(Develop)
