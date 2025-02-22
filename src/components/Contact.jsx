import React from 'react'

const Contact = () => {
  return (
    <>
            <div className='text-[25px] w-[90%] mx-auto md:text-[40px] text-center my-10 font-bold'>
    Contact Me
    </div>
<div className='w-[90%] shadow-2xl mx-auto flex flex-col gap-4 my-7 p-5'>
<div className='flex flex-col w-[80%] md:w-[55%] mx-auto md:flex-row items-center justify-center gap-4 my-7 px-5 py-2'>
        <input type="w-[] text" placeholder='Enter Your Name' className='text-[15px] text-center px-5 py-2 rounded-xl border border-black md:text-lg w-full' name='name' />
        <input type="password" name="" placeholder='Enter Your Password' className='text-[15px] text-center px-5 py-2 rounded-xl border border-black md:text-lg w-full' id="" />
    </div>
    <div className='flex items-center justify-center'>
        <textarea name="" placeholder='Enter Your Text.....'  className='w-[80%] text-xl pt-2 pl-5 border border-black h-[250px] md:w-[50%] rounded-xl' id=""></textarea>
    </div>
    <div className='w-[90%] mx-auto flex items-center justify-center my-5'>
    <button className='bg-blue-950  text-white text-[20px] px-5 py-2 rounded-[25px]'>Submit Now</button>

    </div>

</div>



    </>
  )
}

export default Contact
