import React from 'react';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import { Toast } from './Toast';


interface ToastContainerProps{
    messages: ToastMessage[];
}
export const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {

    return(
        <Container>
            {messages.map(message => (
                <Toast message={message}/>
            ))}
        </Container>
    );
}