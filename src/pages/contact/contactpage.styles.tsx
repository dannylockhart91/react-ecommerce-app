import styled from 'styled-components';

export const ContactPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;

	@media (max-width: 599px) {
		padding: 0 10px;
	}
`;

export const ContactPageTitle = styled.h1`
	align-self: flex-start;
	font-size: 28px;
`;
