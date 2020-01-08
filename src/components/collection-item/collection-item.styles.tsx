import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
	position: relative;
	width: 22vw;
	max-width: 266px;
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

        button {
            opacity: 0.85;
            display: flex;
        }
	}

	@media (max-width: 800px) {
		width: 40vw;
		min-width: 160px;
		margin: 0 auto;
	}
`;

export const AddButton = styled(CustomButton)`
	position: absolute;
	width: 80%;
	bottom: 50px;
	opacity: 0.7;
	display: none;

	&:hover {
		opacity: 0.9;
	}

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;
