import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='me' className='flex flex-col justify-center align-middle h-screen'>
      <div className='flex flex-col justify-center '>
        <h1 className=' font-md'>Hello, I'm</h1>
        <h1 className='text-3xl '>Febin <span className="text-highlight-font">K Dominic</span></h1>
      </div>
      <div className='flex text-3xl py-5 justify-center gap-9'>
        <Link to="https://github.com/parapsychic" target={"_blank"}><BsGithub className='hover:text-highlight-font' /> </Link>
        <Link to="https://linkedin.com/in/febinkdominic" target={"_blank"}><BsLinkedin className='hover:text-highlight-font' /></Link>
        <Link to="/contact" ><FaPaperPlane className='hover:text-highlight-font' /></Link>
      </div>

    </div>
  )
}

export default Home 
