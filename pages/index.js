import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import HeroSection from '../src/components/hero/Hero.js'
import CardRowSection from '../src/components/cardRow/CardRow.js'
import CardRowShopSection from '../src/components/cardRowShop/CardRowShop.js'
import ContactSection from '../src/components/contactHome/contactHome.js'
import BannerSection from '../src/components/imageBanner/banner.js'

/* const slides = [
  {
    image: '/pictures/hero/hero4.jpg',
    imageAlt: 'hero4',
    title: 'Anais Concept vous comble',
    label: 'Nous vous offrons du bohneur sur mesure'
  },
  {
    image: '/pictures/hero/hero2.jpg',
    imageAlt: 'hero2',
    title: 'Anais Concept vous fais redecouvrir les cadeaux',
    label: 'En matiere de cadeaux l\'habit peut faire le moine'
  },  
  {
    image: '/pictures/hero/hero6.jpg',
    imageAlt: 'hero6',
    title: 'none',//'Un cadeau en dit beaucoup',
    label: 'none', //'Apprecions un peu plus nos proches'
  }
] */

/* const topPicture_data = {
  src: "/pictures/hero/hero1.jpg",
  alt: "hero1",
  title: "Le bohneur sur Mesure",
  caption: "Rien n'est trop beau pour vos proches. Nous ne menageons aucun effort pour vous le prouver"
} */

/* const bottomPicture_data = {
  title: "Anais Concept c'est aussi",
  list: ["Des Conseils en cadeaux", 
    "Du Mangement d'evenements",
    "Du Design d'emballages"]
} */

const cards_data = [
  {
    image: '/pictures/blog/blog1.jpg',
    title: 'Title1',
    content: 'Description 1 for display and test',
    lastUpdate: 'Last updated 1 minutes ago'
  },
  {
    image: '/pictures/blog/blog2.jpg',
    title: 'Title2',
    content: 'Description 2 for display and test',
    lastUpdate: 'Last updated 2 minutes ago'
  }, 
  {
    image: '/pictures/blog/blog3.jpg',
    title: 'Title3',
    content: 'Description 3 for display and test',
    lastUpdate: 'Poste 3 minutes ago'
  }
]

const cards_data_shop = [
  {
    image: '/pictures/shop/shop1.jpeg',
    name: 'Item 1',
    description: 'Description 1 for display and test',
  },
  {
    image: '/pictures/shop/shop2.jpeg',
    name: 'Item2 - 3500 FCFA',
    description: 'Description 2 for display and test',
  }, 
  {
    image: '/pictures/shop/shop3.jpeg',
    name: 'Item 3',
    price: '5000',
    description: 'Description 3 for display and test',
  }
]

const banner_data = {
  image: '/pictures/hero/banner.jpg',
  caption: "Le cadeau n'a rien à voir avec son prix, il tient tout entier dans l'intention et la beauté du geste. Si humble soit-il, il est comme un émissaire de la personne et garde sur lui son empreinte"
}

export default function Home({slides, topPicData, bottomPicData, products, articles, bannerData}) {
  //console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  style={{overflow: 'hidden'}} id="container">
        <MenuBar itemNumber={0} />
        <HeroSection slides_data={slides} topPicture={topPicData} bottomPicture={bottomPicData}/>
        <CardRowShopSection cards={products}/>
        <CardRowSection cards={articles}/>
        <BannerSection data={bannerData}/>
        <ContactSection />
        {/* <div style={{height: "300px"}}></div> */}
        <Footer />
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://anais-backend.herokuapp.com/slides')
  const res_top = await fetch('https://anais-backend.herokuapp.com/right-top-pictures')
  const res_bottom = await fetch('https://anais-backend.herokuapp.com/right-bottom-data')
  const res_banner = await fetch('https://anais-backend.herokuapp.com/banners')
  const res_posts = await fetch('https://anais-backend.herokuapp.com/articles?_sort=updated_at:DESC')
  const res_products = await fetch('https://anais-backend.herokuapp.com/products?_sort=updated_at:DESC')

  const slides0 = await res.json()
  const top_pic = await res_top.json()
  const bottom_pic = await res_bottom.json()
  const banner = await res_banner.json()
  const posts = await res_posts.json()
  const products0 = await res_products.json()

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
  
  const topPicData = top_pic.map(item => {
    const container = {};
    container['src'] = item.image.url;
    container['alt'] = item.alt;
    container['title'] = item.title;
    container['caption'] = item.caption;
    return container;
  })[0]
  
  const bottomPicData = bottom_pic.map(item => {
    const container = {};
    container['title'] = item.title;
    container['description'] = item.description;
    return container;
  })[0]
  
  const bannerData = banner.map(item => {
    const container = {};
    container['image'] = item.image.url;
    container['caption'] = item.caption;
    return container;
  })[0]

  const articles_all = posts.map(item => {
    const container = {};
    container['id'] = item.id;
    container['image'] = item.cover.url;
    container['title'] = item.title //.substring(0, 20) + "...";
    container['content'] = item.content //.substring(0, 35) + "...";
    container['lastUpdate'] = item.created_at;
    return container;
})
var articles = articles_all;
if(articles_all.length > 3){
  var articles = articles_all.slice(0,3);
}

  const products_all = products0.map(item => {
    const container = {};
    container['id'] = item.id;
    container['image'] = item.image.url;
    container['name'] = item.name //.substring(0, 20) + "...";
    container['description'] = item.description //.substring(0, 35) + "...";
    container['price'] = item.price;
    container['category'] = item.product_category.name;
    return container;
  })
  var products = products_all;
  if(products_all.length > 3){
    products = products_all.slice(0,3);
  }

  return {
    props: {
      slides,
      topPicData,
      bottomPicData,
      bannerData,
      articles,
      products,
    },
    revalidate: 10,
  }
}
