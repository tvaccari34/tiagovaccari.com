import styled, {css} from 'styled-components';

interface MenuProps {
    isSmall: boolean;
}

export const Container = styled.header`
    display: flex;
    height: 112px;
    background: #28262e;
`;

export const HeaderContainer = styled.div`

    display: flex; 
    flex: 1;
    align-items: center;
    padding: 16px;
    justify-content: space-between;
    
`;

export const Profile = styled.div`
    display: flex;
    padding-left: 36px;
    justify-content: space-around;

    > img {
        height: 160px;
        margin-top: -28px;
        margin-left: 64px;
        border-radius: 50%;
        transition: 0.2s;
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

`;

export const Menu = styled.div<MenuProps>`

    display: flex;
    flex: 1;

    
    /* align-content: space-between; */
    /* justify-content: center; */
    align-items: center;
    justify-content: space-around;

    strong{
        font-size: 24px;
    }
    

    a {
        color: #5BE7A9;
        margin: 8px;
        transition: 0.2s;
    }

    a:hover{
        opacity: 0.8;
    }

    ${props => props.isSmall && css`
        flex-direction: column;
        align-items: flex-end;
        margin-right: 12px;
    `}
    
`;