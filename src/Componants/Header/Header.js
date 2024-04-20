import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark ">
                <Container>
                    <Navbar.Brand href="#home" className='text-light'>Flipcart-dev</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to='/' className='nav-link text-light' href="">Home</Link>
                            <Link to="/cart" className='nav-link text-light' href=""><FaCartArrowDown className='text-light' /></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header