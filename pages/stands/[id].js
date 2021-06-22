import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import MenuBar from '../../src/components/navbar/MenuBar.js'
import Footer from '../../src/components/footer/Footer.js'
import StandDisplay from '../../src/components/standDisplay/StandDisplay.js'

function StandPage({ stand, categories, showEvent, eventTitle}) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
        <div className={styles.container}>
          <Head>
            <title>Anais Concept</title>
            <meta name="description" content="A vos risques et plaisirs" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main  style={{overflow: 'hidden'}} id="container"  className="categoryBack">
            <MenuBar itemNumber={0} showEvent= {showEvent} eventTitle={eventTitle}/>
            <div>Loading...</div>
            <Footer />
          </main>      
        </div>
      )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept - Stand {stand.name}</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  style={{overflow: 'hidden'}} id="container" className="categoryBack">
        <MenuBar itemNumber={0} showEvent= {showEvent} eventTitle={eventTitle}/>
        <StandDisplay stand={stand} categories={categories}/>
        <div style={{height: "150px"}}></div> 
        <Footer />
      </main>      
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
    const res = await fetch('https://anais-backend.herokuapp.com/event-stands')
    const stands = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = stands.map((stand) => ({
      params: { id: stand.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const standId = params.id
  const res = await fetch('https://anais-backend.herokuapp.com/event-stands/'+ standId.toString())
  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const events = await res_event.json()
  const showEvent = events.length === 0 ?'none':'inline';
  const eventTitle = events.length === 0 ? "No Event": events[0].name;

  const stand1 = await res.json()
  
  const stand =  {};
  stand['id'] = stand1.id;
  stand['image'] = stand1.image.url;
  stand['name'] = stand1.name //.substring(0, 20) + "...";
  stand['description'] = stand1.description //.substring(0, 35) + "...";

  var categories0 = stand1.event_categories
  const categories = categories0.map(item => {
    const container = {};
    container['id'] = item.id;
    container['image'] = item.image.url;
    container['name'] = item.name //.substring(0, 20) + "...";
    container['description'] = item.description //.substring(0, 35) + "...";
    return container;
  })
    //console.log(product);
  // Pass product data to the page via props
  return {
    props: { stand, categories, showEvent, eventTitle},
    revalidate: 10,
  }
}

export default StandPage