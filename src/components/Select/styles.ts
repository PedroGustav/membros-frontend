import styled, { css } from  'styled-components';

interface ContainerProps{
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    max-width: inherit;
    height: 50px;
    padding: 12px;
    border-radius: 4px;
    margin-top: 3.5rem;
    position: relative;
    border: 1px solid var(--primary);
    
    ${(props) => 
        props.isErrored && css`
            border: 1px solid var(--red-error);
        ` 
    }
    select{
        border: none;
        width: 100%;
        outline: none;
        height: 100%;
        font-size: 16px;
        font-family: 'Open Sans';
        background-color: transparent;
        color: var(--text);
    }

    .label{
        font-family: 'Bree Serif', serif;
        color: var(--primary);
        position: absolute;
        top: -24px;
        left: 0;
    }

`;