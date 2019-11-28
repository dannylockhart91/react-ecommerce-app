import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
	position: relative;
    width: 22vw;
    max-width: 350px;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;

	.image {
		width: 100%;
		height: 95%;
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;
	}

	.collection-item-footer {
		width: 100%;
		height: 5%;
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
	}

	&:hover {
		background-color: white;
		opacity: 0.9;
		.custom-button {
			display: flex;
		}
	}

	.custom-button {
		position: absolute;
		width: 80%;
		bottom: 50px;
		opacity: 0.7;
		display: none;

		&:hover {
			opacity: 0.9;
		}
	}
`;
