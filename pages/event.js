import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import CoverCarousel from '../src/components/carouselCover/CarouselCover.js'
import StandListing from '../src/components/standList/StandList.js'
import StorePage from './store.js'


export default function EventPage({eventTitle, eventDescription, coverSlides, stands, showEvent}) {
  if(eventTitle === 'No Event') {
    return (
      <div className={styles.container}>
      <Head>
        <title>Anais Concept - {eventTitle}</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{overflow: 'hidden'}} id="container">
      <MenuBar itemNumber={0} showEvent = {showEvent}/>
      <h1 className="noEvent">Pas D'evenement actuellement. Restez Connecte pour plus d'info</h1>
      <div style={{height: "600px"}}></div>
      <Footer />
      </main>      
    </div>
    )
  }
  else{
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - {eventTitle}</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{overflow: 'hidden'}} id="container">
      <MenuBar itemNumber={0} showEvent = {showEvent}/>
      <CoverCarousel slides={coverSlides} title={eventTitle}/>
      <StandListing stands={stands} eventDescription={eventDescription}/>
      <div style={{height: "200px"}}></div>
      <Footer />
      </main>      
    </div>
  )}
}

export async function getStaticProps() {
  const res = await fetch('https://anais-backend.herokuapp.com/event-slides')
  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const res_catg = await fetch('https://anais-backend.herokuapp.com/event-stands?_sort=updated_at:DESC')

  const slides0 = await res.json()
  const stands0 = await res_catg.json()
  const events = await res_event.json()

  const slides = slides0.map(item => {
      const container = {};
      container['image'] = item.image.url;
      container['imageAlt'] = item.imageAlt;
      container['title'] = item.title_markdown;
      container['label'] = item.label_markdown;
      container['first'] = item.first;
      return container;
  })

  var first_index = -1;
  for(var i = 0; i < slides.length; i += 1) {
      if(slides[i]['first'] === "yes") {
          first_index = i;
      }
  }
  if(first_index != -1){
    var temp = slides[0]
    slides[0] = slides[first_index];
    slides[first_index] = temp;
  }

  const stands = stands0.map(item => {
    const container = {};
    container['id'] = item.id;
    container['image'] = item.image.url;
    container['name'] = item.name //.substring(0, 20) + "...";
    container['description'] = item.description //.substring(0, 35) + "...";
    container['lastUpdate'] = item.updated_at;
    return container;
})

const showEvent = events.length === 0 ?'none':'inline';
const eventTitle = events.length === 0 ? "No Event": events[0].name;
const eventDescription = events.length === 0 ? "No Event": events[0].description;


  const coverSlides = slides;
  return {
    props: {
      coverSlides,
      stands,
      eventTitle,
      eventDescription,
      showEvent,
    },
    revalidate: 10,
  }
}
