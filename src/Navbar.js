import React from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {

  return (
    <nav>
      <input type="checkbox" id="hamburger-check"></input>
      <label htmlFor="hamburger-check" className="hamburger-button">
        <div className="hamburger-line top"></div>
        <div className="hamburger-line middle"></div>
        <div className="hamburger-line bottom"></div>
      </label>
      <div className="nav-links">
        <a className="nav-elm" href="#index.html">HOME</a>
        <a className="nav-elm" href="#work.html">WORK</a>
        <a className="nav-elm" href="#about.html">ABOUT</a>
        <a className="nav-elm" href="#contact.html">CONTACT</a>
      </div>
    </nav>
  )

}

export default Nav