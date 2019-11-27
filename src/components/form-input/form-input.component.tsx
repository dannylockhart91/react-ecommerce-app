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

const FormInput: React.FC<FormInputProps> = (props) => (
	<FormInputContainer className='group'>
		<input
			className='form-input'
			name={props.name}
			type={props.type}
			value={props.value}
			onChange={props.handleChange}
			required={props.required}
		/>
		{props.label ? (
			<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{props.label}</label>
		) : null}
	</FormInputContainer>
);

export default FormInput;
