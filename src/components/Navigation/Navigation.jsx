import '../Navigation/Navigation.css';
import gsap from "gsap";
import { useEffect, useState } from 'react';

const Navigation = () => {
  useEffect(() => {
    if (window.innerWidth > 760) {
      gsap.fromTo("#navigation", { x: -100, ease: "power2.out"}, { x: 10, opacity: 0.4, duration: 1.8, delay: 2  });
    } else {
      gsap.to("#navigation", { x: -100 });
    }
  }, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        gsap.to("#navigation", { x: -100, duration: 1});
      } else {
        gsap.to("#navigation", { x: 10, opacity: 0.4, duration: 1 });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);







  //if hovered on, set setIsHovered to true and change opacity
  const handleMouseEnter = () => {

    gsap.to("#navigation", { opacity: 1 });
  };
  //if leaving then, set setIsHovered to false and change opacity
  const handleMouseLeave = () => {

    gsap.to("#navigation", { opacity: 0.4 });
  };



  const changeBorderColor = (color) => {
    gsap.to("#navigation", { borderColor: color });
  };

  return (
    <nav id='navigation' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a className='anchor' href="#Education" onMouseOver={() => changeBorderColor("#bedde8")} onMouseOut={() => changeBorderColor("rgba(205, 205, 205, 0.702)")}>
        <svg className="option_svg1" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px">
          <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
        </svg>
      </a>

      <a className='anchor' href="#Projects" onMouseOver={() => changeBorderColor("#e9adc4")} onMouseOut={() => changeBorderColor("rgba(205, 205, 205, 0.702)")}>
        <svg className="option_svg2" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px">
          <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm0-80h400v-400H120v400Zm560 80v-560h80v560h-80Zm160 0v-560h80v560h-80Zm-720-80v-400 400Z"/>
        </svg>
      </a>

      <a className='anchor' href="#" onMouseOver={() => changeBorderColor("#edb563")} onMouseOut={() => changeBorderColor("rgba(205, 205, 205, 0.702)")}>
        <svg className="option_svg3" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px">
          <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z"/>
        </svg>
      </a>

    </nav>
  );
};

export default Navigation;
