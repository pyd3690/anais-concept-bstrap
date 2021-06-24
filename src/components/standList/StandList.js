import React from 'react';
import Link from 'next/link';
import {Button, CardDeck, Card, CardGroup} from 'react-bootstrap'
import styles from './StandList.module.css'
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

// {"/categories/"+card.id}
const StandListing = (props) => {
    const card_data = props.stands;
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
        <Link href={"/stands/"+card.id}> 
            <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Visiter &#62;</Button>
        </Link>        
        </Card.Body>
    </Card>
    );
    return (
        <>
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}> {props.eventDescription}</h2>
            
            <div className={styles.cardBox}>
                {card_items}
            </div> 
            <div style={{height: "200px"}}></div>
        </div>
            
        </>
    )
}

export default StandListing