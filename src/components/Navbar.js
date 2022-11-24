import React, { useState } from 'react'
import {Bars3Icon} from '@heroicons/react/24/outline'

function Navbar({handelSwitchMode, darkMode}) {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleSwitch = () => {
        handelSwitchMode(!false)
    }
  return (
    <> 
        <nav className={`flex flex-row justify-between bg-slate-800 px-3 py-3 fixed w-full z-50`}>
            <div>
                <img src = "./image/cher-logo.png" className='h-12'/>
            </div>
            <ul className={`hidden text-slate-200 md:flex`}>
                <li>
                    <a href = "#home" className='hover:text-emerald-400'> Home </a>
                </li>
                <li>
                    <a href = "#about" className='hover:text-emerald-400'> About </a>
                </li>
                <li>
                    <a href = "#skills" className='hover:text-emerald-400'> Skills </a>
                
                </li>
                <li>
                    <a href = "#qualification" className='hover:text-emerald-400'> Qualification </a>
                  
                </li>
                <li>
                    <a href = "#project" className='hover:text-emerald-400'> Project </a>
              
                </li>
                <li>
                    <a href = "#contact" className='hover:text-emerald-400'> Contact </a>
               
                </li>                                        
            </ul>
            <div className='flex justify-center items-center'>
                {handelSwitchMode}
                <div className='px-2 pt-2'>
                
                <Bars3Icon className = "h-6 w-6 cursor-pointer text-slate-50 md:hidden"  onClick={handleMenu}/>
                </div>
                    
            </div>
        </nav>
        <div className={menu == false? 'hidden':'grid grid-cols-1 relative'} >
            <ul className="text-center absolute w-full bg-slate-800 text-slate-50">
                <li className=' hover:bg-slate-900 cursor-pointer'>
                    <a href = "#home"> Home </a>
                </li>
                <li className=' hover:bg-slate-900 cursor-pointer'>
                    <a href = "#about"> About </a>
                </li>
                <li className=' hover:bg-slate-900 cursor-pointer'>
                    <a href = "#skills"> Skills </a>
                </li>
                <li className=' hover:bg-slate-900 cursor-pointer'>
                    <a href = "#qualification"> Qualification </a>
                </li>
                <li className=' hover:bg-slate-900 cursor-pointer'>
                    <a href = "#project"> Project </a>
                </li>
                <li className=' hover:bg-slate-900 cursor-pointer'>
                    <a href = "#contact"> Contact </a>
                </li>
                
            </ul>
        </div>
    </>
  )
}

export default Navbar