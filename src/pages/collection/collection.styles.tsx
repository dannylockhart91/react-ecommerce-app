import styled from 'styled-components';

export const CollectionStyleContainer = styled.div`
	display: flex;
	flex-direction: column;

	.title {
		font-size: 38px;
		margin: 0 auto 30px;
	}

	.items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px;

		& .collection-item {
			margin-bottom: 30px;
		}

        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr 1fr;
        }
	}
`;
