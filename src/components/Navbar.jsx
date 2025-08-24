import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <>

        <div className='absolute top-0 left-0 w-full z-10'>

            {/* Logo Section */}
            <div className='container mx-auto flex items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <div className='text-2xl flex items-center gap-2 font-bold uppercase' >
                <img className='size-13' src={assets.logo1} alt="" />
                <p className='text-white '>RISE-N-GRIND TRUCKING</p>
                </div>
                
            

            
                <ul className='hidden md:flex gap-7 text-white font-bold'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
           
                <button className='hidden md:block bg-white px-8 py-2 rounded-full font-bold'>Connect us</button>
            </div>



        </div>
 
    </>
  );
}

export default Navbar
