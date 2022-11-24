import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from 'aos';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [switchMode, setSwitchMode] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSwitches = () => {
    setDarkMode(current => !current)
    
  }
  const handleSwitch = () => {
    setSwitchMode(
      <>
          <label className="switch">
              <input type="checkbox"/>
              <span className="slider bg-slate-700" onClick={handleSwitches}></span>
          </label>
      </>
    )
  }
  
  useEffect(() => {
    handleSwitch()

    setTimeout(() => (
        setLoading(false)
    ), 3000)
    
  },[])
  return (
    <div className={darkMode? 'bg-slate-700':'bg-slate-50'}>

      {/* Loading Animation */}
      {loading? 
          <div className='container-100 fixed bg-slate-50 z-10 h-full w-full top-0'>
              <div className='flex justify-center items-center h-full'>
                <div className="spinner">
                  <div className="loader l1"></div>
                  <div className="loader l2"></div>
                </div>
              </div>
          </div>
        :
        <>
          <Navbar handelSwitchMode = {switchMode} darkMode = {darkMode}/>
          <HeroSection darkMode = {darkMode}/>
          <About darkMode = {darkMode}/>
          <Skills darkMode = {darkMode}/>
          <Qualification darkMode = {darkMode}/>
          <Project darkMode = {darkMode}/>
          <Contact darkMode = {darkMode}/>
          <Footer darkMode = {darkMode}/>
        </>
      }

        <a href = "#home"> 
          <div className='cursor-pointer fixed flex justify-center items-center right-5 bottom-10 h-8 w-8 text-emerald-500 bg-slate-50 border-emerald-500 border rounded-full hover:bg-emerald-500 hover:text-slate-50'>
            <ArrowUpIcon className = "px-2 " /> 
          </div>
        </a>
      
      
    </div>
  )
}

export default App;
