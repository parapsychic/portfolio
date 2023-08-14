import React from 'react'
import { BsLaptop, BsPersonFill } from 'react-icons/bs'
import { BiMessageSquareDots } from "react-icons/bi";
import { IoMdSchool } from 'react-icons/io'
import { AiFillAppstore } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const BottomNav = () => {
  const location = useLocation();

  const isActive = (page) =>{
    if(page === location.hash){
      return "text-highlight-font"
    }
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <div className='text-2xl flex flex-row justify-center items-center gap-10 fixed z-20 bottom-6 bg-main-blue border-2 border-highlight-font w-96 h-14 rounded-lg left-0 right-0 mx-auto'>
      <HashLink smooth to='/#about' className='flex flex-col w-fit'>
        <BsPersonFill className={`${isActive("#about")} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth scroll={el => scrollWithOffset(el)} to='/#projects' className='flex flex-col w-fit'>
        <AiFillAppstore className={`${isActive("#projects")} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth scroll={el => scrollWithOffset(el)} to='/#skills' className='flex flex-col w-fit'>
        <IoMdSchool className={`${isActive("#skills")} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth to='/#linux' className='flex flex-col w-fit'>
        <BsLaptop className={`${isActive("#linux")} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth to='/#contact' className='flex flex-col w-fit'>
        <BiMessageSquareDots className={`${isActive("#contact")} hover:text-highlight-font`}/>
      </HashLink>
    </div>
  )
}

export default BottomNav
