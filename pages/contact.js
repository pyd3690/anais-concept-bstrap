import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - Contact</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-md" style={{paddingLeft: 0, paddingRight:0}}>
      <MenuBar itemNumber={0} />
      <div style={{height: "600px"}}></div>
      <Footer />
      </main>      
    </div>
  )
}
