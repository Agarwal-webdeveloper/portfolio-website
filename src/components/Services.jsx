import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";
import { SiGamedeveloper } from "react-icons/si";
import { SiSololearn } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";

const Services = () => {
  return (
    <>
     <div className='text-[25px] w-[90%] mx-auto md:text-[40px] text-center my-10 font-bold  '>
     My Services
    </div> 
    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7 p-5 overflow-hidden'>
<div className='flex flex-col justify-center items-center shadow-lg my-4 p-3 rounded-xl w-full hover:bg-blue-950 hover:text-white'>
    <FaGlobeAmericas className='my-5 font-bold text-2xl'/>
    <h3 className='font-bold mt-1 mb-4 text-xl'>Web Design</h3>
    <p className='text-center mb-3 text-[13px]'>Designing the high functional , unique and stunning platforms for brands.</p>
  </div>
  <div className='flex flex-col justify-center items-center shadow-lg my-4 p-3 rounded-xl w-full hover:bg-blue-950 hover:text-white'>
      <BsAndroid2 className='my-5 font-bold text-2xl'/>
      <h3 className='font-bold mt-1 mb-4 text-xl'>Mobile Apps</h3>
      <p className='text-center mb-3 text-[13px]'>Building high-quality mobile apps that meet your business needs and exceed user expectations.</p>
    </div>
    <div className='flex flex-col justify-center items-center shadow-lg my-4 p-3 rounded-xl w-full hover:bg-blue-950 hover:text-white'>
        <GrAppsRounded className='my-5 font-bold text-2xl'/>
        <h3 className='font-bold mt-1 mb-4 text-xl'>UI UX Design</h3>
        <p className='text-center mb-3 text-[13px]'>Intuitive interface with focus on the experience of and users.</p>
      </div>
      <div className='flex flex-col justify-center items-center shadow-lg my-4 p-3 rounded-xl w-full hover:bg-blue-950 hover:text-white'>
    <SiGamedeveloper className='my-5 font-bold text-2xl'/>
    <h3 className='font-bold mt-1 mb-4 text-xl'>Development</h3>
    <p className='text-center mb-3 text-[13px]'>The backbone supporting our cutting edge web-design.</p>
  </div>
  <div className='flex flex-col justify-center items-center shadow-lg my-4 p-3 rounded-xl w-full hover:bg-blue-950 hover:text-white'>
      <SiSololearn className='my-5 font-bold text-2xl'/>
      <h3 className='font-bold mt-1 mb-4 text-xl'>E-Learning</h3>
      <p className='text-center mb-3 text-[13px]'>Putting the user at the heart of the product to create educating enviroment that fits seamlessly.</p>
    </div>
    <div className='flex flex-col justify-center items-center shadow-lg my-4 p-3 rounded-xl w-full hover:bg-blue-950 hover:text-white'>
        <MdOutlineAnimation className='my-5 font-bold text-2xl'/>
        <h3 className='font-bold mt-1 mb-4 text-xl'>Animation</h3>
        <p className='text-center mb-3 text-[13px]'>Visul Effects and grafic motion , Utilize as effective communication tools.</p>
      </div>
</div>
    </>
  )
}

export default Services
