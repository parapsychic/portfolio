import React, { useState } from 'react'
import { MdGames, MdLaptop, MdSchool, MdSmartphone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => {
  const [graduateInfo, setGraduateInfo] = useState('CSE Graduate')

  const handleHover = () => {
    const info = (graduateInfo !== 'CSE Graduate') ? 'CSE Graduate' : 'BTech Graduate'
    setGraduateInfo(info)
    console.log(info)
  }

  return (
    <div id='about' className='snap-center flex flex-col h-screen justify-center'>
      <div className='pb-10 '>
        <h3 className='text-dim-blue'>My Intro</h3>
        <h2 className='text-3xl'>About <span className='text-highlight-font '>Me</span></h2>
        <ul className="pt-5 w-52 m-auto">
          <li className='flex gap-3 text-xl pb-5 flex-start align-baseline'><MdSchool className='h-auto' /><span onClick={handleHover}>{graduateInfo}</span></li>
          <li className='flex gap-3 text-xl pb-5 flex-start align-baseline'><MdGames className='h-auto' /> Game Developer</li>
          <li className='flex gap-3 text-xl pb-5 flex-start align-baseline'><MdSmartphone className='h-auto' /> App Developer</li>
          <li className='flex gap-3 text-xl pb-5 flex-start align-baseline'><MdLaptop className='h-auto' /> Web Developer</li>
        </ul>
        <p className='font-jetbrains-mono font-normal w-96 m-auto'>
          I am a passionate developer with experience in app and web development.
        </p>
        <p className='font-jetbrains-mono font-normal w-96 m-auto'>
          I want to build beautiful and immersive experiences for my users.
        </p>
        <div className='py-5'>
          <Link to="/contact">
            <button className="mx-5 border border-white hover:border-highlight-font hover:text-highlight-font text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
              Contact Me
            </button></Link>

          <Link to="https://drive.google.com/file/d/1SCz9faKsH93AAc3JJ8-1WpZ1ogSCBxR-/view?usp=sharing" target="_blank">
            <button className="my-5 bg-gradient-to-r from-red-500 to-highlight-font border border-white hover:border-highlight-font hover:text-gray-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
              Download CV
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default About
