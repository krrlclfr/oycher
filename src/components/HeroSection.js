import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithubSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
function HeroSection({darkMode}) {
  return (
    <section id = "home">
        <div className='container-100 h-screen w-full bg-slate-800'>
            <div class="custom-shape-divider-bottom-1669321596">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style = {{fill: darkMode? '#334155':'#F8FAFC'}}></path>
                </svg>
            </div>

            <div className='grid md:grid-cols-1 h-full place-content-center md:w-2/4'>
                <div className='grid grid-flow-col md:grid-col-2 gap-4 md:gap-2'>
                    <div className={`grid place-content-center md:place-content-end my-auto text-slate-50`} >
                        <ul className='px-3'>
                            <li className="p-0 m-0">
                                <FontAwesomeIcon icon={faFacebookSquare} className = "my-2  text-4xl md:text-3xl"/>
                                
                            </li>
                            <li className="p-0 m-0">
                                <FontAwesomeIcon icon={faGithubSquare} className = "my-2  text-4xl md:text-3xl"/>
                            </li>
                            <li className="p-0 m-0">
                                <FontAwesomeIcon icon={faLinkedinIn} className = "my-2  text-4xl md:text-3xl"/>
                            </li>
                        </ul>
                    </div>
                    <div className={`grid place-content-start md:place-content-start my-auto text-slate-50`}>
                        <p> This is Me </p>
                        <h1 className='font-bold text-3xl italic'> Archer A. Cabahug </h1>
                        <p> Fullstack Developer </p>
                        <a href = "#about" className='text-center px-2 py-1 border border-emerald-400 text-emerald-400 rounded-full w-1/2 hover:bg-emerald-400 hover:text-slate-50'> About Me </a>
                    </div>
                    <div className='gg'>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection