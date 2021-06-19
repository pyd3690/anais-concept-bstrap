import React from 'react';
import Link from 'next/link';
import {Card, Image} from 'react-bootstrap'
import styles from './StandDisplay.module.css'
import CategoryListing from '../categoryEventList/CategoryList.js'
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment';


const StandDisplay = (props) => {
    const categories = props.categories
    const stand = props.stand
    return (
        <div className={styles.container}>
            <Link href="/event" passHref>
                <a>
                    <h4 className={styles.sectionCall}>&#60; Tous les Stands</h4>
                </a>
            </Link>
            <h2 className={styles.sectionTitle}>
                <ReactMarkdown>{stand.name}</ReactMarkdown> 
            </h2>
            <div className={styles.content}>
                <ReactMarkdown>{stand.description}</ReactMarkdown>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>    
                <Image src={stand.image} fluid className={styles.cover}/>
            </div>
            
           
            <CategoryListing categories={categories} />
        </div>
    )
}

export default StandDisplay