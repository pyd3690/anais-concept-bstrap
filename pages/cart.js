import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import CartContent from '../src/components/cart/CartContent.js'


export default function CartPage({ showEvent, eventTitle}) {
  //console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - Cart</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  style={{overflow: 'hidden'}} id="container">
        <MenuBar itemNumber={0} showEvent= {showEvent} eventTitle={eventTitle}/>        
        <CartContent />
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
