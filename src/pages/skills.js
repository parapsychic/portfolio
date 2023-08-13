import React from 'react'
import SkillCard from '../components/skill-tile'

// make a component that takes in props
const Skills = () => {
  return (
    <div id='skills' className='pb-10 mt-16 h-screen'>
      <h3 className='text-dim-blue'>My Abilities</h3>
      <h2 className='text-3xl text-highlight-font'>Skills </h2>
      <div className='flex flex-col justify-center items-center'>
        <ul className='grid grid-cols-[repeat(4,_100px)] md:gap-5 place-items-center my-10 mx-10'>
          <li className='h-fit'><SkillCard hover="Dart" imageUrl="/skills/dart.png" /></li>
          <li className='h-fit'><SkillCard hover="HTML" imageUrl="/skills/html5.png" /></li>
          <li className='h-fit'><SkillCard hover="CSS" imageUrl="/skills/css3.png" /></li>
          <li className='h-fit'><SkillCard hover="JavaScript" imageUrl="/skills/js.png" /></li>
        </ul>
        <ul className='grid grid-cols-2 mx-10 place-items-center mb-10'>
          <li className='h-fill'><SkillCard hover="Linux" imageUrl="/skills/linux.png" /></li>
          <li className='h-fill'><SkillCard hover="Bash" imageUrl="/skills/bash.png" /></li>
        </ul>
        <h3 className='text-dim-blue'>Familiar with</h3>
        <ul className='grid grid-cols-3 md:grid-cols-6 mt-5 mb-10 mx-10 gap-5 place-items-center'>
          <li className='h-fill'><SkillCard hover="Python" imageUrl="/skills/python.png" /></li>
          <li className='h-fill'><SkillCard hover="Java" imageUrl="/skills/java.png" /></li>
          <li className='h-fill'><SkillCard hover="MySQL" imageUrl="/skills/mysql.png" /></li>
          <li className='h-fill'><SkillCard hover="C" imageUrl="/skills/c.png" /></li>
          <li className='h-fill'><SkillCard hover="C++" imageUrl="/skills/cplusplus.png" /></li>
          <li className='h-fit'><SkillCard hover="C#" imageUrl="/skills/csharp.png" /></li>
        </ul>
        <h3 className='text-dim-blue'>Frameworks & Software</h3>
        <ul className='grid grid-cols-3 mt-5 mb-10 mx-10 gap-5 place-items-center'>
          <li className='h-auto'><SkillCard auto={true} hover="Unity" imageUrl="/skills/unity.png" /></li>
          <li className='h-auto'><SkillCard auto={true} hover="Flutter" imageUrl="/skills/flutter.png" /></li>
          <li className='h-auto'><SkillCard auto={true} hover="Blender" imageUrl="/skills/blender.png" /></li>
        </ul>
        <h3 className='text-dim-blue'>Studying</h3>
        <ul className='grid grid-cols-2 mt-5 mb-10 mx-10 gap-5 place-items-center'>
          <li className='h-auto'><SkillCard hover="Rust" imageUrl="/skills/rust.png" /></li>
          <li className='h-auto'><SkillCard hover="React" imageUrl="/skills/react.png" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
