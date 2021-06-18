import React from 'react';
import Link from 'next/link';
import {InputGroup, Dropdown, Form, Button, FormControl, DropdownButton, ListGroup} from 'react-bootstrap'
import styles from './ContactSection.module.css'
import ReactMarkdown from "react-markdown";


const ContactSection = (props) => {
    
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}> Laissez Nous Un Message et Nous vous recontacterons</h2>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Nom & Prenoms"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Email"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Telephone"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <DropdownButton
                as={InputGroup.Prepend}
                variant="warning"
                title="Comment Vous Assister "
                id="input-group-dropdown-1"
                >
                <Dropdown.Item href="#">Requete/ Info</Dropdown.Item>
                <Dropdown.Item href="#">Suggestions</Dropdown.Item>
                <Dropdown.Item href="#">Rendez Vous</Dropdown.Item>
                <Dropdown.Item href="#">Autre</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Objet</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="L'objet de votre message"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="warning" type="submit" style={{marginBottom:'20px'}}>
                Envoyer
            </Button>
            <br /><br />
            <h2 className={styles.sectionTitle}> Autre Contact</h2>
            <ListGroup>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <img className={styles.iconC}
                            src="/icons/company.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>Anais Concept</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <img className={styles.iconC}
                            src="/icons/address.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>01 BP 2930 Lomé, Lomé</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <img className={styles.iconC}
                            src="/icons/phone.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>+228 90 12 31 48</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <img className={styles.iconC}
                            src="/icons/whatsapp.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#whatsapp"><div className={styles.listItemContent}>+228 90 12 31 48</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <img className={styles.iconC}
                            src="/icons/facebook.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                        
                        /> 
                    </div>
                    <Link href="https://www.facebook.com/anaisconceptbiz/" target="_blank"><div className={styles.listItemContent}>https://www.facebook.com/anaisconceptbiz/</div></Link>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listItem}>
                    <div style={{}}>
                        <img className={styles.iconC}
                            src="/icons/email.png"
                            width="auto"
                            height="20px"
                            className="d-inline-block align-left"
                            alt="Facebook Profile"                            
                        /> 
                    </div>
                    <Link href="#"><div className={styles.listItemContent}>infos@anaisconcept.biz</div></Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ContactSection