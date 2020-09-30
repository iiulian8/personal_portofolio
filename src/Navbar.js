import React from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Nav() {

  const [checked, setCheck] = useState(false);

  function handleCheck() {
    setCheck(prev => !prev);
  }

  return (
    <nav>
      <input type="checkbox" checked={checked} onClick={handleCheck} id="hamburger-check"></input>
      <label htmlFor="hamburger-check" className="hamburger-button">
        <div className="hamburger-line top"></div>
        <div className="hamburger-line middle"></div>
        <div className="hamburger-line bottom"></div>
      </label>
      <div className="nav-links">
        <a className="nav-elm" onClick={handleCheck} href="#index.html">HOME</a>
        <a className="nav-elm" onClick={handleCheck} href="#work.html">WORK</a>
        <a className="nav-elm" onClick={handleCheck} href="#about.html">ABOUT</a>
        <a className="nav-elm" onClick={handleCheck} href="#contact.html">CONTACT</a>
      </div>
    </nav>
  )

}

export default Nav