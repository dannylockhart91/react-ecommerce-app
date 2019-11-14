import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from '../../shared/config/firebase.utils';
import './sign-in.styles.scss';

interface SignInProps {
}

interface SignInState {
    email: string,
    password: string
}

class SignInComponent extends React.Component<SignInProps, SignInState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e: any) => {
        const { value, name } = e.target;

        this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
    };

    handleSubmit = async (e: any) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (e) {
            console.log('Error occurred during sign in', e.message);
        }
    };

    render() {
        return (
            <div className='sign-in-container'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'
                               type='email'
                               label='Email'
                               value={this.state.email}
                               handleChange={this.handleChange}
                               required/>


                    <FormInput name='password'
                               type='password'
                               label='Password'
                               value={this.state.password}
                               handleChange={this.handleChange}
                               required/>
                    <div className='button-container'>
                        <CustomButton buttonType={'submit'}>
                            Sign In
                        </CustomButton>
                        <CustomButton customClassName={'google-sign-in'} handleClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInComponent;
