// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import logo from '../../assets/logo.png'
// import {link} from "react-scroll"

// const Navbar = () => {
  
//   const [sticky, setSticky] = useState(false);

//   useEffect(()=>{
//     window.addEventListener('scroll', ()=>{
//       window.scrollY > 50 ? setSticky(true) : setSticky(false)


//     })
//   }, []);


//    return (
//     <nav className={`container ${sticky? 'dark-nav' : ''}`}>
//       <img src={logo} alt="" className="logo"/>
//       <ul>
//         <li><link to="hero"  smooth={true} offset={50} duration={500}   >Home</link></li>
//         <li><link to="program" smooth={true} offset={0} duration={500}  >Program</link></li>
//         <li><link to="about" smooth={true} offset={0} duration={500}  >About US</link></li>
//         <li><link to="campus" smooth={true} offset={0} duration={500}  >Campus</link></li>
//         <li><link to="testimonial" smooth={true} offset={0} duration={500}  >Testimonials</link></li>
//         <li><link to="program" smooth={true} offset={0} duration={500} className="btn">Contact US</link></li>
//       </ul>
//     </nav>
//    );
// }

// export default Navbar;


// 

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      
      <ul className={mobileMenu ? "mobile-menu" : "hide-menu"}>
        <li><Link to="hero" smooth={true} offset={-50} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>

      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
