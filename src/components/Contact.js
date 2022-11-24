import React from 'react'

function Contact({darkMode}) {
  return (
    <section id = "contact">
        <div className={`container-100 h-screen md:h-screen ${darkMode? 'text-slate-50':'text-slate-800'}`}>
            <div className='flex justify-center my-3'>
                <h1 className='text-4xl font-bold italic'> Contact Me </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 place-content-center h-full md:h-2/3'>
                <div className='flex justify-center items-center'>
                    <div className='mx-auto'>
                        <div className='flex justify-start items-center my-8'>
                            <div className = "px-3">
                                <i class="fas fa-mobile-alt text-center text-4xl md:text-3xl" data-aos="fade-up"></i>
                            </div>
                            <div className='text-text md:text-sm px-3'>
                                <h1 className = "font-bold text-md" data-aos="fade-up"> Contact Me</h1>
                                <p className='p-0 m-0' data-aos="fade-up"> +639668752139</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center my-8'>
                            <div className = "px-3 ">
                                <i class="fas fa-envelope text-center text-3xl md:text-2xl" data-aos="fade-up"></i>
                            </div>
                            <div className='text-left md:text-sm px-3'>
                                <h1 className = "font-bold text-md" data-aos="fade-up"> Email</h1>
                                <p className='p-0 m-0' data-aos="fade-up"> archer.cabahug21@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex justify-start items-center my-8'>
                            <div className = "px-3">
                                <i class="fas fa-map-marker-alt text-4xl md:text-3xl" data-aos="fade-up"></i>
                            </div>
                            <div className='text-left md:text-sm px-3'>
                                <h1 className = "font-bold text-md" data-aos="fade-up"> Address</h1>
                                <p className='p-0 m-0' data-aos="fade-up"> Caloocan City</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className='grid place-content-center px-3 py-3'>
                    <img src = "./image/contact_us.svg" className='w-80 md:w-96' data-aos="fade-up"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact