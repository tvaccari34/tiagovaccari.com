import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SecrectLabContainer, SecrectLabContent } from '../../styles/styles.secretlab';
import { FiChevronRight } from 'react-icons/fi'
import Link from 'next/link';
import Header from '../../components/Header';
import { useState } from 'react';
    

// type Post = {
//     title: string;
//     slug: string;
//     custom_excerpt: string;
//   }
  
  // async function getPosts() {
  
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  //   ).then((res) => res.json());
  
  //   const posts = res.posts;
  
  //   return posts;
  // }
  
  // export const getStaticProps: GetStaticProps = async ({ params }) => {
  //   const posts = await getPosts();
  //   return {
  //     props: { posts },
  //     revalidate: 60
  //   }
  // }

const SecrectLab: React.FC = () => {

    const [isSecretDiscovered, setIsSecretDiscovered] = useState(false);

    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    let currentKey = 0;

    const checkKey = (event) => {

      if(konamiPattern.indexOf(event.key) < 0 || event.key !== konamiPattern[currentKey]){

        currentKey = 0;
        return;

      }
      
      currentKey++;

      if (konamiPattern.length === currentKey) {
        currentKey = 0;

        setIsSecretDiscovered(true);
      }
    }

    if(process.browser){
      document.addEventListener('keydown', checkKey, false);  
    }

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

                {
                  isSecretDiscovered && (
                    <>
                      <img src="./images/lab.svg" alt="Secret Lab"/>
                      <SecrectLabContent>
                        <p><h3>You got the secret, so maybe you deserve to know more about software development! But just wait...</h3></p>
                        <p><h3>You will need to prove your value! For that, you have to create a post about what you have learned during last week and tag me on Linkedin, Twitter, Instagram or Facebook.</h3></p>
                        <div className="credits">
                          <span>Credits - </span>
                          <a href='https://www.freepik.com/vectors/technology'><span>Technology vector created by stories - www.freepik.com</span></a>
                        </div>
                      </SecrectLabContent>
                    </>
                  )
                }
            </SecrectLabContainer>
        </>
    )
}

export default SecrectLab;
    