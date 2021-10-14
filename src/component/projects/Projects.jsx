import React,{ useState , useEffect } from 'react'
import './Projects.css'
import { connect } from 'react-redux'


const Home = ({language}) => {
    const [lang,setLang] = useState(language)
    const [projects,setProjects] = useState([0,1,2,3,4,5]);

    const getProjects = () =>{
        const MyProjects = [
            {
                name:"Oncomedic",
                descriptionEN:"Oncomedic is a mobile app that helps people with cancer",
                descriptionSP:"Oncomedic es una aplicacion movil que ayuda a gente con cancer",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1077209_16032413334399433.jpg"
            },
            {
                name:"Oncomedic",
                descriptionEN:"Oncomedic is a mobile app that helps people with cancer",
                descriptionSP:"Oncomedic es una aplicacion movil que ayuda a gente con cancer",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1077209_16032413334399433.jpg"
            },
            {
                name:"Oncomedic",
                descriptionEN:"Oncomedic is a mobile app that helps people with cancer",
                descriptionSP:"Oncomedic es una aplicacion movil que ayuda a gente con cancer",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1077209_16032413334399433.jpg"
            },
            {
                name:"Oncomedic",
                descriptionEN:"Oncomedic is a mobile app that helps people with cancer",
                descriptionSP:"Oncomedic es una aplicacion movil que ayuda a gente con cancer",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1077209_16032413334399433.jpg"
            },
            {
                name:"Oncomedic",
                descriptionEN:"Oncomedic is a mobile app that helps people with cancer",
                descriptionSP:"Oncomedic es una aplicacion movil que ayuda a gente con cancer",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1077209_16032413334399433.jpg"
            },
            {
                name:"Oncomedic",
                descriptionEN:"Oncomedic is a mobile app that helps people with cancer",
                descriptionSP:"Oncomedic es una aplicacion movil que ayuda a gente con cancer",
                imageUrl:"https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1077209_16032413334399433.jpg"
            }
        ]
        setProjects(MyProjects);
    }

    useEffect(()=>{
        getProjects()
    },[])

    useEffect(()=>{
        setLang(language)
    },[language])

    return (
        <div className="projects-div-container">
            <div className="projects-div-container-blue">
                <div className="projects-div-text-cont">
                    <p className="project-p-label">{lang && lang === "EN" ? "Projects" : "Proyectos"}</p>
                    <p className="project-p-title">{lang && lang === "EN" ? "Our latest jobs" : "Nuestros últimos trabajos"}</p>
                </div>
            </div>
            <div className="projects-div-container-projects">
                <div className="projects-div-blue"/>
                <div className="project-div-itemscontainer">
                    {
                        projects.map((item,index) => <ProjectCards
                            imageUrl={item.imageUrl}
                            name={item.name}
                            description={lang && lang === "EN" ? item.descriptionEN : item.descriptionSP}
                        />)
                    }
                </div>

            </div>
        </div>
    )
}

const ProjectCards = (props) =>{
    const { name,description,imageUrl } = props;
    return(
        <div className="card-div-background">
            <div className='card-div-container'>
                <img className="card-img" src={imageUrl && imageUrl }/>
                <div className="card-div-textcontainer">
                    <p className="card-p-title">{name && name}</p>
                    <p className="card-p-label">{description && description}</p>
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

export default connect(mapStateToProps)(Home)