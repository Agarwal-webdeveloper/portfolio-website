import React from 'react'
import about from '/pic2.jpg' 
import vs from '/vscode.png'
import fig from '/figma.png'
import git from '/git.png'
import react from '/chatgptt.png'
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";



const About = () => {
  return (
    <>
    <div className='text-[25px] w-[90%] mx-auto md:text-[40px] text-center my-10 font-bold  '>
      About me
    </div>
      <div className='w-[90%] mx-auto md:grid grid-cols-2 p-5'>
        <div className='basis-[36%] max-w-[500px] mx-auto'>
          <img src={about} className='w-full' alt="" />
        </div>

        <div className='mt-8 md:basis-[49%] mx-auto p-5'>
<p>I am Frontend Developer with over a decade of professional expertise in th field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to the success and growth.</p>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7 p-2 overflow-hidden'>
<div className=' shadow-lg p-3 rounded-xl w-full'>
    <HiOutlineCodeBracket className='my-5 font-bold text-2xl'/>
    <h3 className='font-bold mt-3 mb-4 text-xl'>Languages</h3>
    <p className='mb-3 text-[13px]'>HTML , CSS , JAVA SCRIPT , REACT JS , NEXT JS , NODE JS</p>
  </div>
  <div className='shadow-lg p-3 rounded-xl w-full'>
    <MdOutlineCastForEducation className='my-5 font-bold text-2xl'/>
    <h3 className='font-bold mt-3 mb-4 text-xl'>Education</h3>
    <p className='mb-3 text-[13px]'>B.com , Professional Diploma in Web Development</p>
  </div>
  <div className=' shadow-lg p-3 rounded-xl w-full'>
    <GoProjectRoadmap className='my-5 font-bold text-2xl'/>
    <h3 className='font-bold mt-3 mb-4 text-xl'>Projects</h3>
    <p className='mb-3 text-[13px]'>Built nore than 10 Projects</p>
  </div>
</div>
<div className='px-2 pt-5'>
  <h2 className='text-[20px] font-bold'>Tools I use:</h2>
  <div className=' flex items-center gap-6 p-3 my-5'>
    <div className='w-[50px] p-2 shadow-xl'>
<img src={vs} className='w-full' alt="" />
    </div>
    <div className='w-[50px] p-2 shadow-xl'>
<img src={fig} className='w-full' alt="" />
    </div>
    <div className='w-[50px] p-2 shadow-xl'>
<img src={git} className='w-full' alt="" />
    </div>
    <div className='w-[50px] p-2 shadow-xl'>
<img src={react} className='w-full' alt="" />
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  )
}

export default About
