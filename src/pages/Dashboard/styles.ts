import  styled from 'styled-components';


export const Container = styled.div`
    /* padding: 16px; */

    .title{
        display: flex;
        align-items: center;
        strong{
            font-family: 'Bree Serif', serif;
            color: var(--primary);
            font-size: 1.4rem;
            padding-right: 20px;
        }

        .line{
            height: 2px;
            flex: 1;
            background-color: var(--primary);
            
        }
    }


    .members{
        margin-top: 3rem;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 16px;
        width: 100%;
    }

    .message{
        width: 100%;
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 3;
        margin-top: 3rem;
        color: #aa1515;
        font-family: 'Open Sans';
        padding: 0.5rem;
        border-radius: 8px;
    }
`;