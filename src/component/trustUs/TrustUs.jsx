import React,{useState,useEffect} from 'react'
import './TrustUs.css'
import Slider from 'infinite-react-carousel';
import adidas from '../../img/logoAdidas.png'

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
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
                <img alt="" className="trust-logo" src={adidas}/>
            </Slider>
        </div>
    )
}
