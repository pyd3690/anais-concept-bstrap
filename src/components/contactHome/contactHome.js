import React from 'react';
import Link from 'next/link';
import {Container, Jumbotron} from 'react-bootstrap'
import styles from './contactHome.module.css'


const ContactSection = (props) => {
    return (
        <>
        <Jumbotron fluid className={styles.section}>
            <Container>
                <h2 className={styles.sectionTitle}>Des envies particulieres ou plus conventionelles? Pas de soucis. N'hesitez pas!</h2>
                <p style={{textAlign: 'center'}}>
                Notre Equipe se pliera en quatre (litteralement) pour vous servir
                </p>
                <Link href="/contact" passHref>
                    <a>
                        <h4 className={styles.sectionCall}>Contactez Nous</h4>
                    </a>
                </Link>
            </Container>
        </Jumbotron> 
        </>
    )
}

export default ContactSection