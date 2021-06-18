import React from 'react';
import Link from 'next/link';
import {InputGroup, Dropdown, Form, Button, FormControl, DropdownButton} from 'react-bootstrap'
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
                variant="outline-secondary"
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
            <Button variant="warning" type="submit">
                Envoyer
            </Button>
            <br /><br />
        </div>
    )
}

export default ContactSection