import React from 'react';
import { useState, useEffect } from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink } from "react-bootstrap";

function Nav() {

    const [width, changeWidth] = useState(window.innerWidth);

    function handleResize() {
        changeWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);


    function setHamburger() {
        if (width <= 1080) {
            return (
                <Navbar bg="navbar" textAlign="right" className="justify-content-end">
                    <NavLink className="nav-elm" href="#home">About</NavLink>
                    <NavLink className="nav-elm" href="#home">Technologies</NavLink>
                    <NavLink className="nav-elm" href="#home">Projects</NavLink>
                    <NavLink className="nav-elm" id="last-nav-elm" href="#home">Contact</NavLink>
                </Navbar>
            )

        } else {
            return(
                <Navbar bg="navbar" textAlign="right" className="justify-content-end">
                <NavLink className="nav-elm" href="#home">About</NavLink>
                <NavLink className="nav-elm" href="#home">Technologies</NavLink>
                <NavLink className="nav-elm" href="#home">Projects</NavLink>
                <NavLink className="nav-elm" id="last-nav-elm" href="#home">Contact</NavLink>
            </Navbar>
            )
        }
    }


    useEffect(() => {
        console.log(width);
    }, [width])


    return (
        <div>
            {setHamburger()}
        </div>
    )
}

export default Nav;