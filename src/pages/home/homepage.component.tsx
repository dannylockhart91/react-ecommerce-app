import React from 'react';
import DirectoryComponent from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage: React.FC = () => (
	<HomePageContainer>
		<DirectoryComponent />
	</HomePageContainer>
);

export default HomePage;
