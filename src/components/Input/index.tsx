import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label?: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({name, label, className, placeholder, ...rest}) => {
    const inputRef = useRef(null);
    const { fieldName, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);


    const realPlaceholder = error ? error : placeholder;
    return(
        <Container className={className} isErrored={!!error}>
            <span className="label">{label ? `${label}:` :''}</span>
            <input
                ref={inputRef}
                placeholder={realPlaceholder}
                {...rest} 
            />
            
        </Container>
    );
}

export default  Input;