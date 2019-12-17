import React from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';
import { signUp } from "../../store/user/user.actions";

interface SignUpProps {
    signUp: any;
}

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
        const { signUp } = this.props;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUp(displayName, email, password);
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

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (displayName: string, email: string, password: string) => dispatch(signUp({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUpComponent);
