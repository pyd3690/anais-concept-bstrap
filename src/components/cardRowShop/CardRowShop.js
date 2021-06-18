import React from 'react';
import Link from 'next/link';
import {CardDeck, Card, Button, Badge} from 'react-bootstrap'
import styles from './CardRowShop.module.css'
import ReactMarkdown from "react-markdown";


const CardRowShopSection = (props) => {
    const card_data = props.cards
    const card_items = card_data.map((card) =>
    <Card key={card.image} style={{borderRadius: '15px'}}>
        <Card.Img variant="top" src={card.image} className={styles.cardImg}/>
        <Card.Body>
        <Card.Title className={styles.cardTitle}>
            <ReactMarkdown>{card.name  + ((card.price === undefined || card.price === null) ? ' ' : " - " + card.price.toString() + " FCFA")}</ReactMarkdown>
        </Card.Title>
        <Badge pill variant="dark">
            {card.category}
        </Badge>
        <Card.Text className={styles.cardContent}>
            <ReactMarkdown>{card.description}</ReactMarkdown>
        </Card.Text>
        <Link href={"/products/"+card.id}>
            <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Voir</Button>
        </Link>
        </Card.Body>
    </Card>
    );
    return (
        <>
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Du Nouveau dans notre Boutique</h2>
            <Link href="/store" passHref>
                <a>
                    <h4 className={styles.sectionCall}>Faites un tour dans notre Boutique</h4>
                </a>
            </Link>
            
            <CardDeck>
                {card_items}
            </CardDeck> 
        </div>
            
        </>
    )
}

export default CardRowShopSection