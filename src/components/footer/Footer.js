import React from 'react';
import Link from 'next/link';
import {Navbar, Nav, Button, Badge} from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='bottom' className="d-flex justify-content-center">
                <Nav className ="footerlink">
                    <Nav.Link href="#home" style={{color: "wheat", marginLeft: "5px"}}>Anais Concept &#169; 2021</Nav.Link>
                </Nav>
                <Navbar.Brand href="#home" >
                    <img
                        src="/icons/facebook.png"
                        width="auto"
                        height="25px"
                        className="d-inline-block align-center"
                        alt="Anais logo"
                        
                    />                
                </Navbar.Brand>
                <Navbar.Brand href="#home" >
                    <img
                        src="/icons/whatsapp.png"
                        width="auto"
                        height="25px"
                        className="d-inline-block align-center"
                        alt="Anais logo"
                        
                    />                
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer