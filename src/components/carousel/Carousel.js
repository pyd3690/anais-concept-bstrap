import React from 'react';
import Link from 'next/link';
import {Carousel} from 'react-bootstrap'
import styles from './Carousel.module.css'


const BannerCarousel = (props) => {
    const slides_data = props.slides
    const carousel_items = slides_data.map((slide) =>
    <Carousel.Item >
        <img
        //className="d-block w-100"
        //className="img-fluid"
        className={styles.carouselImage}
        width="100%"
        src={slide.image}
        alt={slide.imageAlt}
        height="400px"
        />
        {(slide.title != "none" && slide.label != "none") && <Carousel.Caption className={styles.carousel_captions}>
            <h3 className={styles.carouseltitle}>{slide.title}</h3>
            <p className={styles.cardtextwrap}>{slide.label}</p>
        </Carousel.Caption>}
  </Carousel.Item>
  );
    return (
        <>
            <Carousel >
                {carousel_items}
            </Carousel>
        </>
    )
}

export default BannerCarousel