import React from 'react';
import Link from 'next/link';
import {Card, Image} from 'react-bootstrap'
import styles from './CategoryDisplay.module.css'
import ProductListing from '../productEventList/ProductList.js'
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment';


const CategoryDisplay = (props) => {
    const products = props.products
    const category = props.category
    const stand = props.stand
    return (
        <div className={styles.container}>
            <Link href={"/stands/" + stand.toString()} passHref>
                <a>
                    <h4 className={styles.sectionCall}>&#60; Toutes les categories</h4>
                </a>
            </Link>
            <h2 className={styles.sectionTitle}>
                <ReactMarkdown>{category.name}</ReactMarkdown> 
            </h2>
            <div className={styles.content}>
                <ReactMarkdown>{category.description}</ReactMarkdown>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>    
                <Image src={category.image} fluid className={styles.cover}/>
            </div>
            <hr/>
           
            <ProductListing products={products} />
        </div>
    )
}

export default CategoryDisplay