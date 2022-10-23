import React from 'react';
import { Container } from './styles';
import Plus from '../../assets/plus.svg';
import { Link } from 'react-router-dom';
const NewMemberButton: React.FC = () => {

    return(
        <Container>
            <Link to={'/member'} >
               <img src={Plus} alt="Mais" />
               Novo Membro 
            </Link>
        </Container>
    );
}


export default NewMemberButton