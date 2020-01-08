import React, { useState } from 'react';
import { connect } from 'react-redux';

import { googleSignIn, emailSignIn } from '../../store/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer } from './sign-in.styles';

interface SignInProps {
    googleSignIn: any,
    emailSignIn: any
}

const SignInComponent: React.FC<SignInProps> = ({ emailSignIn, googleSignIn }: SignInProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        emailSignIn(email, password);
    };

    return (
        <SignInContainer className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    handleChange={(e: any) => setEmail(e.target.value)}
                    required
                />

                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    handleChange={(e: any) => setPassword(e.target.value)}
                    required
                />
                <div className='button-container'>
                    <CustomButton buttonType={'submit'}>Sign In</CustomButton>
                    <CustomButton buttonType={'button'} googleSignIn={true} handleClick={googleSignIn}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    googleSignIn: () => dispatch(googleSignIn()),
    emailSignIn: (email: string, password: string) => dispatch(emailSignIn({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignInComponent);
