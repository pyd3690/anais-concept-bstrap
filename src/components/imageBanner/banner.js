import React from 'react';
import Link from 'next/link';
import {Card, Container, Jumbotron} from 'react-bootstrap'
import styles from './banner.module.css'
import ReactMarkdown from "react-markdown";

const BannerSection = (props) => {
    //console.log(props.data.image);
    return (
        <div className={styles.section}>        
            <Card className="text-white">
                <Card.Img src={props.data.image} alt="Card image" height="100%" className="img-fluid"/>
                <Card.ImgOverlay >
                    <Card.Title className={styles.cardtext}>
                    <ReactMarkdown>{props.data.caption}</ReactMarkdown> 
                    </Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default BannerSection