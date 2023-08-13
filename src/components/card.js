import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({project:{title, imgUrl, desc}, onClick}) => {
  return (<Link to={onClick} target="_blank" rel="noopener noreferrer">
    <div className='rounded-lg bg-stroke-blue border-none transiton ease-in-out delay-100 hover:drop-shadow-2xl duration-300 overflow-hidden max-w-xs h-fit '>
    <img className='h-fit' src={imgUrl} alt={title}/>
    <div className='px-3'>

    <p className='text-xl mt-4 mb-2'>{title}</p>
    <p className=' text-dim-blue mb-4'>{desc}</p>
    </div>
    </div></Link>
  )
}

export default Card
