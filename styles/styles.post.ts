import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex: 1;
    width: auto;
`;

export const PostContent = styled.div`
    margin: 54px auto;
    width: 720px;
    padding: 24px;

    > div.timeToRead {
        display: flex;
        align-content: center;
        justify-content: flex-end;
        font-size: 12px;
    }

    h1 {
        color: #5BE7A9;
    }

    h2 {
        margin-top: 24px;
    }

    h3 {
        margin-top: 16px;
    }

    h5{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 24px;
    }

    p {
        margin-top: 8px;
    }

    ul{
        margin-top: 12px;
    }

    li {
        margin-top: 18px;
    }

    pre{
        margin-top: 16px;
        padding: 8px;
        border-radius: 10px;
        background-color: #28262e;

        overflow-x: auto;

        ::-webkit-scrollbar {
           display: inline;
           background: #000;

        }

        ::-webkit-scrollbar-thumb {
            background: #fff;
            border-radius: 5px;
        }

    }

    blockquote{
        margin: 16px 12px 0px 12px;
        padding: 12px;
        color: #A5F4D1;
        border-left: 1.5px solid;
        font-style: italic;
        font-size: 14px;
    }
    
    a{
        color: #A5F4D1;
        transition: 0.2s;
    }

    a:hover{
        opacity: 0.7;
    }

    strong{
        margin-bottom: 8px;
    }

    img {
        max-width: 100%;
        height: auto;
        margin-top: 12px;
    }

    iframe{
        padding: 12px;
    }

    figure{
        padding: 12px;
    }

    .load_comments{
        margin-top: 24px;
        cursor: pointer;
        color: #5BE7A9;

        transition: 0.3s;
    }

    .load_comments:hover{
        opacity: 0.7;
    }
`;