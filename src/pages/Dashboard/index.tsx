import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Member from '../../components/Member';
import NewMemberButton from '../../components/NewMemberButton';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';
import { Container } from './styles';

export interface MemberProps{
    id: string;
    numero_controle: string;
    nome: string;
    nome_mae: string;
    nome_pai: string;
    data_nascimento: string;
    naturalidade: string;
    nacionalidade: string;
    estado_civil: string;
    rg: string;
    cpf: string;
    data_batismo: string;
    foto_url: string;
}

const Dashboard: React.FC = () => {
    const [ membersList, setMembersList ] = useState<MemberProps[]>([]);
    
    const createMembersList = useCallback(() => {
        api.get('/member').then(response => setMembersList(response.data));
    },[]);

    useEffect(() => {
        createMembersList();
    });

    return(
        <>
        <Header title="Sistema de Membros"/>
        <Container>
            <div className="title">
                <strong>Membros Ativos({membersList.length})</strong>
                <div className="line"></div>
            </div>

            
            <div className="members">
                {membersList.length > 0 ? membersList.map(member => (
                    <Member key={member.id} id={member.id} nome={member.nome} data_batismo={member.data_batismo} foto_url={member.foto_url} numero_controle={member.numero_controle} nome_mae={member.nome_mae} nome_pai={member.nome_pai} data_nascimento={member.data_nascimento} naturalidade={member.naturalidade} nacionalidade={member.nacionalidade} estado_civil={member.estado_civil} rg={member.rg} cpf={member.cpf}/>
                )) : <h1 className='message'>Sem Membros</h1>}
            </div>

            <NewMemberButton/>
        </Container>
        <Footer/>
        </>
    );
}

export default Dashboard;