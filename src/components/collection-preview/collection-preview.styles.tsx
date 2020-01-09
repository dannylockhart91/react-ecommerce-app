import styled from 'styled-components';

export const StyledCollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	padding: 0 1rem;

	@media screen and (max-width: 800px) {
		align-items: center;
	}

	.title {
		font-size: 28px;
		margin-bottom: 25px;
		&:hover {
			cursor: pointer;
		}
	}

	.preview {
		display: flex;
		justify-content: space-evenly;

		@media screen and (max-width: 800px) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 15px;
			width: 100%;
		}
	}
`;
