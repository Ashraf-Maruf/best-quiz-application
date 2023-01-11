import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container fluid>                
                <Navbar.Brand><Link to='/'>Best Quiz Application</Link></Navbar.Brand>                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to='/' className={({isActive}) => !isActive ? 'active' : undefined }>Home</NavLink>                      
                        <NavLink to='topics'>Topics</NavLink>                     
                        <NavLink to='statistics'>Statistics</NavLink>                      
                        <NavLink to='blog'>Blog</NavLink>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
