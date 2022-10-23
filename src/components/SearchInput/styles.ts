import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-bottom: 64px;
    img{
        width: 16px;
        position: absolute;
        right: 12px;
        bottom: 12px;
    }

    input{
        width: 100%;
        height: 40px;
        padding: 12px;
        
        border-radius: 4px;
        border: 1px solid  var(--primary);
        &::placeholder{
            font-family: 'Open Sans', sans-serif;
            font-size: 15px;
        }
    }
`;