import React from 'react';
import Link from 'next/link';
import {Button, CardDeck, Card, CardGroup} from 'react-bootstrap'
import styles from './ArticleList.module.css'
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


const ArticleListing = (props) => {
    const card_data = props.articles
    //console.log(card_data)
    const card_items = card_data.map((card) =>
    <Card className={styles.cardContainer} key={card.image} >
        <Card.Img variant="top" src={card.image} className={styles.cardImg}/>
        <Card.Body>
        <Card.Title className={styles.cardTitle}>
            <ReactMarkdown>{card.title}</ReactMarkdown>
        </Card.Title>
        <Card.Text className={styles.cardContent}>
            <ReactMarkdown>{card.content}</ReactMarkdown>
        </Card.Text>
        <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Lire &#62;</Button>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">
            <Moment fromNow>
            {card.lastUpdate}
            </Moment>
            
        </small>
        </Card.Footer>
        
    </Card>
    );
    return (
        <>
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}> Nos Posts</h2>
            <div className={styles.cardBox}>
                {card_items}
            </div> 
        </div>
            
        </>
    )
}

export default ArticleListing