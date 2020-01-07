import styled from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = () => {
    return `
	top: -14px;
	font-size: 12px;
	color: ${mainColor};`;
};

export const FormInputContainer = styled.div`
	position: relative;
	margin: 45px 0;

	.form-input {
		background: white none;
		color: ${subColor};
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 100%;
		border: none;
		border-radius: 0;
		border-bottom: 1px solid ${subColor};
		margin: 25px 0;

		&:focus,
		&:active {
			outline: none;
		}

		&:focus ~ .form-input-label {
			${shrinkLabel}
		}
	}

	input[type='password'] {
		letter-spacing: 0.3rem;
	}

	.form-input-label {
		color: ${subColor};
		font-size: 1rem;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 10px;
		transition: 150ms ease all;

		&.shrink {
			${shrinkLabel}
		}
	}
`;
