import React from 'react';
import {Field} from "./InputFieldStyles";

interface InputFieldProps {
    value: string;
    onChange: (newValue: string) => void;
    onBlur: (newValue: string, rightAnswer: string) => void;
}

const InputField = ({value, onChange, onBlur}: InputFieldProps) => {
    return (
        <Field type="text"
                onChange={(e) => onChange(e.target.value)}
               onBlur={(e) => onBlur(e.target.value, "")}
               value={ value ? value : ""}/>
    )
}

export default InputField;