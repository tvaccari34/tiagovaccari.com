import styled from 'styled-components';

export const PostsList = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
    margin-top: 32px;
    overflow-y: scroll;

    ul {
        list-style: none;
        width: 700px;
        margin-top: 16px;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 120px;
        margin: 12px 0;
        border-radius: 10px;
        background-color: #28262e;

        div {
            display: flex;
            flex-direction: column;
            margin: 0px 24px 0px 16px;

            a {
                font-size: 20px;
            }

            p {
                margin-top: 8px;
                font-size: 14px;
            }
        }

        span {
            margin-right: 16px;
        }

        cursor: pointer;

        transition: 0.2s;

        box-shadow: 2px 2px 2px #28262e;
        -moz-box-shadow: 2px 2px 5px #28262e;
        -webkit-box-shadow: 3px 3px 5px #28262e;
        -khtml-box-shadow: 10px 10px 5px #28262e;
    }

    li:hover{
        a {
            color: #5BE7A9;
        }
        transform: scale(1.03);

    }

    ::-webkit-scrollbar {
    display: none;
}

`;