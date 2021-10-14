import React,{useState,useEffect,useRef} from 'react'
import './CounterUp.css'
import CountUp from 'react-countup'
import { connect } from 'react-redux'



const CounterUp = ({language}) => {
    const reference = useRef(null)
    const [visible,setVisible] = useState(false)
    const [count,setCount] = useState(false)
    const [options,setOption] = useState({
                root:null,
                rootMargin:"0px",
                threshold:0.3
            })
    const [lang,setLang] = useState(language)

    const callbackFunction = (entries)=>{
        const [entry] = entries
        setVisible(entry.isIntersecting)
    }



    useEffect(()=>{
        setLang(language)
    },[language])

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options)    
        if (reference.current) observer.observe(reference.current)
        
        return () => {
        if(reference.current) observer.unobserve(reference.current)
        }   
    },[reference,options])

    useEffect(()=>{
        visible && console.log("Esta visible")
        if(visible){
            setCount(true)
        }
    },[visible])

    return (
        <div id="projects" ref={reference} className="counter-clients-cont">
            <div className="counter-client-cont-val">
                    <CountUp start={count ? 0 : null} end={18} duration={2} suffix={"+"} redraw={true}>
                        {({ countUpRef }) => (
                                <span className="counter-clients-text" ref={countUpRef} />
                        )}
                    </CountUp>
                    <p className="counter-client-label">{lang && lang === "EN" ? "Projects": "Proyectos"}</p>
                    <p className="counter-client-label">{lang && lang === "EN" ? "made" : "realizados"}</p>
            </div>
            <div className="counter-client-cont-val">
                    <CountUp start={count ? 0 : null} end={2} duration={2} redraw={true}>
                        {({ countUpRef }) => (
                                <span className="counter-clients-text" ref={countUpRef} />
                        )}
                    </CountUp>
                    <p className="counter-client-label">{lang && lang === "EN" ? "Years": "Años"}</p>
                    <p className="counter-client-label">{lang && lang === "EN" ? "undertaking":"emprendiendo"}</p>
            </div>
            <div className="counter-client-cont-val">
                    <CountUp start={count ? 0 : null} end={7} duration={2} suffix={"+"} redraw={true}>
                        {({ countUpRef }) => (
                                <span className="counter-clients-text" ref={countUpRef} />
                        )}
                    </CountUp>
                    <p className="counter-client-label">{lang && lang === "EN" ? "Developers":"Desarrolladores"}</p>
                    <p className="counter-client-label">{lang && lang === "EN" ? "and designers":"y diseñadores"}</p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.user_data.language
    }
}

export default connect(mapStateToProps)(CounterUp)