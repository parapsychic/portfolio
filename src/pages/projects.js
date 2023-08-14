import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Card from '../components/card'

const Projects = () => {



  return (
    <div id='projects' className='snap-center pb-10 flex flex-col items-center justify-center mt-16 mb-10 h-fill target:scroll-mt-56 '>
      <h3 className='text-dim-blue'>Projects</h3>
      <h2 className='text-3xl'>My Port<span className='text-highlight-font '>folio</span></h2>

      <Link to="https://www.github.com/parapsychic" target={"_blank"}>
        <button className="mx-auto my-10 flex gap-3 justify-center align-middle border border-white hover:border-highlight-font hover:text-highlight-font text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300" >
          <BsGithub className='h-auto' /> <p>Find Me on Github</p>
        </button>
      </Link>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl grid- gap-5 place-items-center mb-10'>
        <li><Card project={{
          title: "Adithi Visitorbook",
          imgUrl: '/project-images/adithi.jpg',
          desc: "Deployed on board the first indigeneous Aircraft Carrier IAC-1 Vikrant"
        }
        }
          onClick="https://www.ajce.in/cse/insvikrant.html" /></li>
        <li><Card project={{
          title: "FreeCodeCamp Projects",
          imgUrl: '/project-images/freecodecamp.jpg',
          desc: "Completed all projects to earn Responsive Web Design Certification"
        }
        } onClick="https://freecodecamp.org/certification/parapsychic/responsive-web-design" />
        </li>
        <li><Card project={{
          title: "UdanPani",
          imgUrl: '/project-images/udanpani.jpg',
          desc: "Part-time works and gigs app built with Flutter and Firebase"
        }
        } onClick="https://github.com/udanpani/udanpani" />
        </li>
        <li><Card project={{
          title: "Malayalam TTS using Tacotron2 and WaveGlow",
          imgUrl: '/project-images/malayalam.jpg',
          desc: "A Malayalam Text-to-Speech model built on top of Tacotron2 pretrained model."
        }
        } onClick="https://github.com/parapsychic/malayalam-tacotron2" />
        </li>

        <li><Card project={{
          title: "2lazy4arch",
          imgUrl: '/project-images/archinstall.jpg',
          desc: "An Arch installer and ricing script written in bash that installs and sets up Arch Linux using my dot files."
        }
        } onClick="https://github.com/parapsychic/2lazy4arch" />
        </li>
      </ul>
    </div>
  )
}

export default Projects
