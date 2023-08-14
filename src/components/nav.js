import React from 'react';
import { useLocation  } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const location = useLocation();

  const isActive = (page) =>{
    if(page === location.hash){
      return "text-highlight-font"
    }
  }

  const scrollWithOffset = (el, yOffset=-80) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <nav className=" flex lg:flex-col justify-center font-normal text-white my-5 h-screen fixed ">
      <ul className="gap-3 text-left text-xl font-bold mx-10">
        <li><HashLink smooth to="/#about" className={`${isActive("#about")} hover:text-highlight-font`}>Me      </HashLink></li>
        <li><HashLink smooth scroll={el => scrollWithOffset(el)} to="/#projects" className={`${isActive("#projects")} hover:text-highlight-font`}>Work  </HashLink></li> 
        <li><HashLink smooth scroll={el => scrollWithOffset(el, -30)} to="/#skills" className={`${isActive("#skills")} hover:text-highlight-font`}>Skills   </HashLink></li>
        <li><HashLink smooth to="/#linux" className={`${isActive("#linux")} hover:text-highlight-font`}>Linux    </HashLink></li>
        <li><HashLink smooth to="/#contact" className={`${isActive("#contact")} hover:text-highlight-font`}>Contact  </HashLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
