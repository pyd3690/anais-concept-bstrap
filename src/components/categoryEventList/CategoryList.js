import React from 'react';
import Link from 'next/link';
import {Button, CardDeck, Card, CardGroup} from 'react-bootstrap'
import styles from './CategoryList.module.css'
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

// {"/categories/"+card.id}
const CatagoryListing = (props) => {
    const card_data = props.categories
    //console.log(card_data)
    const card_items = card_data.map((card) =>
    <Card className={styles.cardContainer} key={card.id} >
        <Card.Img variant="top" src={card.image} className={styles.cardImg}/>
        <Card.Body>
        <Card.Title className={styles.cardTitle}>
            <ReactMarkdown>{card.name}</ReactMarkdown>
        </Card.Title>
        {(card.description !== null && card.description !== undefined) &&
            <Card.Text className={styles.cardContent}>
                <ReactMarkdown>{card.description}</ReactMarkdown>
            </Card.Text>
        }        
        <Link href={"/categories-event/"+card.id}> 
            <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Decouvrir &#62;</Button>
        </Link>        
        </Card.Body>
    </Card>
    );
    return (
        <>
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}> Categories </h2>
            <div className={styles.cardBox}>
                {card_items}
            </div> 
        </div>
            
        </>
    )
}

export default CatagoryListing