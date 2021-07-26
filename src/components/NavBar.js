import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {
    render() {

        const scrollToHome = () => {
            document.querySelector('#home').scrollIntoView()
        }

        const scrollToProj = () => {
            document.querySelector('#projects').scrollIntoView()
        }

        const scrollToContact = () => {
            document.querySelector('#contact').scrollIntoView()
        }

        return (
            <Navbar
                expand="md"
                className="justify-content-end"
            >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={scrollToHome}  >
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={scrollToProj}>
                            Projects
                        </Nav.Link>
                        <Nav.Link onClick={scrollToContact}>
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
