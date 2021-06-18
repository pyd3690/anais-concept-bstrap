import React from 'react';
import Link from 'next/link';
import {Button, CardDeck, Card, CardGroup} from 'react-bootstrap'
import styles from './ProductList.module.css'
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

// {"/categories/"+card.id}
const ProductListing = (props) => {
    const card_data = props.products
    //console.log(card_data)
    const card_items = card_data.map((card) =>
    <Card className={styles.cardContainer} key={card.id} >
        <Card.Img variant="top" src={card.image} className={styles.cardImg}/>
        <Card.Body>
        <Card.Title className={styles.cardTitle}>
            <ReactMarkdown>{card.name}</ReactMarkdown>
        </Card.Title>
        {(card.price !== null && card.price !== undefined) &&
            <Card.Text className={styles.cardContent}>
               Prix: {card.price}
            </Card.Text>
        }      
        {(card.description !== null && card.description !== undefined) &&
            <Card.Text className={styles.cardContent}>
                <ReactMarkdown>{card.description}</ReactMarkdown>
            </Card.Text>
        }        
        <Link href="#category"> 
            <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Voir</Button>
        </Link>        
        </Card.Body>
    </Card>
    );
    return (
        <>
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}> Faites Votre Choix</h2>
            <div className={styles.cardBox}>
                {card_items}
            </div> 
        </div>
            
        </>
    )
}

export default ProductListing