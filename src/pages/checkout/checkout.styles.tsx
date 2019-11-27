import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	.checkout-header {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid darkgray;

		.header-block {
			text-transform: capitalize;
			width: 23%;

			&:last-child {
				width: 8%;
			}
		}
	}
	.total {
		margin-top: 30px;
		margin-left: auto;
		font-size: 2rem;
	}

	button {
		margin: 30px 0 0 auto;
	}

	.test-payment-warning {
		text-align: center;
		margin: 20px auto;
		font-size: 28px;
		color: red;
	}

	@media(max-width: 900px) {
		width: 80%;
	}
`;
