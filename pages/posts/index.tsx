import { GetStaticProps } from 'next';
import Head from 'next/head'
import { PostsList } from '../../styles/styles.posts';
import { FiChevronRight } from 'react-icons/fi'
import Link from 'next/link';
import Header from '../../components/Header';

import { GA_TRACKING_ID } from "../../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";
    

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

const Posts: React.FC<{ posts: Post[]}> = (props) => {

    const {posts} = props;

    return (
        <>
            <Head>
              <title>Tiago Vaccari | Blog</title>
              {/* enable analytics script only for production */}
              {isProduction && (
                <>
                  <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                  />
                  <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                    }}
                  />
                </>
              )}
            </Head>
            <Header />
            <PostsList>
                <ul>
                    {posts.map((post, index) => {
                    return <Link href="post/[slug]" as={`/post/${post.slug}`} key={post.slug}>
                            <li>
                                <div >
                                    <a>{post.title}</a>
                                    <p>{post.custom_excerpt}</p>
                                </div>
                                <span>
                                    <FiChevronRight color="#5BE7A9" size={24} />
                                </span>
                            </li>
                        </Link>
                    })}
                </ul>
            </PostsList>
        </>
    )
}

export default Posts;
    