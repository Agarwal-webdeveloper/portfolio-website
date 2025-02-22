import React, { useEffect, useState } from 'react'
import logo from '/l2.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

const Navbar = () => {
    const [toogle , setToogle] = useState(false)
    const [menu , setMenu] = useState("Home")
    const [dark ,setDark] = useState(false)

    useEffect(()=>{
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },[dark])
  return (
    <>
    <div id='nava' className='sticky top-0 w-[90%] mx-auto shadow-xl flex justify-between py-3 items-center '>
<div className='w-[100px] sm:w-[100px]  bg-[rgba(0,0,0,0.9)] p-1 md:w-[180px] mx-5'>
<img src={logo} className='w-full' alt="" />
</div>
<ul className='hidden sm:text-[15px] font-weight: 500 md:flex justify-between p-2 mx-2 gap-16 items-center font-bold text-[23px] lg:text-[23px]'>
            <li onClick={()=>setMenu("Home")} className='text--blue-800 cursor-pointer'><a href='#top'>Home</a>{menu === "Home" ? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("About")} className='text-blue-800 cursor-pointer'><a href='#about'>About</a>{menu === "About" ? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("Product")} className='text-blue-800 cursor-pointer'><a href='#services'>Services</a>{menu === "Product" ? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("Contact")} className='text-blue-800 cursor-pointer'><a href='#project'>Projects</a>{menu === "Contact" ? <hr/> : <></>}</li>
             <li onClick={()=>setMenu("Cart")} className='text-blue-800 cursor-pointer'><a href='#contact'>Contacts</a>{menu === "Cart" ? <hr/> : <></> }</li>
        </ul>
          <div className='text-[25px] flex gap-[25px] mx-3'>
                  <div onClick={()=>setDark(!dark)} className='relative'>
                    {dark ?
                       <FaSun className='text-black hover:text-[red] cursor-pointer'/>

                    :
                  <FaMoon className='text-blue-950  hover:text-[red] cursor-pointer'/>

}

                  </div>
                  <FaBarsStaggered onClick={()=>setToogle(!toogle)} className='text-blue-950 transition-all cursor-pointer md:hidden'/>
                </div>
                
    </div>
    <div className={` w-[50%] ${toogle ? 'fixed w-[500px]' : 'w-0 h-0'} mx-auto right-[10px] top-0 bottom-0  overflow-hidden bg-blue-950 transition-all md:hidden `}>
          <div className='flex justify-end p-6 text-3xl cursor-pointer relative'>
          <FaTimes onClick={()=>setToogle(!toogle)} className='w-6 text-white m-1 absolute top-[70px] md:hidden'/>
          </div>
         
        <ul className='flex flex-col items-center gap-[30px] text-[23px] mt-10 py-5 leading-9 font-medium text-xl md:hidden'>
        <li onClick={()=>setMenu("Home")} className='text-yellow-300 cursor-pointer'><a href='#top'>Home</a>{menu === "Home" ? <hr/> : <></> }</li>
            <li onClick={()=>setMenu("About")} className='text-white cursor-pointer'><a href='#about'>About</a>{menu === "About" ? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("Product")} className='text-white cursor-pointer'><a href='#services'>Services</a>{menu === "Product" ? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("Contact")} className='text-white cursor-pointer'><a href='#project'>Projects</a>{menu === "Contact" ? <hr/> : <></>}</li>
            <li onClick={()=>setMenu("Cart")} className='text-white cursor-pointer'><a href='#contact'>Contacts</a>{menu === "Cart" ? <hr/> : <></> }</li>
        </ul>
        </div>
    </>
  )
}

export default Navbar
