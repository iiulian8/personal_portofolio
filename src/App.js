import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink } from "react-bootstrap";
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
            <a href="#">Hello, I am Iulian.</a>
            <h1>I make websites.</h1>
            <p1>I am a passionate web developer based in UK with a desire to make beautiful and functional websites.</p1>
          </div>
          <div id="title-decoration">
            <hr></hr>
          </div>

          <div id="worktitle">
            <h1>My work</h1>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
