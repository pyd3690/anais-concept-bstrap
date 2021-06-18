import React from 'react';
import Link from 'next/link';
import {Button, CardDeck, Card} from 'react-bootstrap'
import styles from './CardRow.module.css'
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";


const CardRowSection = (props) => {
    const card_data = props.cards
    //console.log(card_data)
    const card_items = card_data.map((card) =>
    <Card className={styles.cardContainer} key={card.image}>
        <Card.Img variant="top" src={card.image} className={styles.cardImg}/>
        <Card.Body>
        <Card.Title className={styles.cardTitle}>
            <ReactMarkdown>{card.title}</ReactMarkdown>
        </Card.Title>
        <Card.Text className={styles.cardContent}>
            <ReactMarkdown>{card.content}</ReactMarkdown>
        </Card.Text>
        <Link href={"/posts/"+card.id}>
            <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Lire &#62;</Button>
        </Link>
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
            <h2 className={styles.sectionTitle}> Nos Derniers Posts</h2>
            <Link href="/blog" passHref>
                <a>
                    <h4 className={styles.sectionCall}>Decouvrez notre Blog</h4>
                </a>
            </Link>
            <CardDeck>
                {card_items}
            </CardDeck> 
        </div>
            
        </>
    )
}

export default CardRowSection