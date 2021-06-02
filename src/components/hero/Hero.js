import React from 'react';
import Link from 'next/link';
import {Image, Container, Row, Col, Card} from 'react-bootstrap'
import styles from './Hero.module.css'
import BannerCarousel from '../carousel/Carousel.js'

const HeroSection = (props) => {
    return (
        <>
            <div className="d-flex flex-wrap" style={{width: '100%'}}>
                <div className={styles.carousel}>
                    <BannerCarousel slides={props.slides_data} />
                </div>
                <div className={styles.heroRightCol}>
                    <div className={styles.RightPicTop}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={props.topPicture.src} alt={props.topPicture.alt} />
                        <Card.ImgOverlay>
                            <Card.Title>{props.topPicture.title}</Card.Title>
                            <Card.Text>
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
                        style={{width: '100%', height: '100%', backgroundColor:'goldenrod'}}
                    >
                        <Card.Body>
                        <Card.Title className={styles.bottomPictureTitle}>{props.bottomPicture.title} </Card.Title>
                        {
                            props.bottomPicture.list.map((list_item) =>
                            <Card.Text className={styles.bottomPictureText}>
                            {list_item}
                            </Card.Text>
                            )}
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection