import React, { useState } from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';
import { signUp } from "../../store/user/user.actions";

interface SignUpProps {
    signUp: any;
}

const SignUpComponent: React.FC<SignUpProps> = ({signUp}) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUp(displayName, email, password);
    };

    return (
        <SignUpContainer className='sign-up-container'>
            <h2 className='title'>I do not have an account</h2>
            <span className='subtitle'>Sign up with email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    handleChange={(e: any) => setDisplayName(e.target.value)}
                    label='Display Name'
                    name='displayName'
                    type='text'
                    value={displayName}
                    required={true}
                />
                <FormInput
                    handleChange={(e: any) => setEmail(e.target.value)}
                    label='Email'
                    name='email'
                    type='email'
                    value={email}
                    required={true}
                />
                <FormInput
                    handleChange={(e: any) => setPassword(e.target.value)}
                    label='Password'
                    name='password'
                    type='password'
                    value={password}
                    required={true}
                />
                <FormInput
                    handleChange={(e: any) => setConfirmPassword(e.target.value)}
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
};

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (displayName: string, email: string, password: string) => dispatch(signUp({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUpComponent);
