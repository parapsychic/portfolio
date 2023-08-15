import React, { useEffect, useRef, useState } from 'react'
import { BsLaptop, BsPersonFill } from 'react-icons/bs'
import { BiMessageSquareDots } from "react-icons/bi";
import { IoMdSchool } from 'react-icons/io'
import { AiFillAppstore } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const BottomNav = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }


  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      console.log(visibleSection)
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);


  return (
    <div className='text-2xl flex flex-row justify-center items-center gap-10 fixed z-20 bottom-6 bg-main-blue border-2 border-highlight-font w-96 h-14 rounded-lg left-0 right-0 mx-auto'>
      <HashLink smooth to='/#about' className='flex flex-col w-fit'>
        <BsPersonFill className={`${activeSection === 'about-main' ? 'text-highlight-font':''} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth scroll={el => scrollWithOffset(el)} to='/#projects' className='flex flex-col w-fit'>
        <AiFillAppstore className={`${activeSection === 'projects-main' ? 'text-highlight-font':''} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth scroll={el => scrollWithOffset(el)} to='/#skills' className='flex flex-col w-fit'>
        <IoMdSchool className={`${activeSection === 'skills-main' ? 'text-highlight-font':''} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth to='/#linux' className='flex flex-col w-fit'>
        <BsLaptop className={`${activeSection === 'linux-main' ? 'text-highlight-font':''} hover:text-highlight-font`}/>
      </HashLink>
      <HashLink smooth to='/#contact' className='flex flex-col w-fit'>
        <BiMessageSquareDots className={`${activeSection === 'contact-main' ? 'text-highlight-font':''} hover:text-highlight-font`}/>
      </HashLink>
    </div>
  )
}

export default BottomNav
