import React from "react";

import './form-input.styles.scss';

interface FormInputProps {
    handleChange: any,
    label: string,
    name: string,
    type: string,
    value: string,
    required: boolean
}

const FormInput: React.FC<FormInputProps> = (props) => (
    <div className='group'>
        <input className='form-input'
               name={props.name}
               value={props.value}
               onChange={props.handleChange}
               required={props.required}/>
        {
            props.label ?
                (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                    {props.label}
                </label>)
                : null
        }
    </div>
);

export default FormInput;
