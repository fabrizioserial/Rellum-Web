import React,{useState,useRef,useEffect} from 'react'
import './DevelopSection.css'
import macbook from '../../../img/mackbook.png'
import custome from '../../../img/custome.png'
import mobile from '../../../img/iphone.png'

export const DevelopSection = ({side,image,title,text1,text2,text3}) => {
    const referenceSection = useRef(null)
    const [visible,setVisible] = useState(false)
    const [count,setCount] = useState(false)
    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.4
    }


    const callbackFunction = (entries)=>{
        const [entry] = entries
        setVisible(entry.isIntersecting)
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options)    
        if (referenceSection.current) observer.observe(referenceSection.current)
        
        return () => {
        if(referenceSection.current) observer.unobserve(referenceSection.current)
        }   
    },[referenceSection,options])

    useEffect(()=>{
        visible && console.log("Esta visible")
        if(visible){
            setCount(true)
        }
    },[visible])
    return (
        <>
        {side === "I"? 
            <div ref={referenceSection} className="dsection-cont">
                <div className="dsection-cont-blue">
                    <div className="dsection-blue">
                        <img className={count ? "dsection-img fade-in-image-left animated-left fadeInLeft" : "hidden"} src={image && image === "1" ? macbook: custome}/>
                    </div>
                </div>
                <div className="dsection-cont-text">
                    <div className={count ? "dsection-text-holder fade-in-image-left" : "hidden"}>
                        <p className="dsection-title">{title}</p>
                        <p className="dsection-text">{text1}</p>
                        <p className="dsection-text">{text2}</p>
                        <p className="dsection-text">{text3}</p>
                    </div>
                </div>
            </div>
        :
            <div ref={referenceSection} className="dsection-cont-der">
                <div className="dsection-cont-text-der">
                    <div className={count ? "dsection-text-holder-der fade-in-image-left" : "hidden"}>
                        <p className="dsection-title">{title}</p>
                        <p className="dsection-text">{text1}</p>
                        <p className="dsection-text">{text2}</p>
                        <p className="dsection-text">{text3}</p>
                    </div>
                </div>
                <div className="dsection-cont-blue">
                    <div className="dsection-blue-der">
                        <img className={count ? "dsection-img-der fade-in-image-left animated-left fadeInRight" : "hidden"} src={mobile}/>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
