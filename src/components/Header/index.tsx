import React from 'react';

import { Container, Logo } from './styles';

import ImgLogo from '../../assets/logo.svg';

interface HeaderProps{
    title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
    return(
        <Container>
            <Logo>
                <img src={ImgLogo} alt="Assembleia de Deus Tacima" />
            </Logo>

            <span>
                <h1>{title}</h1>
            </span>
        </Container>      
    ); 
}

export default Header