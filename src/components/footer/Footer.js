import React from 'react';
import Link from 'next/link';
import {Navbar, Nav, Button, Badge} from 'react-bootstrap'
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='bottom' className="d-flex justify-content-center" style={{borderRadius: '5px', width: '100%'}}>
                <Nav className ={styles.footerlink}>
                    <Nav.Link href="#home" style={{color: "wheat", marginLeft: "5px"}}>Anais Concept &#169; 2021</Nav.Link>
                </Nav>
                <Navbar.Brand href="#home" className={styles.iconC}>
                    <img className={styles.icon}
                        src="/icons/facebook.png"
                        width="auto"
                        height="20px"
                        className="d-inline-block align-left"
                        alt="Facebook Profile"
                        
                    />                
                </Navbar.Brand>
                <Navbar.Brand href="#home" className={styles.iconC}>
                    <img className={styles.icon}
                        src="/icons/whatsapp.png"
                        width="auto"
                        height="20px"
                        className="d-inline-block align-center"
                        alt="Whatsapp Contact"
                        
                    />                
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer