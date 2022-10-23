import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from 'unform';
import { Container } from './styles';


interface SelectProps{
    name: string;
}

const Select: React.FC<SelectProps> = ({name}) => {
    const inputRef = useRef(null);
    const { fieldName, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

        return(
            <Container isErrored={!!error}>
                <span className="label">Estado Civil:</span>
                <select name="estado_civil">
                    <option value="Selecione Uma Opção" selected>Selecione Uma Opção</option>
                    <option value="Solteiro(a)" >Solteiro(a)</option>
                    <option value="Casado(a)" >Casado(a)</option>
                    <option value="Viúvo(a)" >Viúvo(a)</option>
                </select>
            </Container>
        );
}


export default Select;