import React, { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';
import semFoto from '../../assets/avatar-empty.png';
import Pencil from '../../assets/pencil-solid.svg';
import Trash from '../../assets/bxs-trash.svg';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useNavigate } from 'react-router';
import { useMember } from '../../hooks/member';
export interface MemberData{
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
const Member: React.FC<MemberData> = ( member : MemberData) => {
    const [ apresentationName, setApresentationName ] = useState('');
    const Firstname = member.nome.split(' ');
    const { addToast } = useToast();
    const { updateMember } = useMember()
    const navigate = useNavigate();

    const fomrmatName = useCallback(() => {
        if(Firstname.length === 1){
            setApresentationName(Firstname[0]);
        }else if(Firstname.length === 2){
            setApresentationName(Firstname[0] + ' ' + Firstname[1]);
        }else{
            if(Firstname[1].length <=3){
                setApresentationName(Firstname[0] + ' ' + Firstname[1] + ' ' + Firstname[2]);
            }else{
                setApresentationName(Firstname[0] + ' ' + Firstname[1]);
            }
        }
    }, [Firstname]);
    
    useEffect(() => {
        fomrmatName();
    })

    const handleDeleteMember = useCallback(() => {
        api.delete(`/member/${member.id}`).then( response => {

            addToast({
                type: 'success',
                title: 'Membro deletado com sucesso'
            });
                
        }
        );

    }, [member.id, addToast]);
    
    const handleUpdateMember = useCallback(() => {
        
        updateMember(member.id);
        navigate(`/edit/${member.id}`);
    }, []);
    return(
        <Container>
            <img src={member.foto_url ? `http://54.207.229.94:3333/files/${member.foto_url}` : semFoto} alt="Foto do Membro" />
            <strong>{apresentationName}</strong>
            <span><p>Data de batismo:</p> {member.data_batismo}</span>
            
            <button className="edit" onClick={handleUpdateMember}>
                <img src={Pencil} alt="Lápis" />
                Alterar Dados
            </button>

            <button className="delete" onClick={handleDeleteMember}>
                <img src={Trash} alt="Lixeira" />
                Deletar Membro
            </button>
            <a target="_blank" href={`https://gerar-carteirinha.000webhostapp.com/?nome=${member.nome}&mae=${member.nome_mae}&pai=${member.nome_pai}&naturalidade=${member.naturalidade}&nacionalidade=${member.nacionalidade}&estado_civil=${member.estado_civil}&rg=${member.rg}&cpf=${member.cpf}&batismo=${member.data_batismo}&nascimento=${member.data_nascimento}&foto_url=${member.foto_url}`}>
                teste
            </a>
        </Container>
    );
}

export default Member;