import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header'
import { PostContainer, PostContent } from '../../styles/styles.post';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateHttpToHttps } from '../../lib/utils';

import { GA_TRACKING_ID } from "../../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

async function getPost(slug: string){

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.CONTENT_API_KEY}&fields=title,slug,reading_time,html`
      ).then((res) => res.json());
    
      const posts = res.posts;
    
      return posts[0];

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPost(params.slug as string);
    return {
      props: { post },
      revalidate: 60
    }
  }

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

interface Post{
    title: string;
    slug: string;
    reading_time: string;
    html: string;
}

const Post: React.FC<{post: Post}> = (props) => {

    const router = useRouter();

    const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true);

    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    
    const { post } = props;

    function loadComments(){

        setEnableLoadComments(false);

        ;(window as any).disqus_config = function () {
            this.page.url = process.env.NEXT_PUBLIC_API_URL;  
            this.page.identifier = post.slug; 
            };

        const script = document.createElement('script')
        script.src = 'https://tiagovaccari.disqus.com/embed.js';
        script.setAttribute('data-timestamp', Date.now().toString());

        document.body.appendChild(script);
        
    }

    return (
        <>
            <Head>
                <title>{post.title}</title>
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
            <PostContainer>
                <PostContent>
                    <h1>{post.title}</h1>
                    <div className="timeToRead">{post.reading_time} min read</div>
                    <div dangerouslySetInnerHTML={{__html: updateHttpToHttps(post.html)}}></div>

                    {enableLoadComments && (
                        <p className="load_comments" onClick={loadComments}>Load Comments</p>
                    )}
                    
                    <div id="disqus_thread"></div>
                </PostContent>
            </PostContainer>
        </>
    )
}

export default Post;