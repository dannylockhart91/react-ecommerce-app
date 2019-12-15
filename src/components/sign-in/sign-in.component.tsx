import React from 'react';
import { connect } from 'react-redux';

import { googleSignIn, emailSignIn } from '../../store/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer } from './sign-in.styles';

interface SignInProps {
    googleSignIn: any,
    emailSignIn: any
}

interface SignInState {
    email: string;
    password: string;
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
        const { emailSignIn } = this.props;
        emailSignIn(email, password);
    };

    render() {
        const { googleSignIn } = this.props;
        return (
            <SignInContainer className='sign-in-container'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
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
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    googleSignIn: () => dispatch(googleSignIn()),
    emailSignIn: (email: string, password: string) => dispatch(emailSignIn({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignInComponent);
