import { Container, HeaderContainer, Profile, Menu } from './styles';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <Profile>
                    <Link href="/"><img src="/images/avatar.jpg" alt="Tiago Vaccari"/></Link>
                    <strong>Tiago Vaccari</strong>
                </Profile>
                <Menu>
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