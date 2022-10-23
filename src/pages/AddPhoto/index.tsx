import React, { ChangeEvent, useCallback } from'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';
import noPhoto  from '../../assets/avatar-empty.png';
import api from '../../services/api';
import{ useMember } from '../../hooks/member';
import{ useNavigate } from 'react-router-dom'; 
import { useToast } from '../../hooks/toast';


const AddPhoto: React.FC = () => {
    const { member, updateMember } = useMember();
    const { addToast } = useToast();
    const navigate = useNavigate();
    const hasPhoto = member.foto_url;

    const handleUpdateAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.files){

            const data = new FormData();
            data.append('photo', e.target.files[0]);

            api.patch(`/member/photo/${member.id}`, data).then((response) => {
                
                updateMember(response.data);

                addToast({
                    type: 'success',
                    title:'Foto adcionada',
                });
            })
        }
        
    }, [addToast, member.id, updateMember]);

    const handleFinishRegister = useCallback(() => {
        navigate('/');
        addToast({
            title: 'Cadastro Finalizado com sucesso!',
            type: 'success'
        });

    }, [addToast, navigate]); 

    return(
        <>
        <Header title="Adcinonar Foto"/>
        <Container>
            <input type="file" id="photo" onChange={handleUpdateAvatar}/>
            <img src={hasPhoto ? `https://membros-adtacima.herokuapp.com/files/${hasPhoto}` : noPhoto} alt="Foto" />
            <p>Agora precisamos escolher uma foto para seu cartão de membro</p>

            <button  onClick={handleFinishRegister}className="submit-photo">Finalizar Cadastro</button>
        </Container>
        <Footer/>
        </>
    );
}

export default AddPhoto;