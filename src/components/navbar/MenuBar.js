import React from 'react';
import Link from 'next/link';
import {Navbar, Nav, Button, Badge} from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import '.../styles/Home.module.css'

const MenuBar = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' style={{borderRadius: '5px', width: '100%'}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-auto"/> 
                <Nav id ="Menutitle">
                    <Nav.Link href="#home" style={{color: "wheat", marginLeft: "5px"}}>Anais Concept</Nav.Link>
                </Nav>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Navbar.Brand href="#home" id = "logo">
                        <img
                            src="/icons/anais-logo2.png"
                            width="auto"
                            height="50px"
                            className="d-inline-block align-center"
                            alt="Anais logo"
                            
                        />                
                    </Navbar.Brand>
                    <Nav>
                        <Link href="/" passHref>
                            <Nav.Link>Accueil</Nav.Link>
                        </Link>
                        <Link href="/store" passHref>
                            <Nav.Link>Boutique</Nav.Link>
                        </Link>
                        <Link href="/blog" passHref>
                            <Nav.Link>Blog</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>       
                 
                <Navbar.Brand href="#store" className="ml-auto" id="panier">
                    <img
                        src="/icons/bag.png"
                        width="25px"
                        height="25px"
                        className="d-inline-block align-top"
                        alt="Anais logo"
                    />      
                    <Badge variant="dark" className="d-inline-block align-top">{props.itemNumber}</Badge>          
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default MenuBar