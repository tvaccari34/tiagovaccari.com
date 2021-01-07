import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow-y: scroll;

`;

export const ProfileContent = styled.div`

    margin: 48px auto;
    width: 720px;

    blockquote{
        color: #5BE7A9;
        margin: 24px;
        padding: 12px;
        border-left: 1px solid;
        font-style: italic;
    }
    
    h5{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 24px;
    }

    div.links{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        

        a + a {
            margin-left: 36px;
        }

    }

    > p{
        margin-top: 12px;
    }

`;