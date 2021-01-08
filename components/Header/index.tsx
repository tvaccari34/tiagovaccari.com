import { Container, HeaderContainer, Profile, Menu } from './styles';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';



const Header: React.FC = () => {

    const [screenWidth, setScreenWidth] = useState<boolean>(false);

    useEffect(() => {

        if(typeof window !== 'undefined'){
            const {innerWidth: width } =  window;

            if(innerWidth < 430){
                setScreenWidth(true);
            }
        }
    }, [])

    return (
        <Container>
            <HeaderContainer>
                <Profile>
                    <Link href="/"><img src="/images/avatar.jpg" alt="Tiago Vaccari"/></Link>
                </Profile>
                <Menu isSmall={screenWidth}>
                    <strong>Tiago Vaccari</strong>
                    <nav>
                        <a href="/posts/">Blog</a>
                        <a href="/secretlab/">Secret Lab</a>
                    </nav>
                </Menu>
            </HeaderContainer>
        </Container>
     
    )
}

export default Header;