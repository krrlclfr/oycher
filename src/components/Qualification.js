import React from 'react'

function Qualification({darkMode}) {
  return (
    <section id = "qualification"> 
        <div className={`container-100 h-screen md:h-screen  ${darkMode? 'text-slate-50':'text-slate-800'}`}>
            <div className='flex justify-center my-3'>
                <div className = "py-3">
                    <h1 className='text-4xl font-bold italic'> Qualification </h1>
                    <div className='flex justify-center items-center py-3' data-aos="fade-up">
                        <i class="fas fa-graduation-cap text-lg">  </i> <p> Education</p>
                    </div>
                </div>
            </div>
            <div className = "flex justify-center">
                <span className={`w-3 h-3 bg-slate-800 rounded-full  ${darkMode? 'bg-slate-50':'bg-slate-800'}`}  data-aos="fade-up"></span>
            </div>

            <div className = "grid grid-cols-2">
                <div className = "flex justify-end items-end border-r px-3 py-3">
                    <div className='text-right'>
                        <h1 className = "text- font-bold md:text-2xl" data-aos="fade-up"> COLLEGE </h1>
                        <p className = "text-sm py-2" data-aos="fade-up"> ACCESS COMPUTER COLLEGE </p>
                        <p className = "text-sm py-2" data-aos="fade-up"> BACHELOR OF SCIENCE AND INFORMATION TECHNOLOGY </p>
                        <p className = "text-sm py-2" data-aos="fade-up"> JUNE 2018-2022 </p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className = "flex justify-center">
                <span className={`w-3 h-3 bg-slate-800 rounded-full  ${darkMode? 'bg-slate-50':'bg-slate-800'}`}  data-aos="fade-up"></span>
            </div>
            <div className = "grid grid-cols-2">
                <div>
                    
                </div>
                
                <div className = "flex justify-start items-start border-l px-3 py-3" >
                    <div className='text-left'>
                        <h1 className = "text-1xl font-bold md:text-2xl" data-aos="fade-up"> SENIOR HIGH SCHOOL </h1>
                        <p className = "text-sm py-2" data-aos="fade-up"> UNIVERSITY OF CALOOCAN </p>
                        <p className = "text-sm py-2" data-aos="fade-up"> ACCOUNTANCY AND BUSINESS MANAGEMENT </p>
                        <p className = "text-sm py-2" data-aos="fade-up"> APRIL 2016-2018</p>
                    </div>
                </div>
            </div>
            <div className = "flex justify-center">
                <span className={`w-3 h-3 bg-slate-800 rounded-full  ${darkMode? 'bg-slate-50':'bg-slate-800'}`}  data-aos="fade-up"></span>
            </div>
            <div className = "flex justify-center my-5">
                <button className = "border border-emerald-400 text-emerald-400 px-4 py-2 rounded-full hover:bg-emerald-800 hover:text-slate-50" data-aos="fade-up"> Download Resume </button>
            </div>
        </div>
    </section>
  )
}

export default Qualification