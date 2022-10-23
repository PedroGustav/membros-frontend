import styled from 'styled-components';


export const Container = styled.div`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    input{
        width: 200px;
        height: 200px;
        position: absolute;
        opacity: 0;
    }
    img{
        max-width: 223px;
        max-height: 223px;
        border: 3px solid var(--primary);
        margin-bottom: 2rem;
        object-fit: cover;
    }

    p{
        font-family: 'Open Sans';
        font-weight: bold;
        text-align: center;
        font-size: 1.3rem;
        color: var(--primary);
    }

    .submit-photo{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        border: none;
        text-decoration: none;
        background-color: var(--sucess);
        color: var(--white);
        font-family: 'Overpass', sans-serif;
        font-size: 1.3rem;
        border-radius: 8px;
        box-shadow: 0px 4px 6px 2px rgba(60, 202, 10, 0.2);
    }
`;