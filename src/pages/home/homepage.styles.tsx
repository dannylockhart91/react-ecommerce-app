import styled from 'styled-components';

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;

	@media (max-width: 999px) {
		padding: 20px 40px;
	}
	@media (max-width: 599px) {
		padding: 20px 10px;
	}
`;
