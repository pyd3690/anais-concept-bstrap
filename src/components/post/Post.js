import React from 'react';
import Link from 'next/link';
import {Card, Image} from 'react-bootstrap'
import styles from './Post.module.css'
import BannerCarousel from '../carousel/Carousel.js'
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment';

const Post = (props) => {
    const post_data = props.article
    return (
        <div className={styles.container}>
            <Link href="/blog" passHref>
                <a>
                    <h4 className={styles.sectionCall}>&#60; Tous les Posts</h4>
                </a>
            </Link>
            <h2 className={styles.sectionTitle}>
                <ReactMarkdown>{post_data.title}</ReactMarkdown> 
            </h2>
            <div><Image src={post_data.cover} fluid className={styles.cover}/></div>
            <Moment format="D MMM YYYY" withTitle className={styles.moment}>
                {post_data.lastUpdate}
            </Moment>
            <div className={styles.content}>
                <ReactMarkdown>{post_data.content}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Post