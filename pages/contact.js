import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import CoverCarousel from '../src/components/carouselCover/CarouselCover.js'
import ContactSection from '../src/components/contactSection/ContactSection.js'

export default function ContactPage({coverSlides, showEvent, eventTitle}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - Contact</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{overflow: 'hidden'}} id="container">
      <MenuBar itemNumber={0} showEvent= {showEvent} eventTitle={eventTitle}/>
      <CoverCarousel slides={coverSlides} title="Contactez Nous"/>
      <ContactSection />
      <div style={{height: "200px"}}></div>
      <Footer />
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://anais-backend.herokuapp.com/contact-slides')
  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const events = await res_event.json()
  const showEvent = events.length === 0 ?'none':'inline';
  const eventTitle = events.length === 0 ? "No Event": events[0].name;

  const slides0 = await res.json()

  const slides = slides0.map(item => {
      const container = {};
      container['id'] = item.id;
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

  const coverSlides = slides;
  return {
    props: {
      coverSlides,
      showEvent,
      eventTitle,
    },
    revalidate: 10,
  }
}