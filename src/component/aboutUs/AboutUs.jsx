import React,{useState,useRef,useEffect} from 'react'
import './AboutUs.css'
import about1 from '../../img/about1.png'
import about2 from '../../img/about3.png'
import about3 from '../../img/about4.png'
import about4 from '../../img/about2.png'

export const AboutUs = () => {

    const referencia = useRef(null)
    const [visible,setVisible] = useState(false)
    const [first,setFirst] = useState(false)
    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.2
    }


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
        <div ref={referencia} className="about-cont-page">
            <div className="about-cont-text">
                <div className="about-cont-text-holder">
                    <p className="page-section-text">Services</p>
                    <p className="about-text">High performance</p>
                    <p className="about-text">and <span style={{color:"#33A5F7"}}>services</span> for</p>
                    <p className="about-text">it solutions<span style={{color:"#33A5F7"}}>.</span></p>
                </div>
            </div>
            <div className={first ? "about-cont-content  fade-in-image animated fadeInUp": "hidden"}>
                <div className="about-content-row"  >
                    <div className="about-content-item">
                        <div className="about-content-holder">
                            <img className="about-item-img" src={about1}/>
                            <h3 className="about-item-title">Knowing the idea</h3>
                            <p className="about-item-text">You tell us your idea, with
                            full of details</p>
                        </div>
                    </div>
                     <div className="about-content-item">
                        <div className="about-content-holder">
                            <img className="about-item-img" src={about4}/>
                            <h3 className="about-item-title">Find the best team</h3>
                            <p className="about-item-text">We bring you the best team
                            to make true your idea</p>
                        </div>
                    </div>
                </div>
                <div className="about-content-row">
                    <div className="about-content-item">
                        <div className="about-content-holder">
                            <img className="about-item-img" src={about2}/>
                            <h3 className="about-item-title">Quality development</h3>
                            <p className="about-item-text">We make softwares with high
                            quality and performance</p>
                        </div>
                    </div>
                     <div className="about-content-item">
                        <div className="about-content-holder">
                            <img className="about-item-img" src={about3}/>
                            <h3 className="about-item-title">Performing product</h3>
                            <p className="about-item-text">You tell us your idea, with
                            full of details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
