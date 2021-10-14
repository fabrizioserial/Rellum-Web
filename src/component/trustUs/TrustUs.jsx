import React,{useState,useEffect} from 'react'
import './TrustUs.css'
import Slider from 'infinite-react-carousel';
import reactlogo from '../../img/reactlogo.png'
import flutterlogo from '../../img/flutterlogo.png'
import awslogo from '../../img/awslogo.png'
import firebaselogo from '../../img/firebaselogo.png'
import b4xlogo from '../../img/b4xlogo.png'
import expressiflogo from '../../img/expressiflogo.png'
import gitlogo from '../../img/gitlogo.png'
import javalogo from '../../img/javalogo.png'
import sqllogo from '../../img/sqllogo.png'
import cpplogo from '../../img/cpplogo.png'
import prusalogo from '../../img/prusalogo.png'
import fusion360logo from '../../img/fusion360logo.png'
import pythonlogo from '../../img/pythonlogo.png'

export const TrustUs = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 500;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    useEffect(()=>{
       
    },[width])

    return (
        <div className="trust-cont">
            <Slider {...{arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
                className: 'trust-slider'
                ,slidesToShow: width < breakpoint ? 2 : width < 800 ? 4:6}}>
                <img alt="" className="trust-logo" src={reactlogo}/>
                <img alt="" className="trust-logo" src={flutterlogo}/>
                <img alt="" className="trust-logo" src={awslogo}/>
                <img alt="" className="trust-logo" src={firebaselogo}/>
                <img alt="" className="trust-logo" src={b4xlogo}/>
                <img alt="" className="trust-logo" src={gitlogo}/>
                <img alt="" className="trust-logo" src={javalogo}/>
                <img alt="" className="trust-logo" src={cpplogo}/>
                <img alt="" className="trust-logo" src={sqllogo}/>
                <img alt="" className="trust-logo" src={pythonlogo}/>
                <img alt="" className="trust-logo" src={expressiflogo}/>
                <img alt="" className="trust-logo" src={prusalogo}/>
                <img alt="" className="trust-logo" src={fusion360logo}/>
                
            </Slider>
        </div>
    )
}
