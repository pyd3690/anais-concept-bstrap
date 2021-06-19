import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import MenuBar from '../../src/components/navbar/MenuBar.js'
import Footer from '../../src/components/footer/Footer.js'
import Product from '../../src/components/product/Product.js'

function ProductPage({ product, showEvent }) {
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
    
          <main  style={{overflow: 'hidden'}} id="container">
            <MenuBar itemNumber={0} showEvent= {showEvent}/>
            <div>Loading...</div>
            <Footer />
          </main>      
        </div>
      )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  style={{overflow: 'hidden'}} id="container">
        <MenuBar itemNumber={0} showEvent= {showEvent}/>
        <Product product={product}/>
        <div style={{height: "300px"}}></div> 
        <Footer />
      </main>      
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
    const res = await fetch('https://anais-backend.herokuapp.com/products')
    const products = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const productId = params.id
  const res = await fetch('https://anais-backend.herokuapp.com/products/'+ productId.toString())
  const product1 = await res.json()

  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const events = await res_event.json()
  const showEvent = events.length === 0 ?'none':'inline';

  const product =  {};

    product['id'] = product1.id;
    product['image'] = product1.image.url;
    product['name'] = product1.name //.substring(0, 20) + "...";
    product['description'] = product1.description //.substring(0, 35) + "...";
    product['price'] = product1.price;
    product['category'] = product1.product_category.name;
    //console.log(product);
  // Pass product data to the page via props
  return {
    props: { product, showEvent },
    revalidate: 10,
  }
}

export default ProductPage