import React from 'react'
import './navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log("hey")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    <div>
      <ul className = "navbar">
        <li onClick={() => scrollToSection('about-section')}>About</li>
        <li onClick={() => scrollToSection('projects-section')}>Projects</li>
        <li onClick={() => scrollToSection('footer-section')}>Contact</li>
     </ul>
    </div>
  )
}
export default Navbar