import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
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

      <div id="about">
        <h1>Hello, I am Iulian!</h1>
        <h1>I make websites.</h1>
        <img src="" ></img>
      </div>

    </div>
  );
}

export default App;
