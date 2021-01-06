import { GetStaticProps } from 'next';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header';
import Head from 'next/head'

const name = 'Tiago Vaccari'
export const siteTitle = "Tiago Vaccari | Fullstack Developer & Blogger"

type Post = {
  title: string;
  slug: string;
}

async function getPosts() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 60
  }
}

const Home: React.FC<{ posts: Post[]}> = (props) => {

  const {posts} = props;

  return (
    
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content={siteTitle}
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <Profile />
    </>
  )
}

export default Home;