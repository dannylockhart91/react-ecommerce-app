import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
    box-shadow: -10px 0 10px 5px #444;
    
    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
    padding-left: 1rem;
    
    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const HeaderLinks = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
    padding-right: 1rem;
    
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

export const OptionDiv = styled.div`
	padding: 10px 15px;
	cursor: pointer;
`;
