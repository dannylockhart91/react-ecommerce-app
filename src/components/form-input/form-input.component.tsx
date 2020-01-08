import React from 'react';

import { FormInputContainer } from './form-input.styles';
// import './form-input.styles.scss';

interface FormInputProps {
	handleChange: any;
	label: string;
	name: string;
	type: string;
	value: string;
	required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({name, label, type, value, required, handleChange}: FormInputProps) => (
	<FormInputContainer className='group'>
		<input
			className='form-input'
			name={name}
			type={type}
			value={value}
			onChange={handleChange}
			required={required}
		/>
		{label ? (
			<label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
		) : null}
	</FormInputContainer>
);

export default FormInput;
