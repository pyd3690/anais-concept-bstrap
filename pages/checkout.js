import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import CheckoutContent from '../src/components/checkout/CheckoutContent.js'


export default function CheckoutPage({ showEvent, eventTitle}) {
  //console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - Checkout</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  style={{overflow: 'hidden'}} id="container">
        <MenuBar itemNumber={0} showEvent= {showEvent} eventTitle={eventTitle}/>        
        <CheckoutContent />
        <div style={{height: "300px"}}></div>
        <Footer />
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const events = await res_event.json()
  const showEvent = events.length === 0 ?'none':'inline';
  const eventTitle = events.length === 0 ? "No Event": events[0].name;
  return {
    props: {
      showEvent,
      eventTitle,
    },
    revalidate: 10,
  }
}
