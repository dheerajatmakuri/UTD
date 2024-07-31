import React, { useEffect, useState } from 'react';
import './Navbar.css';
import utd from '../../assets/logobanner.png';
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={utd} alt="" className='logo' />
      <ul>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Program</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='campus' smooth={true} offset={-220} duration={500}>Campus</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-200} duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon'/>
    </nav>
  );
};

export default Navbar;
