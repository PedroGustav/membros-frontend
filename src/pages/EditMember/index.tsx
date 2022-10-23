import * as Yup from 'yup';
import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationError';
import { useMember } from '../../hooks/member';
import { useToast } from '../../hooks/toast';

export interface CreateMemberData{
    nome:string;
    data_nascimento: string;
    data_batismo: string;
    nacionalidade: string;
    naturalidade: string;
    nome_mae: string;
    nome_pai: string;
    rg: string;
    cpf: string;
    estado_civil: string;


}

const EditMember: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    let { id } = useParams();
    const { member, createMember, updateMember } = useMember();
    const { addToast } = useToast();
    const navigate = useNavigate();
    useEffect(() => {
        if(id){
            
           updateMember(id);   
        }
    })
  
    const handleSubmit = useCallback(async(data:CreateMemberData) => {
        formRef.current?.setErrors({});
        try{
            const schema = Yup.object().shape({
                nome: Yup.string().required('O campo está vazio!'),
                data_nascimento: Yup.string().required('O campo está vazio!'),
                data_batismo: Yup.string().required('O campo está vazio!'),
                nacionalidade: Yup.string().required('O campo está vazio!'),
                naturalidade: Yup.string().required('O campo está vazio!'),
                nome_mae: Yup.string().required('O campo está vazio!'),
                nome_pai: Yup.string().required('O campo está vazio!'),
                rg: Yup.string().required('O campo está vazio!'),
                cpf: Yup.string().required('O campo está vazio!'),
                estado_civil: Yup.string()
            })

            await schema.validate(data, {
                abortEarly: false,
            });
            
            const response = await api.put(`/member/${member.id}`, {
                rg: data.rg,
                nome_pai: data.nome_pai,
                nome_mae: data.nome_mae,
                naturalidade: data.naturalidade,
                nacionalidade: data.nacionalidade,
                estado_civil: data.estado_civil,
                data_batismo: data.data_batismo,
                cpf: data.cpf,
                data_nascimento: data.data_nascimento,
                nome:data.nome,	
            });

            updateMember(response.data);
            
            addToast({
                title: 'Dados Atualizados!',
                type: 'success'
            });

            navigate('/photo');
            
        }catch(err){

            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }else{
                addToast({
                    title:'Ops!',
                    description: 'Algo deu errado, tente novamente.',
                    type: 'error'
                });
            }
        }
    },[addToast, createMember, navigate, member.id, updateMember]);

    return(
        <>
        <Header title="Editar Membro"/>
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>  
                <Input name="nome" label="Nome Completo" placeholder="Nome Completo" value={member.nome}/>
                <div className="line-2">
                    <Input name="data_nascimento" label="Data de Nascimento" placeholder="DD/MM/AAAA" value={member.data_nascimento}/>
                    <Input name="data_batismo" label="Data de Batismo"placeholder="DD/MM/AAAA" value={member.data_batismo} />
                </div>
                <div className="line-2">
                    <Input name="nacionalidade" label="Nacionalidade" placeholder="Brasileira" value={member.nacionalidade}/>
                    <Input name="naturalidade" label="Naturalidade" placeholder="Naturalidade" value={member.naturalidade}/>
                </div>
                <Input name="nome_mae" label="Filiação" placeholder="Nome da Mãe" value={member.nome_mae}/>
                <Input name="nome_pai" placeholder="Nome do Pai" className="no-margin" value={member.nome_pai}/>

                <div className="line-2">
                    <Input name="rg" label="RG" placeholder="Som. Números" value={member.rg}/>
                    <Input name="cpf" label="CPF" placeholder="Som. Números" value={member.cpf}/>
                </div>
                <Input name="estado_civil" label="Estado Civil" placeholder="Solteiro/Casado/Viúvo"/>
                

                <button className="continue-button">Atualizar</button>
            </Form>
        </Container>
        <Footer/>
        </>
    );
}

export default EditMember;