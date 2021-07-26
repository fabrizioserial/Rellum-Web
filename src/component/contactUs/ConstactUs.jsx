import React,{useState,useEffect} from 'react'
import './ConstactUs.css'
import { connect } from 'react-redux'
import emailjs from 'emailjs-com';


const ConstactUs = ({language}) => {

    const [message,SetMessage] = useState({to_name:"German",name:"",email:"",company:"",budget:"",text:"",img:"https://www.trecebits.com/wp-content/uploads/2020/02/meme-kid.jpg"})
    const [error, setError] = useState(false)
    const [lang,setLang] = useState(language)

    const handleInputChange = (event) => {
        SetMessage({
            ...message,
            [event.target.name] : event.target.value
        })
    }

    const verifyRegex = () =>{
        if(message){
            if(message.name.length > 0 && message.email.length > 0 && message.company.length > 0 && message.budget.length > 0 && message.text.length > 0 ){
                if(validateEmail(message.email)){
                    setError(false)
                    handleSend()
                }else{
                    setError(true)
                }
            }else{
                setError(true)
            }
        }
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSend= ()=>{
        console.log(message)
        emailjs.send('service_c67rg7f', 'template_p78g1be', message, 'user_4WxTwEtYrHSj1SjIPRsSo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }

    useEffect(()=>{

    },[message])
    useEffect(()=>{
        setLang(language)
    },[language])

    return (
        <div id="contact" className="contact-cont-page">
            <div className="contact-cont-text">
                <h1 className="contact-text-title black">{lang && lang === "EN" ? "Tell us what's":"Contanos lo que"}</h1>
                <div className="contact-title-cont">
                    <h1 className="contact-text-title black">{lang && lang === "EN" ? "on your mind":"piensas"}</h1>
                    <h1 className="contact-text-title blue">.</h1>
                </div>
                <p className="contact-text-text">{lang && lang === "EN" ?"And let's start creating your dream":"Y empezaremos a desarrollar tu proyecto"}</p>
                <p className="contact-text-text">{lang && lang === "EN" ?"project!":"soñado!"}</p>
            </div>
            <div className="contact-cont-form">
                <div className="contact-cont-input">
                    <p className="contact-input-text">{lang && lang === "EN" ? "My name is":"Mi nombre es"}</p>
                    <input onChange={handleInputChange}  placeHolder={lang && lang === "EN" ? "Enter your name":"Ingresa tu nombre"} name="name" className={error?"contact-input-input error":"contact-input-input"}/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">{lang && lang === "EN" ? "My email is":"Mi email es"}</p>
                    <input onChange={handleInputChange}  placeHolder={lang && lang === "EN" ? "Enter your email":"Ingresa tu email"} name="email" className={error?"contact-input-input error":"contact-input-input"}/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">{lang && lang === "EN" ? "My company is":"Mi empresa es"}</p>
                    <input onChange={handleInputChange}  placeHolder={lang && lang === "EN" ?"Enter your company name":"Ingresa el nombre de tu empresa"} name="company" className={error?"contact-input-input error":"contact-input-input"}/>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">{lang && lang === "EN" ? "My budget is around":"Mi presupuesto es aproximadamente"}</p>
                    <div className="contact-budget">
                        <input onChange={handleInputChange}  placeHolder={lang && lang === "EN" ? "Enter your budget":"Ingresa tu presupuesto"} name="budget" className={error?"contact-input-input contact-input-suffix  error":"contact-input-input contact-input-suffix"}/>
                        <span class="suffix">USD</span>
                    </div>
                </div>
                <div className="contact-cont-input">
                    <p className="contact-input-text">{lang && lang === "EN" ? "Tell us your idea":"Contanos tu idea"}</p>
                    <textarea onChange={handleInputChange}  placeHolder={lang && lang === "EN" ?"Write here what's on your mind":"Escribe aqui tu idea"}name="text" className={error ? "contact-input-textarea error":"contact-input-textarea"} row="5"/>
                </div>
                <p className={error?"visible error-text":"notvisible"}>{lang && lang === "EN" ?"Complete all the fields":"Complete todos los campos"}</p>
                <div className="contact-cont-input">
                    <button className="contact-input-submit" onClick={verifyRegex}>{lang && lang === "EN" ? "SEND":"ENVIAR"}</button>
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

export default connect(mapStateToProps)(ConstactUs)
