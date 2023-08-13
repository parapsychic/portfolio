import React from 'react'

const SkillCard = ({imageUrl, hover, auto=false}) => {
  if(auto) {
    return (
    <img className='h-auto lg:max-h-20 lg:max-w-xs' src={imageUrl} alt={hover} />
  )
  }

  return (
    <img className='h-16 md:h-28' src={imageUrl} alt={hover}/>
  )
}

export default SkillCard
