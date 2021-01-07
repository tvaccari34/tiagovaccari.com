import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex: 1;
    width: auto;
`;

export const PostContent = styled.div`
    margin: 48px auto;
    width: 720px;

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

    p {
        margin-top: 8px;
    }

    ul{
        margin-top: 12px;
    }

    li {
        margin-top: 4px;
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

    strong{
        margin-bottom: 8px;
    }

    img {
        max-width: 100%;
        height: auto;
        margin-top: 12px;
    }
`;