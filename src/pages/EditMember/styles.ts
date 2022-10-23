import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;

    .line-2{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
    }

    .no-margin{
        margin-top: 1.5rem;
        
    }


    .select-container{
        position: relative;
        width: 100%;
        height: 50px;
        padding: 12px;
        border: 1px solid var(--primary);
        margin-top: 3.5rem;
        border-radius: 4px;
        
        span{
            position: absolute;
            font-family: 'Bree Serif', serif;
            color: var(--primary);
            position: absolute;
            top: -24px;
            left: 0;
        }
        select{
            width: 100%;
            background-color: transparent;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            border: none;
        }
        
    }

    .continue-button{
        width: 100%;
        height: 45px;
        margin-top: 2rem;
        border: none;
        background-color: var(--primary);
        font-family: 'Overpass', sans-serif;
        color: var(--white);
        font-size: 1.2rem;
        border-radius: 4px;
    }
`;