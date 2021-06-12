import React,{useState,useEffect,useRef} from 'react'
import './CounterUp.css'
import CountUp,{useCountUp} from 'react-countup'


export const CounterUp = () => {
    const reference = useRef(null)
    const [visible,setVisible] = useState(false)
    const [count,setCount] = useState(false)
    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.3
    }


    const callbackFunction = (entries)=>{
        const [entry] = entries
        setVisible(entry.isIntersecting)
    }

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
        <div ref={reference} className="counter-clients-cont">
            <div className="counter-client-cont-val">
                    <CountUp start={count ? 0 : null} end={20} duration={2} suffix={" +"} redraw={true}>
                        {({ countUpRef }) => (
                                <span className="counter-clients-text" ref={countUpRef} />
                        )}
                    </CountUp>
                    <p className="counter-client-label">Proyectos</p>
                    <p className="counter-client-label">realizados</p>
            </div>
            <div className="counter-client-cont-val">
                    <CountUp start={count ? 0 : null} end={2} duration={2} redraw={true}>
                        {({ countUpRef }) => (
                                <span className="counter-clients-text" ref={countUpRef} />
                        )}
                    </CountUp>
                    <p className="counter-client-label">Años</p>
                    <p className="counter-client-label">emprendiendo</p>
            </div>
            <div className="counter-client-cont-val">
                    <CountUp start={count ? 0 : null} end={10} duration={2} suffix={" +"} redraw={true}>
                        {({ countUpRef }) => (
                                <span className="counter-clients-text" ref={countUpRef} />
                        )}
                    </CountUp>
                    <p className="counter-client-label">Programadores</p>
                    <p className="counter-client-label">y diseñadores</p>
            </div>
        </div>
    )
}
