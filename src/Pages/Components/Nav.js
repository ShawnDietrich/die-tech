import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../Pictures/logo512.png'
const Navigation = () => {
    return (
        <>
            <Navbar style={{backgroundColor: '#342626'}} variant="dark" expand='lg' sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Dietrich Web Services logo"
                            src={logo}
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/book">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation