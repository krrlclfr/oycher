import React, { useCallback, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";

import ProjectJson from './Project.json'
function Project({darkMode}) {
    const [projectView, setProjectView] = useState(false)
    const [project, setProject] = useState()
    const [listProject, setListProject] = useState(ProjectJson)
    const handleView = useCallback(
        (data) => () => {
            console.log(data)
            setProject(data)
            setProjectView(true)
        }
    )
    const handleClose = () => {
        setProjectView(false)
    }

    const handleAll = () => {
        setListProject(ProjectJson)
    }

    const handleWebApp = () => {
        const web = ProjectJson.filter(item => item.tag.toLocaleLowerCase().includes('web'))
        setListProject(web)
    }
    
    const handleDesktop = () => {
        const desktop = ProjectJson.filter(item => item.tag.toLocaleLowerCase().includes('desktop'))
        setListProject(desktop)
    }
    const handleProgram = () => {
        const program = ProjectJson.filter(item => item.tag.toLocaleLowerCase().includes('program'))
        setListProject(program)
    }


  return (
    <section id = "project">
        <div className='container-100 h-full w-full'>
            <div className='flex justify-center my-3'>
                <h1 className={`text-4xl font-bold italic ${darkMode? "text-slate-50":"text-slate-700"}`}> Project </h1>
            </div>
            <div className='border-b border-emerald-500 border-slate-400 '>
                <ul className = {`flex justify-center items-center ${darkMode? "text-slate-50":"text-slate-700"}`}>
                    <li className = "cursor-pointer rounded-t-sm hover:border-l hover:border-r hover:border-t hover:text-emerald-500 border-emerald-500" onClick = {handleAll}>All</li>
                    <li className = "cursor-pointer rounded-t-sm hover:border-l hover:border-r hover:border-t hover:text-emerald-500 border-emerald-500" onClick = {handleWebApp}>Wep App</li>
                    <li className = "cursor-pointer rounded-t-sm hover:border-l hover:border-r hover:border-t hover:text-emerald-500 border-emerald-500" onClick = {handleDesktop}>Desktop App</li>
                    <li className = "cursor-pointer rounded-t-sm hover:border-l hover:border-r hover:border-t hover:text-emerald-500 border-emerald-500" onClick = {handleProgram}>Program</li>
                </ul>
            </div>
            <div className='grid grid-cols-1 place-content-center md:grid-cols-2 my-3 lg:grid-cols-3'>
                {listProject && listProject.map((data, idx) => (
                    <>
                        <div className={`card my-5 bg-slate-700 ${darkMode? "bg-slate-700":"bg-slate-50"}`} key = {idx} onClick={handleView(data)} data-aos="fade-up">
                            <div className="card-image border rounded-sm">
                                <img src = {data.image} className = "w-full h-full object-cover cursor-pointer" />
                            </div>
                            <div className="category"> {data.title} </div>
                            <div className={`heading ${darkMode? "text-slate-50":"text-slate-700"}`}> {data.header}
                            </div>
                            <div className = "flex justify-start items-center">
                                {data.lang.map(element => (
                                    <>
                                        <span className='mx-1 text-[10px] bg-emerald-500 py-1 px-2 text-white rounded-full'> {element} </span> 
                                    </>
                                ))}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
        {projectView &&  
            <div className='container-100 w-full h-full bg-slate-800/60 fixed top-0 pt-24 md:pt-10' >
                <div className='flex justify-end items-center px-3 py-3' data-aos="fade-up">
                    <i class="fas fa-times text-slate-50 cursor-pointer hover:text-emerald-400" onClick = {handleClose}></i>
                </div>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {project? project.project.map(data => (

                            <SwiperSlide className='px-3 flex justify-center items-center'><img src = {data} className = "md:h-96" data-aos="fade-up"/> </SwiperSlide>
                
                    )):'loading'}
                </Swiper>



            </div>
        }
    </section>
  )
}

export default Project