import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import {Typewriter, } from 'react-simple-typewriter';

const Contact = () => {


  return (
    <div id='contact' className='pb-10 h-screen flex flex-col justify-center'>
      <h2  className='text-3xl mb-5'>Contact <span className='text-highlight-font'>
    { <Typewriter 
        words={[ 'ParaPsychic','Febin', ]}  
        delaySpeed={5000}
        cursor
        cursorStyle='|'
        loop={true}
    />}
    
    </span></h2>

        <div className='w-fit items-center justify-center mx-auto'>
        <Link to="mailto:febinkdominic@outlook.com" className='flex text-xl gap-3 mb-2 justify-start align-middle items-center hover:text-highlight-font'>
          <IoMail className='text-2xl' /><p>febinkdominic@outlook.com</p>
        </Link>

        <Link to="https://www.linkedin.com/in/febinkdominic" className='flex text-xl gap-3 mb-5 justify-start align-middle items-center hover:text-highlight-font'>
          <BsLinkedin className='text-2xl'/><p>/febinkdominic</p>
      </Link>
      </div>

    </div>
  )
}

export default Contact
