import React from 'react';
import { useState, useEffect } from 'react';
import './Styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, NavLink } from "react-bootstrap";


function Nav() {

    const [width, changeWidth] = useState(window.innerWidth);

    function handleResize() {
        changeWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);


    function setHamburger() {
        if (width < 1080) {
            return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            )

        } else {
            return (
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