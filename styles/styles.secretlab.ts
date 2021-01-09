import styled from 'styled-components';

                
export const SecrectLabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    margin-top: 96px;

    img{
        width: 400px;
        padding: 36px;
    }

    
`;

export const SecrectLabContent = styled.div`

    padding: 0 36px;

    h1{
        text-align: center;
        color: #5BE7A9;
        margin-bottom: 24px;
    }

    h3{
        text-align: center;
        color: #5BE7A9;
        margin: 12px 96px;
    }

    
    div.credits{
        display: flex;
        justify-content: flex-end;
        font-size: 10px;
    }
`;