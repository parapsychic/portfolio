import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isActive = (page) =>{
    console.log(location.pathname)
    if(page === location.pathname){
      return "text-highlight-font"
    }
  }

  return (
    <nav className=" flex lg:flex-col justify-center font-normal text-white my-5 h-screen fixed ">
      <ul className="gap-3 text-left text-xl font-bold mx-10">
        <li><Link smooth to="/about" className={`${isActive("/about")} hover:text-highlight-font`}>Me      </Link></li>
        <li><Link smooth to="/projects" className={`${isActive("/projects")} hover:text-highlight-font`}>Work  </Link></li> 
        <li><Link smooth to="/skills" className={`${isActive("/skill")} hover:text-highlight-font`}>Skills   </Link></li>
        <li><Link smooth to="/linux" className={`${isActive("/linux")} hover:text-highlight-font`}>Linux    </Link></li>
        <li><Link smooth to="/contact" className={`${isActive("/contact")} hover:text-highlight-font`}>Contact  </Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
