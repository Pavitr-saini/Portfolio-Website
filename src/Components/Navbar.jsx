import React from 'react'
import { useState } from 'react'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
  return (
   <>
    <div className='flex w-full h-20 justify-between items-center text-white  bg-black '>
        <div className='mx-20 text-xl tracking-wide font-bold'>Portfolio</div>
              <img onClick={()=>{setIsOpen(!isOpen); setOpenMenu(!openMenu)}}  className='invert-100 md:hidden mx-5 font-bold transition-all duration-300' src={isOpen ? close : hamburger} alt="" />
              {openMenu && <div
                  className={`fixed top-20 right-0 h-[30vh] w-64 bg-[#171d32] shadow-lg  transition-all
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
              >
                  <ul className="p-6 space-y-6 text-lg font-medium">
                      <a href="#About"> <li onClick={() => { setIsOpen(!isOpen); setOpenMenu(!openMenu) }} className='text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
                      <a href="#Skills"> <li onClick={() => { setIsOpen(!isOpen); setOpenMenu(!openMenu) }} className='text-md transition-all duration-300 p-1 md:p-0' >Skills</li></a>
                      <a href="#Projects"> <li onClick={() => { setIsOpen(!isOpen); setOpenMenu(!openMenu) }} className='text-md transition-all duration-300 p-1 md:p-0' >Projects</li></a>
                       <a href="#Footer"> <li onClick={() => { setIsOpen(!isOpen); setOpenMenu(!openMenu) }} className='text-md transition-all duration-300 p-1 md:p-0' >Contact</li></a>
                      
                  </ul>
              </div>}
        <div className='hidden md:block'>
         <ul className='flex gap-6 mx-9 font-semibold'>
         <a href="#About"> <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
               <a href="#Skills"> <li className='text-md transition-all duration-300 p-1 md:p-0' >Skills</li></a>
               <a href="#Projects"> <li className='text-md transition-all duration-300 p-1 md:p-0' >Projects</li></a>
               <a href="#Footer"> <li className='text-md transition-all duration-300 p-1 md:p-0' >Contact</li></a>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Navbar