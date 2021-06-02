import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../src/components/navbar/MenuBar.js'
import Footer from '../src/components/footer/Footer.js'
import HeroSection from '../src/components/hero/Hero.js'

const featured_data = [
  {
    image: '/pictures/hero/hero4.jpg',
    imageAlt: 'hero4',
    title: 'Anais Concept vous comble',
    label: 'Nous vous offrons du bohneur sur mesure...'
  },
  {
    image: '/pictures/hero/hero2.jpg',
    imageAlt: 'hero2',
    title: 'Anais Concept vous fais redecouvrir les cadeaux',
    label: 'En matiere de cadeaux l\'habit peut faire le moine...'
  },  
  {
    image: '/pictures/hero/hero3.jpg',
    imageAlt: 'hero2',
    title: 'Un cadeaux en dit beaucoup',
    label: 'Apprecions un peu plus nos proches...'
  }
]

const topPicture_data = {
  src: "/pictures/hero/hero1.jpg",
  alt: "hero1",
  title: "Le bohneur sur Mesure",
  caption: "Rien n'est trop beau pour vos proches. Nous ne menageons aucun effort pour vous le prouver"
}

const bottomPicture_data = {
  title: "Le bohneur sur Mesure",
  list: ["Des Conseils en cadeaux", 
    "Du Mangement d'evenements",
    "Du Design d'emballages"]
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anais Concept</title>
        <meta name="description" content="A vos risques et plaisirs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-md" style={{overflow: 'hidden'}}>
        <MenuBar itemNumber={0} />
        <HeroSection slides_data={featured_data} topPicture={topPicture_data} bottomPicture={bottomPicture_data}/>
        <div style={{height: "300px"}}></div>
        <Footer />
      </main>      
    </div>
  )
}
