import React from 'react'
import hero from '/po3.jpg'
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <>
       <div id='nav'>
     <div className='w-[90%] mx-auto flex flex-col items-center justify-center'>
        <div id='effect' className='py-2  my-4 flex flex-col items-center justify-center mx-auto w-[190px] '>
            <img id='hero'  src={hero} className='border-none w-full border border-black ' alt="" />
        </div>
        <h3 className='text-center bg-blue-950 text-white rounded-[50px] mx-auto w-[230px] mt-2 mb-5 font-bold text-lg py-1 px-2 border border-black'>Hi I'm Ujjawal Agarwal</h3>

        <h1 className='text-center text-[30px] leading-[39px] mx-auto text-center md:text-[50px] '>Frontend Developer Based in INDIA</h1>
        <p className='text-[15px] mx-auto  my-5 text-center px-2 md:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, hic vero delectus consectetur explicabo iure laborum nam sed natus magnam corporis, veritatis dolor autem in consequatur fugit repudiandae reprehenderit. Saepe.</p>
<div className='flex flex-col gap-5 mt-2 px-5 py-4 w-[400px] overflow-hidden md:flex-row items-center justify-between'>
    <button className='bg-blue-950  text-white text-[20px] px-5 py-2 rounded-[25px]'>Contact me</button>
    
     <a href="/my-resume.pdf" download><button className='flex items-center gap-1 justify-center bg-blue-950 text-white text-[20px] px-5 py-2 rounded-[25px]'>My Resume <span><IoMdDownload/></span></button></a>

   

    </div>
    </div>
    </div>
     
    </>
  )
}

export default Hero
