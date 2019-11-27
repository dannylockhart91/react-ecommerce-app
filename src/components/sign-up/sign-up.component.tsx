import React from 'react';

import { auth, createUserProfileDocument } from '../../shared/config/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';

interface SignUpProps {}

interface SignUpState {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

class SignUpComponent extends React.Component<SignUpProps, SignUpState> {
	constructor(props: SignUpProps) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
	};

	handleSubmit = async (e: any) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			console.log(user);

			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (e) {
			console.log('Error during sign-up', e.message);
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer className='sign-up-container'>
				<h2 className='title'>I do not have an account</h2>
				<span className='subtitle'>Sign up with email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						label='Display Name'
						name='displayName'
						type='text'
						value={displayName}
						required={true}
					/>
					<FormInput
						handleChange={this.handleChange}
						label='Email'
						name='email'
						type='email'
						value={email}
						required={true}
					/>
					<FormInput
						handleChange={this.handleChange}
						label='Password'
						name='password'
						type='password'
						value={password}
						required={true}
					/>
					<FormInput
						handleChange={this.handleChange}
						label='Confirm Password'
						name='confirmPassword'
						type='password'
						value={confirmPassword}
						required={true}
					/>
					<CustomButton buttonType='submit'>SIGN UP</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUpComponent;
