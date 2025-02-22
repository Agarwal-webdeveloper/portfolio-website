import React, { useEffect, useState } from 'react'
import { workData } from '../assets/assets'


const Project = () => {
  const [worw , setWorw] = useState([])
  
  const fetchData = () =>{
    setWorw(workData)
    console.log(worw)
  }

  useEffect(()=>{
fetchData()
  },[worw])

  // console.log(workData)
  return (
    <>
           <div className='text-[25px] w-[90%] mx-auto md:text-[40px] text-center my-10 font-bold'>
     My Latest Projects
    </div>
    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-7 p-5 overflow-hidden'>
{
  worw.map((curElem , index)=>{
    return(
<div key={index} id='card' className='shadow-xl p-2 relative  overflow-hidden'>
  <img src={curElem.bgImage} className='w-full' alt="" />
  <div id='pro' className='flex flex-col gap-1 p-2 absolute bottom-[-100px] rounded-xl text-center duration-[1s] bg-white w-[80%] left-7 text-lg mx-auto'>
<h2 className='font-bold text-xl text-black'>{curElem.title}</h2>
<p className='text-lg text-black'>{curElem.description}</p>
  </div>
</div>
    )
  })
}

      </div>

    </>
  )
}

export default Project
