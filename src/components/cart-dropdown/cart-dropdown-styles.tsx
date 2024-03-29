import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 65px;
	right: 20px;
	z-index: 5;

	.empty-message {
		font-size: 1rem;
		margin: 50px auto;
	}

	.cart-items {
		height: 240px;
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}

	button {
		margin-top: auto;
	}
`;
