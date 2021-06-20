import React from 'react';
import Link from 'next/link';
import {Carousel} from 'react-bootstrap'
import styles from './CarouselCover.module.css'
import ReactMarkdown from "react-markdown";


const CoverCarousel = (props) => {
    const slides_data = props.slides
    const carousel_items = slides_data.map((slide) =>
    <Carousel.Item key={slide.id}>
        <img
        //className="d-block w-100"
        //className="img-fluid"
        className={styles.carouselImage}
        width="100%"
        src={slide.image}
        alt={slide.imageAlt}
        height="400px"
        />
        {(slide.title != "none" || slide.label != "none") && <Carousel.Caption className={styles.carousel_captions}>
            <h3 className={styles.carouseltitle}>
                <ReactMarkdown>{slide.title}</ReactMarkdown> 
                {/*slide.title*/}
            </h3>
            <p className={styles.cardtextwrap}>
                {/* slide.label */}
                <ReactMarkdown>{slide.label}</ReactMarkdown>
            </p>
        </Carousel.Caption>}
  </Carousel.Item>
  );
    return (
        <>
            <Carousel className={styles.carousel}>
                {carousel_items}
            </Carousel>
            <h2 className={styles.sectionTitle}>{props.title}</h2>
        </>
    )
}

export default CoverCarousel