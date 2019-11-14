import React from "react";

import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";
import './authentication.styles.scss';

const Authentication: React.FC = () => (
    <div className='authentication-container'>
        <SignInComponent/>
        <SignUpComponent/>
    </div>
);

export default Authentication;
