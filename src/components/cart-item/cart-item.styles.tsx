import styled from 'styled-components';

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 1rem;

	img {
		width: 30%;
	}

	.item-details {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 10px 20px;
	}
`;
