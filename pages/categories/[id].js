import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import MenuBar from '../../src/components/navbar/MenuBar.js'
import Footer from '../../src/components/footer/Footer.js'
import CategoryDisplay from '../../src/components/categoryDisplay/CategoryDisplay.js'

function CategoryPage({ products, category, showEvent, eventTitle}) {
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
    
          <main  style={{overflow: 'hidden'}} id="container" className="categoryBack">
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
        <title>Anais Concept - Category {category.name}</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  style={{overflow: 'hidden'}} id="container" className="categoryBack">
        <MenuBar itemNumber={0} showEvent= {showEvent} eventTitle={eventTitle}/>
        <CategoryDisplay category={category} products={products}/>
        <div style={{height: "150px"}}></div> 
        <Footer />
      </main>      
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
    const res = await fetch('https://anais-backend.herokuapp.com/product-categories')
    const categories = await res.json()


    // Get the paths we want to pre-render based on posts
    const paths = categories.map((category) => ({
      params: { id: category.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const categoryId = params.id
  const res = await fetch('https://anais-backend.herokuapp.com/product-categories/'+ categoryId.toString())

  const category1 = await res.json()

  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
const events = await res_event.json()
const showEvent = events.length === 0 ?'none':'inline';
const eventTitle = events.length === 0 ? "No Event": events[0].name;
  
  const category =  {};
  category['id'] = category1.id;
  category['image'] = category1.image.url;
  category['name'] = category1.name //.substring(0, 20) + "...";
  category['description'] = category1.description //.substring(0, 35) + "...";

  var products0 = category1.products
  const products = products0.map(item => {
    const container = {};
    container['id'] = item.id;
    container['image'] = item.image.url;
    container['name'] = item.name //.substring(0, 20) + "...";
    container['description'] = item.description //.substring(0, 35) + "...";
    container['price'] = item.price;
    container['category'] = category1.name;
    return container;
  })
    //console.log(product);
  // Pass product data to the page via props
  return {
    props: { category, products, showEvent, eventTitle},
    revalidate: 10,
  }
}

export default CategoryPage