import React from 'react';
import { Container } from './styles';

interface TooltipProps{
    title: string;
}

const Tooltip: React.FC<TooltipProps> = ({title, children}) => {

    return(
        <Container>
            <span>{title}</span>
            {children}
        </Container>
    )
}

export default Tooltip;