import React from "react";

import './custom-button.styles.scss';

interface CustomButtonProps {
    type: any;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => (
    <button className='custom-button' type={props.type}>
        {props.children}
    </button>
);

export default CustomButton;
