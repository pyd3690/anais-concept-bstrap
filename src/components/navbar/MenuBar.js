import React, {useState, useContext} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {Navbar, Nav, Button, Badge} from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MenuBar.module.css'
    import AppContext from "../../../context/AppContext";


const MenuBar = (props) => {
    const router = useRouter()
    const currentRoute = router.asPath
    const appContext = useContext(AppContext);

    return (
        <>
            <Navbar className={styles.menuContainer} collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' style={{borderRadius: '0px', width: '100%'}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-auto" /> 
                <Nav id ="Menutitle">
                    <Nav.Link href="/" style={{color: "wheat", marginLeft: "5px"}}>Anais Concept</Nav.Link>
                </Nav>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Navbar.Brand href="/" id = "logo">
                        <img
                            src="/icons/anais-logo2.png"
                            width="auto"
                            height="50px"
                            className="d-inline-block align-center"
                            alt="Anais logo"
                            
                        />                
                    </Navbar.Brand>
                    <Nav activeKey={currentRoute}>
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
                        <Link href="/event" passHref >
                            <Nav.Link style={{display: props.showEvent, fontWeight: 'bold'}} >
                                {props.eventTitle}
                                <Badge variant="warning" style={{marginLeft:'5px'}}>Hot</Badge>
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>       
                 
                <Navbar.Brand href="/cart" className="ml-auto mr-0" id="panier">
                    <img
                        src="/icons/bag.png"
                        width="25px"
                        height="25px"
                        className="d-inline-block align-top"
                        alt="Anais logo"
                    />      
                    <a className={styles.cart}><Badge variant="dark" className="d-inline-block align-top">{appContext.cart.total} FCFA</Badge></a>          
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default MenuBar