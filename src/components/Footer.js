import React from 'react'

function Footer() {
  return (
    <section id = "footer">
    <div className='container-100 bg-slate-800 h-[550px] md:h-[350px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 my-3 h-full'>
            <div className='flex justify-center items-center'>
                <img src = "./image/cher-logo.png" className='h-20 md:h-24'/>
            </div>
            <div className='grid place-content-center px-3 py-3 text-center md:text-left text-white'>
                <h1 className='font-bold text-md'> Portfolio </h1>
                <a href = "#about" className='py-1 text-sm'>  About  </a>
                <a href = "#skills" className='py-1 text-sm'>  Skills  </a>
                <a href = "#qualification" className='py-1 text-sm'>  Download Resume  </a>
             
            </div>
            <div className='grid place-content-center px-3 py-3 text-center md:text-left text-white'>
                <h1 className='font-bold text-md'> Follow Me </h1>
                <div className = "py-1">
                    <a href = "https://www.facebook.com/oycher" target = "_blank" > <i class="fab fa-facebook-square text-2xl pr-3"></i> </a>
                    <a href = "https://www.instagram.com/oy_cher" target = "_blank" > <i class="fab fa-instagram-square text-2xl px-3"></i></a>
                    <a href = "https://www.twitter.com/oycheeer" target = "_blank" > <i class="fab fa-twitter-square text-2xl px-3"></i></a>
                    <a href = "https://www.linkedin.com/in/archer-cabahug-88702923a/" target = "_blank" > <i class="fab fa-linkedin text-2xl px-3"></i></a>
                </div>
                <span className='py-1 text-sm'> Archer A. Cabahug</span>
                <span className='py-1 text-sm'> © 2022 </span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer