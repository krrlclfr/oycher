import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, CodeBracketSquareIcon} from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills({darkMode}) {
    const [programming, setProgramming] = useState(false)
    const [frameworks, setFrameworks] = useState(false)
    const [mobileapp, setMobileapp] = useState(false)
    const [backend, setBackend] = useState(false)
    const [database, setDatabase] = useState(false)
    const handleProgramming = () =>{
        setProgramming(!programming)
        setFrameworks(false)
        setMobileapp(false)
        setBackend(false)
        setDatabase(false)
    }
    const handleFramework = () => {
        setFrameworks(!frameworks)
        setProgramming(false)
        setMobileapp(false)
        setBackend(false)
        setDatabase(false)
    }
    const handleMobileApp = () => {
        setMobileapp(!mobileapp)
        setProgramming(false)
        setFrameworks(false)
        setBackend(false)
        setDatabase(false)
    }
    const handleBackend = () => {
        setBackend(!backend)
        setProgramming(false)
        setMobileapp(false)
        setFrameworks(false)
        setDatabase(false)
    }
    const handleDatabase = () => {
        setDatabase(!database)
        setProgramming(false)
        setMobileapp(false)
        setBackend(false)
        setFrameworks(false)
    }
  return (
    <section id = "skills">
        <div className={`container-100 w-full h-full mx-auto ${darkMode? 'text-slate-50':'text-slate-800'}`}>
            <div className='flex justify-center my-3'>
                <h1 className='text-4xl font-bold italic'> Skills </h1>
            </div>

            <div className='grid grid-cols-1 mx-6 my-8 md:mx-20 md:my-10' data-aos="fade-up">
                <div className='flex justify-between items-center cursor-pointer hover:text-emerald-400' onClick = {handleProgramming}>
                    <div className='flex items-center'>
                        <CodeBracketSquareIcon className='h-10 w-10'/>
                        <p className='font-bold text-1xl px-3'> Programming Language </p>    
                    </div> 
                    <div>
                        {programming == false? 
                            <ChevronDownIcon className='h-6 w-6 cursor-pointer' onClick = {handleProgramming} />
                            : 
                            <ChevronUpIcon className='h-6 w-6 cursor-pointer' onClick = {handleProgramming}/>
                        }
                    </div>
                </div>

                <ul className={programming == false? "hidden": "py-3 w-full flex justify-around overflow-auto"}>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-html5  text-3xl md:text-4xl my-2"></i>

                        <br />
                        <span className = "text-xs md:text-sm"> HTML </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fas fa-code text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> C++ </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fas fa-code text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> C# </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-java  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Java </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-js  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> JavaScript </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-python  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Python </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i className="fab fa-php  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> PHP </span>
                    </li>


                </ul>

            </div>

            <div className='grid grid-cols-1 mx-6 my-8 md:mx-20 md:my-10' data-aos="fade-up">
                <div className='flex justify-between items-center cursor-pointer hover:text-emerald-400' onClick = {handleFramework}>
                    <div className='flex items-center'>
                        <CodeBracketSquareIcon className='h-10 w-10'/>
                        <p className='font-bold text-1xl px-3'> Frameworks </p>    
                    </div> 
                    <div>
                        {frameworks == false? 
                            <ChevronDownIcon className='h-6 w-6 cursor-pointer' onClick = {handleFramework} />
                            : 
                            <ChevronUpIcon className='h-6 w-6 cursor-pointer' onClick = {handleFramework}/>
                        }
                    </div>
                </div>

                <ul className={frameworks == false? "hidden": "py-3 w-full flex justify-around overflow-auto"}>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-react  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> React JS </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-vuejs text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Vue JS </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-bootstrap text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm">  Bootstrap </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-laravel  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Laravel </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i className="fab fa-python  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Django </span>
                    </li>
            

                </ul>

            </div>

            <div className='grid grid-cols-1 mx-6 my-8 md:mx-20 md:my-10' data-aos="fade-up">
                <div className='flex justify-between items-center cursor-pointer hover:text-emerald-400' onClick = {handleMobileApp}>
                    <div className='flex items-center'>
                        <CodeBracketSquareIcon className='h-10 w-10'/>
                        <p className='font-bold text-1xl px-3'> Mobile App Development </p>    
                    </div> 
                    <div>
                        {mobileapp == false? 
                            <ChevronDownIcon className='h-6 w-6 cursor-pointer' onClick = {handleMobileApp} />
                            : 
                            <ChevronUpIcon className='h-6 w-6 cursor-pointer' onClick = {handleMobileApp}/>
                        }
                    </div>
                </div>

                <ul className={mobileapp == false? "hidden": "py-3 w-full flex justify-center overflow-auto"}>
                    <li className='text-center px-4 md:px-2'>
                        <i className="fab fa-react  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> React Native </span>
                    </li>
                </ul>

            </div>

            <div className='grid grid-cols-1 mx-6 my-8 md:mx-20 md:my-10' data-aos="fade-up">
                <div className='flex justify-between items-center cursor-pointer hover:text-emerald-400' onClick = {handleBackend}>
                    <div className='flex items-center'>
                        <CodeBracketSquareIcon className='h-10 w-10'/>
                        <p className='font-bold text-1xl px-3'> Backend </p>    
                    </div> 
                    <div>
                        {backend == false? 
                            <ChevronDownIcon className='h-6 w-6 cursor-pointer' onClick = {handleBackend} />
                            : 
                            <ChevronUpIcon className='h-6 w-6 cursor-pointer' onClick = {handleBackend}/>
                        }
                    </div>
                </div>

                <ul className={backend == false? "hidden": "py-3 w-full flex justify-around overflow-auto"}>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-node  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Node JS </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fab fa-python  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Django </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i className="fab fa-laravel  text-3xl md:text-4xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> Laravel </span>
                    </li>
                </ul>

            </div>

            <div className='grid grid-cols-1 mx-6 my-8 md:mx-20 md:my-10' data-aos="fade-up">
                <div className='flex justify-between items-center cursor-pointer hover:text-emerald-400' onClick = {handleDatabase}>
                    <div className='flex items-center'>
                        <CodeBracketSquareIcon className='h-10 w-10'/>
                        <p className='font-bold text-1xl px-3'> Database </p>    
                    </div> 
                    <div>
                        {database == false? 
                            <ChevronDownIcon className='h-6 w-6 cursor-pointer' onClick = {handleDatabase} />
                            : 
                            <ChevronUpIcon className='h-6 w-6 cursor-pointer' onClick = {handleDatabase}/>
                        }
                    </div>
                </div>

                <ul className={database == false? "hidden": "py-3 w-full flex justify-around overflow-auto"}>
                    <li className='text-center px-4 md:px-2'>
                        <i class="fas fa-database  text-2xl md:text-3xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> MySQL </span>
                    </li>
                    <li className='text-center px-4 md:px-2'>
                        <i className="fas fa-server  text-2xl md:text-3xl my-2"></i>
                        <br />
                        <span className = "text-xs md:text-sm"> MongoDB </span>
                    </li>

                </ul>

            </div>

            <div className='grid grid-cols-1 mx-6 my-8 md:mx-20 md:my-10' data-aos="fade-up">
                
                <div className='flex justify-center items-center'>
                    <p className='font-bold text-1xl px-3'> Tools </p>    
                </div> 

                <ul className="py-3 w-full grid grid-cols-3 overflow-auto">
                    <li className='flex flex-col justify-center items-center px-4 md:px-2'>
                        {darkMode?
                            <img src="https://img.icons8.com/ios-glyphs/30/f8fafc/adobe-photoshop.png" className = "h-10 w-10"/>
                        :
                            <img src="https://img.icons8.com/ios-glyphs/30/1e293b/adobe-photoshop.png" className = "h-10 w-10"/>
                        }
                        <br />
                        <span className = "text-xs md:text-sm"> Adobe Photoshop </span>
                    </li>
                    <li className='flex flex-col justify-center items-center px-4 md:px-2'>
                        {darkMode?
                            <img src="https://img.icons8.com/ios-glyphs/30/f8fafc/adobe-illustrator.png" className = "h-10 w-10"/>
                        :
                            <img src="https://img.icons8.com/ios-glyphs/30/1e293b/adobe-illustrator.png" className = "h-10 w-10"/>
                        }
                        <br />
                        <span className = "text-xs md:text-sm"> Adobe Illustrator </span>
                    </li>
                    <li className='flex flex-col justify-center items-center px-4 md:px-2'>
                        {darkMode?
                            <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/30/f8fafc/external-postman-is-the-only-complete-api-development-environment-logo-bold-tal-revivo.png"/>
                        :
                            <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/30/1e293b/external-postman-is-the-only-complete-api-development-environment-logo-bold-tal-revivo.png"/>
                        }

                    
                        
                        <br />
                        <span className = "text-xs md:text-sm"> Postman </span>
                    </li>
                </ul>

            </div>            
        </div>
    </section>
  )
}

export default Skills