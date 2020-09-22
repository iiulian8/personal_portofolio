import React from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



function Nav() {
  return (

    <nav id = "navbar">
      <li className = "nav-elm" href = "#">About</li>
      <li className = "nav-elm" href = "#">Technologies</li>
      <li className = "nav-elm" href = "#">Projects</li>
      <li className = "nav-elm" href = "#">Contact</li>
    </nav>
  )

}

export default Nav