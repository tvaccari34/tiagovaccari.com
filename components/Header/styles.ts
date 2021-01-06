import styled from 'styled-components';

export const Container = styled.header`
    padding: 32px 0px;
    background: #28262e;
`;

export const HeaderContainer = styled.div`

    max-width: 1440px;
    display: flex; 
    align-items: center;
    padding: 16px;
    justify-content: space-between;
    
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    > img {
        height: 160px;
        margin-top: 124px;
        border-radius: 50%;
        transition: 0.2s;
        margin-left: 0px;
        margin-right: 24px;
        position: absolute;

        cursor: pointer;

        box-shadow: 2px 2px 2px #5BE7A9;
        -moz-box-shadow: 2px 2px 5px #5BE7A9;
        -webkit-box-shadow: 3px 3px 5px #5BE7A9;
        -khtml-box-shadow: 10px 10px 5px #5BE7A9;
    } 

    img:hover {
        opacity: 0.8;
    }

    strong{
        margin-left: 320px;
        font-size: 24px;
    }

`;

export const Menu = styled.div`

    display: flex;
    margin-right: 52px;
    

    a {
        color: #5BE7A9;
        margin: 16px;
        transition: 0.2s;
    }

    a:hover{
        opacity: 0.8;
    }

    
    
`;