import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	box-shadow: -10px 0 10px 5px #444;
`;

export const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
	padding-left: 1rem;
`;

export const HeaderLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 1rem;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

export const OptionDiv = styled.div`
	padding: 10px 15px;
	cursor: pointer;
`;
