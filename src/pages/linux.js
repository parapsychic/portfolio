import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Linux = () => {
  return (
    <div id='linux' className='pb-10 lg:h-screen mt-16 h-screen flex flex-col justify-center'>
      <div>
        <h2 className='text-3xl mb-5'>Linux </h2>
        <Link to="https://github.com/parapsychic/dot-files" target={"_blank"} className='mb-5 text-2xl flex gap-3 align-middle items-center justify-center hover:text-highlight-font'>
          <BsGithub /><p className='font-normal underline'>DOTS</p>
        </Link>
        <ul className='mx-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <li className='max-w-[500px] md:max-w-[600px]  m-auto hover:drop-shadow-xl'>
            <img src="/linux/dwm.png" alt='dwm desktop' />
            <p className='py-5'> DWM/XORG </p>
          </li>
          <li className='max-w-[500px] md:max-w-[600px] m-auto transiton ease-in-out delay-100 hover:drop-shadow-2xl duration-300 md:mb-16 lg:mb-0'>
            <img src="/linux/hyprland.png" alt='hyprland desktop' />
            <p className='py-5'> HYPRLAND/WAYLAND </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Linux  
