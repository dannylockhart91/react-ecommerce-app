import styled, { css } from 'styled-components';
import { CustomButtonProps } from './custom-button.component';

const ButtonStyles = css`
	background-color: black;
	color: white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const InvertedButtonStyle = css`
	background-color: white;
	color: black;

	&:hover {
		color: white;
		background-color: black;
		border: 1px solid black;
	}
`;

const GoggleButtonStyle = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: white;
		color: #4285f4;
		border: 1px solid #4285f4;
	}
`;

const getButtonStyles = (props: CustomButtonProps) => {
	if (props.googleSignIn) {
		return GoggleButtonStyle;
	}

	return props.inverted ? InvertedButtonStyle : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px;
	font-size: 1rem;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', 'Roboto', serif;
	font-weight: bolder;
	border: 1px solid transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;
