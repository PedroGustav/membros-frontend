import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: var(--white);
    /* background-color: #f00; */
    box-shadow: 1px 1px 6px 3px rgba(142, 142, 142, 0.07);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    >img{
        width: 80%;
        height: 50%;
        border: 1px solid var(--primary);
        margin-bottom: 1rem;
        object-fit: cover;
    }

    strong{
        font-family: 'Overpass';
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--primary);
        margin-bottom: 0.75rem;
    }
    
    span{
        display: flex;
        align-items: flex-end;
        font-family: 'Overpass', sans-serif;
        margin-bottom: 1rem;
        color: var(--text);
        p{
            color: var(--primary);
            font-size: 1rem;
            margin-right: 5px;
        }
    }

    .edit{
        width: 90%;
        height: 40px;
        border: none;
        background-color: var(--yellow-warning);
        border-radius: 8px;
        box-shadow: 1px 2px 6px 3px rgba(255, 217, 82, 0.32);
        margin-bottom: 1rem;
        font-family:'Overpass', sans-serif;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;

        img{
            margin-right: 10px;
        }
    }

    .delete{
        width: 90%;
        height: 40px;
        border: none;
        background-color: var(--red-error);
        border-radius: 8px;
        box-shadow: 1px 2px 6px 3px rgba(255, 67, 55, 0.17);
        margin-bottom: 0.5rem;
        font-family:'Overpass', sans-serif;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;

        img{
            margin-right: 10px;
        }
    }
`;