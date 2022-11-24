import React from 'react'

function About({darkMode}) {
  return (
    <section id = "about">
        <div className={`container-100 h-screen md:h-screen ${darkMode? 'text-slate-50':'text-slate-800'}`}>
            <div className='flex justify-center my-3'>
                <h1 className='text-4xl font-bold italic'> About </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-3'>
                <div className='flex justify-center items-center'>
                    <div class = "profile-container">
                        <div class = "profile">
                            <div class = "profile-pic">
                            <img  src = "./image/thisisme.png" class = "rounded-circle img-fluid pt-4" />
                            </div>
                        </div>
                    </div>  
                   
                </div>
                <div className='grid place-content-center px-3 py-3 text-center md:text-left'>
                    <p className='text-sm md:text-md lg:text-lg' data-aos="fade-up"> I'm Archer A. Cabahug 24 years old. A fullstack web developer. </p>
                    <p className='text-sm md:text-md lg:text-lg' data-aos="fade-up">I have diverse set of skills, ranging from design to HTML + CSS + Javascript. For database design i have skills of Mysql and MongoDB. Can use React js or Vue js for Frontend And Django, Laravel for Backend. Also I'm familiar with Node js, MVC, OOP, REST API And State management like Redux.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About