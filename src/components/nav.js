import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);


  const scrollWithOffset = (el, yOffset = -80) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }


  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      console.log(visibleSection)
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className=" flex lg:flex-col justify-center font-normal text-white my-5 h-screen fixed ">
      <ul className="gap-3 text-left text-xl font-bold mx-10">
        <li className={activeSection === 'about-main' ? 'text-highlight-font' : ''}><HashLink smooth to="/#about" className={`hover:text-highlight-font`}>Me      </HashLink></li>
        <li className={activeSection === 'projects-main' ? 'text-highlight-font' : ''}><HashLink smooth scroll={el => scrollWithOffset(el)} to="/#projects" className={` hover:text-highlight-font`}>Work  </HashLink></li>
        <li className={activeSection === 'skills-main' ? 'text-highlight-font' : ''}><HashLink smooth scroll={el => scrollWithOffset(el, -30)} to="/#skills" className={`hover:text-highlight-font`}>Skills   </HashLink></li>
        <li className={activeSection === 'linux-main' ? 'text-highlight-font' : ''}><HashLink smooth to="/#linux" className={`hover:text-highlight-font`}>Linux    </HashLink></li>
        <li className={activeSection === 'contact-main' ? 'text-highlight-font' : ''}><HashLink smooth to="/#contact" className={`hover:text-highlight-font`}>Contact  </HashLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
