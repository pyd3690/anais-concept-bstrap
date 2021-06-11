import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import HeroSection from '../src/components/hero/Hero.js'

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

export default function Home({slides, topPicData, bottomPicData}) {
  //console.log(bottomPicData);
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
        <div style={{height: "300px"}}></div>
        <Footer />
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://anais-backend.herokuapp.com/slides')
  const res_top = await fetch('https://anais-backend.herokuapp.com/right-top-pictures')
  const res_bottom = await fetch('https://anais-backend.herokuapp.com/right-bottom-data')

  const slides0 = await res.json()
  const top_pic = await res_top.json()
  const bottom_pic = await res_bottom.json()

  const slides = slides0.map(item => {
      const container = {};
      container['image'] = item.image.url;
      container['imageAlt'] = item.imageAlt;
      container['title'] = item.title;
      container['label'] = item.label;
      return container;
  })
  
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
    container['list'] = item.description.split("****");;
    return container;
  })[0]

  return {
    props: {
      slides,
      topPicData,
      bottomPicData,
    },
    revalidate: 10,
  }
}
