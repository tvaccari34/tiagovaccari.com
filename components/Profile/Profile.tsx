import {ProfileContainer, ProfileContent} from './styles';
import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';

const Profile: React.FC = ({children}) => {
    return (
        <>
            <ProfileContainer>
                <ProfileContent>
                    <blockquote>"The only way to discover the limits of the possible is to go beyond them into the impossible."</blockquote>
                    <h5>Arthur C. Clarke</h5>

                    <p>Developer, dad, husband, cyclist. I'm passionate by code and technology. I started my tech life earlier 90's with my PC-286 and then 386 creating some funny programs. Now a days, have been working as Fullstack Web Developer.</p>
                    <p>I have more than 20 years of working experience. I started my career after got my first technical degree in 1995 working with Clipper and Visual Basic and then I got my Bachelor's Degree in Information System. I have played both technical roles and management/executive roles. I have been working for companies in different industries like Insurance Companies, Healthcare, and Technology Startups.</p>
                    <p>I would say I don't have a specific technology to call "my love", but I have been working with Microsoft stack most of that time (C#, MS Sql, Asp.Net, Entity Framework). Recently, I'm working with the stack .Net Framework, AngularJs, TypeScript, MongoDB, MySql.</p>
                    <p>In my spare time, I used to be with my family, friends or trying different flavors which can be a 🍺, 🍷 or a new tech to work with.</p> By the way, that blog was created using ReactJS, Next.js, TypeScript, Ghost CMS and Docker.
                    <p>I born and raised in Jundiai-SP Brazil a lovely city with many italian roots. Now I'm living in Bournemouth UK which has the most beautiful beaches in UK, in my opinion 😃.</p>
                    <div className="links">
                        <nav>
                            <a href="https://twitter.com/vaccari_tiago" target="_blank"><FiTwitter color="#5BE7A9" size={36}/></a>
                            <a href="https://www.linkedin.com/in/tiago-vaccari-0b159a54/" target="_blank"><FiLinkedin color="#5BE7A9" size={36}/></a>
                            <a href="https://www.instagram.com/tiagovaccari/" target="_blank"><FiInstagram color="#5BE7A9" size={36}/></a>
                            <a href="https://www.facebook.com/tiago.vaccari.3" target="_blank"><FiFacebook color="#5BE7A9" size={36}/></a>
                        </nav>
                    </div>
                </ProfileContent>
            </ProfileContainer>
        </>
    )
}

export default Profile;