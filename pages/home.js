import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HomePage() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Anais Concept</title>
          <meta name="description" content="A vos risques et plaisirs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="container-lg" style={{overflow: 'hidden'}} id="container">
          <MenuBar itemNumber={0} />
          <HeroSection slides_data={featured_data} topPicture={topPicture_data} bottomPicture={bottomPicture_data}/>
          <div style={{height: "300px"}}></div>
          <Footer />
        </main>      
      </div>
    )
  }
  