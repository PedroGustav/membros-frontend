import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 32px;
    span{
        width: 100%;
        background-color: var(--primary);
        color: var(--white);
        font-size: 1rem;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Open Sans';
        text-transform: uppercase;
    }
`;

export const Logo = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 60px;

    img{
        width: 200px;
    }
`;
