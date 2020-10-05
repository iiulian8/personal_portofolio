import React, { useEffect } from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Nav() {

  const [checked, setCheck] = useState(false);
  const [width, setWindowSize] = useState(undefined);
 

  function handleResize() {
    setWindowSize(prev => window.innerWidth);
  }

  useEffect(() => {
    if (width > 768){
    handleResize();
    }
  },[width])

  function handleCheck() {
      setCheck(prev => !prev);

  }

  window.addEventListener('resize', handleResize);

  return (
    <nav id = {(checked ? "nav-envelop" : 'navbar')} className>
      <input type="checkbox" checked={checked} onClick={handleCheck} id="hamburger-check"></input>
      <label htmlFor="hamburger-check" className="hamburger-button">
        <div className="hamburger-line top"></div>
        <div className="hamburger-line middle"></div>
        <div className="hamburger-line bottom"></div>
      </label>
      <div className="nav-links">
        <a className="nav-elm" onClick={handleCheck} href="#main-logo">ABOUT</a>
        <a className="nav-elm" onClick={handleCheck} href="#projects-grid">WORK</a>
        <a className="nav-elm" onClick={handleCheck} href="#contact-container">CONTACT</a>
      </div>
    </nav>
  )

}

export default Nav














    





























