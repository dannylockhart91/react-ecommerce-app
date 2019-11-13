import React from "react";

import SignInComponent from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss';

const Authentication: React.FC = () => (
    <div className='homepage-container'>
        <SignInComponent/>
    </div>
);

export default Authentication;
