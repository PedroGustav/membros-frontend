import styled from 'styled-components';


export const Container = styled.div`
    position:fixed;
    bottom: 16px;
    right: 16px;
    width: 45%;
    a{
        padding: 20px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--white);
        border: 0px;
        height: 60px;
        width: 100%;
        background-color: var(--primary);
        font-family: 'Overpass', sans-serif;
        font-size: 1.4rem;
        border-radius: 30px;
        img{
            width: 30px;
            margin-right: 16px;
        }
    }
`;