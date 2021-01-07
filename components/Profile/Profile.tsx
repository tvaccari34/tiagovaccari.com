import {ProfileContainer, ProfileContent} from './styles';

const Profile: React.FC = ({children}) => {
    return (
        <>
            <ProfileContainer>
                <ProfileContent>
                    <blockquote>"The only way to discover the limits of the possible is to go beyond them into the impossible."</blockquote>
                    <h5>Arthur C. Clarke</h5>

                    <p>Developer, dad, husband, cyclist. 
                        I'm passionate by code and technology.
                        I started my tech life earlier 90's with my PC-286 and then 386 creating some funny programs. Now a days, have been working as Fullstack Web Developer.</p>
                    <p>You can contact me on <a href='https://twitter.com/vaccari_tiago' target="_blank">Twitter</a>  </p>
                </ProfileContent>
            </ProfileContainer>
        </>
    )
}

export default Profile;