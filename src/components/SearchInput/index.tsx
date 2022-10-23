import React from 'react';
import { Container } from './styles';
import Search from '../../assets/search-solid.svg';
const SearchInput: React.FC = () => {



    return(
        <Container>
            <img src={Search} alt="Buscar" />
            <input type="text" placeholder="Pesquisar Membro"  />
        </Container>
    );
}

export default SearchInput;