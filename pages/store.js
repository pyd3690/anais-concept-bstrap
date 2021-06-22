import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import CoverCarousel from '../src/components/carouselCover/CarouselCover.js'
import CategoryListing from '../src/components/categoryList/CategoryList.js'


export default function StorePage({coverSlides, categories, showEvent, eventTitle}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - Boutique</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{overflow: 'hidden'}} id="container" className="greyBack">
      <MenuBar itemNumber={0} showEvent={showEvent} eventTitle={eventTitle}/>
      <CoverCarousel slides={coverSlides} title="Anais Concept Store & Catalogue"/>
      <hr/>
      <CategoryListing categories={categories} />
      <div style={{height: "200px"}}></div>
      <Footer />
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://anais-backend.herokuapp.com/store-slides')
  const res_catg = await fetch('https://anais-backend.herokuapp.com/product-categories?_sort=updated_at:DESC')
  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const events = await res_event.json()
  const showEvent = events.length === 0 ?'none':'inline';
  const eventTitle = events.length === 0 ? "No Event": events[0].name; 
   
  const slides0 = await res.json()
  const categories0 = await res_catg.json()

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

  const categories = categories0.map(item => {
    const container = {};
    container['id'] = item.id;
    container['image'] = item.image.url;
    container['name'] = item.name //.substring(0, 20) + "...";
    container['description'] = item.description //.substring(0, 35) + "...";
    container['lastUpdate'] = item.updated_at;
    return container;
})


  const coverSlides = slides;
  return {
    props: {
      coverSlides,
      categories,
      showEvent,
      eventTitle,
    },
    revalidate: 10,
  }
}
