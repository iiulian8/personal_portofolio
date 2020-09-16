import React from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink } from "react-bootstrap";

function Nav() {

    return (
        <Navbar bg="navbar" textAlign="right" className="justify-content-end">
            <NavLink className="nav-elm" href="#home">About</NavLink>
            <NavLink className="nav-elm" href="#home">Technologies</NavLink>
            <NavLink className="nav-elm" href="#home">Projects</NavLink>
            <NavLink className="nav-elm" id="last-nav-elm" href="#home">Contact</NavLink>
        </Navbar>
    )
}

export default Nav;