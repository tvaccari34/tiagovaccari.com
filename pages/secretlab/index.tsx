import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SecrectLabContainer, SecrectLabContent } from '../../styles/styles.secretlab';
import { FiChevronRight } from 'react-icons/fi'
import Link from 'next/link';
import Header from '../../components/Header';
    

type Post = {
    title: string;
    slug: string;
    custom_excerpt: string;
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

const SecrectLab: React.FC<{ posts: Post[]}> = (props) => {

    const {posts} = props;

    return (
        <>
            <Head>
                <title>Tiago Vaccari | Secrect Lab Projects</title>
            </Head>
            <Header />
            <SecrectLabContainer>
                <SecrectLabContent>
                <h1>SHHHHHHH It is still a SECRECT!</h1>
                </SecrectLabContent>
            </SecrectLabContainer>
        </>
    )
}

export default SecrectLab;
    