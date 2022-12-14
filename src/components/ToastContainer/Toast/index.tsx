import React, { useEffect } from 'react';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

interface ToastProps{
    message: ToastMessage;
}

const icons = {
    info: <FiInfo size={24}/>,
    success: <FiCheckCircle size={24}/>,
    error: <FiAlertCircle size={24}/>
}
export const Toast: React.FC<ToastProps> = ({message}) => {
    
    const { removeToast} = useToast();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 5010)
    
        return () => {
            clearTimeout(timer);
        }
    }, [removeToast, message.id]);

    return(
        <Container type={message.type} hasDescription={!!message.description}>
            {icons[message.type] }
                    <div>
                        <strong>{message.title}</strong>
                        {message.description && <p>{message.description}</p>}
                    </div>
                    <button type='button' onClick={() => removeToast(message.id)}>
                        <FiXCircle size={18}/>
                    </button>
        </Container>
    );
}