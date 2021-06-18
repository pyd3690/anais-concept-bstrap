import React from 'react';
import Link from 'next/link';
import {Badge, Image, Button} from 'react-bootstrap'
import styles from './Product.module.css'
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment';

const Product = (props) => {
    const product_data = props.product
    const price = (product_data.price === undefined || product_data.price === null) ? ' ---' : ' ' + product_data.price.toString() + " FCFA";
    console.log(price);
    return (
        <div className={styles.container}>
            <Link href="/store" passHref>
                <a>
                    <h4 className={styles.sectionCall}>&#60; Retour</h4>
                </a>
            </Link>
            <div ><Image src={product_data.image} fluid className={styles.cover}/></div>
            <h3 className={styles.sectionTitle}>
                <ReactMarkdown>{product_data.name}</ReactMarkdown> 
            </h3>                
            <Link href="#cart">
                <h3 style={{cursor: 'pointer'}}>
                    <Badge variant="secondary">{product_data.category}</Badge>
                </h3>
            </Link>
            <div className={styles.content}>
                Prix: {price} 
            </div>
            <div className={styles.contentDesc}>
                <h4>Description:</h4>
                <ReactMarkdown>{"" + product_data.description}</ReactMarkdown>
            </div>
            <Link href="#cart">
                <Button variant="warning" style={{backgroundColor: '#F2CF63'}}>Ajouter Au Panier</Button>
            </Link>
        </div>
    )
}

export default Product