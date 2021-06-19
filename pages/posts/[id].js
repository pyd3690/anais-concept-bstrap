import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import MenuBar from '../../src/components/navbar/MenuBar.js'
import Footer from '../../src/components/footer/Footer.js'
import Post from '../../src/components/post/Post.js'

function PostPage({ post, showEvent }) {
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
        <Post article={post}/>
        <div style={{height: "300px"}}></div> 
        <Footer />
      </main>      
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
    const res = await fetch('https://anais-backend.herokuapp.com/articles')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const postId = params.id
  const res = await fetch('https://anais-backend.herokuapp.com/articles/'+ postId.toString())
  const post1 = await res.json()

  const res_event = await fetch('https://anais-backend.herokuapp.com/events')
  const events = await res_event.json()
  const showEvent = events.length === 0 ?'none':'inline';

  const post =  {};

    post['id'] = post1.id;
    post['cover'] = post1.cover.url;
    post['title'] = post1.title //.substring(0, 20) + "...";
    post['content'] = post1.content //.substring(0, 35) + "...";
    post['lastUpdate'] = post1.updated_at;
    
  // Pass post data to the page via props
  return {
    props: { post, showEvent },
    revalidate: 10,
  }
}

export default PostPage