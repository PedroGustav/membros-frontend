import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    
    span{
        width: 150px;
        background-color: #ffffff;
        padding: 10px 10px 8px 10px;
        border-bottom: 2px solid var(--red-error);
        text-align: center;
        border-radius: 4px;
        font-size: 12px;
        color: var(--gray700);
        font-family: 'Open Sans', sans-serif;
        
        box-shadow: 5px 4px 20px rgba(0,0,0,0.04);

        position: absolute;
        bottom: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
  
        
        

    }

   
`;