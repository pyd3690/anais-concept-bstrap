import React from 'react';
import Link from 'next/link';
import {Card} from 'react-bootstrap'
import styles from './Hero.module.css'
import BannerCarousel from '../carousel/Carousel.js'
import ReactMarkdown from "react-markdown";

const HeroSection = (props) => {
    return (
        <>
            <div className="d-flex flex-wrap" style={{width: '100%', marginTop: '0px'}}>
                <div className={styles.carousel}>
                    <BannerCarousel slides={props.slides_data} />
                </div>
                <div className={styles.heroRightCol}>
                    <div className={styles.RightPicTop}>
                    <Card className="bg-dark text-white">
                        <Card.Img className="img-fluid" src={props.topPicture.src} alt={props.topPicture.alt} />
                        <Card.ImgOverlay className={styles.cardtext}>
                            <Card.Title className={styles.cardtitlewrap}>{props.topPicture.title}</Card.Title>
                            <Card.Text className={styles.cardtextwrap}>
                            {props.topPicture.caption}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </div>
                    <div className={styles.RightPicBottom}>
                    <Card
                        text="light"
                        style={{ width: '18rem' }}
                        className="mb-2"
                        style={{width: '100%', height: '100%', backgroundColor:'#C2A33E'}}
                    >
                        <Card.Body>
                            <Card.Title className={styles.bottomPictureTitle}>{props.bottomPicture.title} </Card.Title>
                            <Card.Text >
                                <div className={styles.markdown}>
                                <ReactMarkdown>{props.bottomPicture.description}</ReactMarkdown> 
                                </div>
                                 
                            </Card.Text>                                                  
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection