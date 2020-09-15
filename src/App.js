import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, NavLink} from "react-bootstrap";

import './Styles/main.scss';

function App() {
  return (
    <div className="App">

      <Navbar bg="navbar" textAlign="right" className="justify-content-end">
        <NavLink className="nav-elm" href="#home">About</NavLink>
        <NavLink className="nav-elm" href="#home">Projects</NavLink>
        <NavLink className="nav-elm" href="#home">Technologies</NavLink>
        <NavLink className="nav-elm" href="#home">Contact</NavLink>
      </Navbar>

      <div id="main-container">
        <div id="about">
          <div id="title-div">
              <a href = "#">Hello, I am Iulian.</a>
              <h1>I make websites.</h1>
              <p1>I am a passionate web developer with a desire to improve, innovate and use other big corporate words that don't really mean shit.</p1>
            </div>
        </div>

        <img src="" ></img>
      </div>

    </div>
  );
}

export default App;
