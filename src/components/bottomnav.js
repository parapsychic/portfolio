import React from 'react'
import { BsLaptop, BsPersonFill } from 'react-icons/bs'
import { BiMessageSquareDots } from "react-icons/bi";
import { IoMdSchool } from 'react-icons/io'
import { AiFillAppstore } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

const BottomNav = () => {

  const location = useLocation();

  const isActive = (page) =>{
    console.log(location.pathname)
    if(page === location.pathname){
      return "text-highlight-font"
    }
  }

  return (
    <div className='text-2xl flex flex-row justify-center items-center gap-10 fixed z-20 bottom-6 bg-main-blue border-2 border-highlight-font w-96 h-14 rounded-lg left-0 right-0 mx-auto'>
      <Link to='/about' className='flex flex-col w-fit'>
        <BsPersonFill className={`${isActive("/about")} hover:text-highlight-font`}/>
      </Link>
      <Link to='/projects' className='flex flex-col w-fit'>
        <AiFillAppstore className={`${isActive("/projects")} hover:text-highlight-font`}/>
      </Link>
      <Link to='/skills' className='flex flex-col w-fit'>
        <IoMdSchool className={`${isActive("/skills")} hover:text-highlight-font`}/>
      </Link>
      <Link to='/linux' className='flex flex-col w-fit'>
        <BsLaptop className={`${isActive("/linux")} hover:text-highlight-font`}/>
      </Link>
      <Link to='/contact' className='flex flex-col w-fit'>
        <BiMessageSquareDots className={`${isActive("/contact")} hover:text-highlight-font`}/>
      </Link>
    </div>
  )
}

export default BottomNav
