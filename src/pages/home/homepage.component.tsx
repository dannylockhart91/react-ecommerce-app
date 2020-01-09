import React, { Profiler } from 'react';
import DirectoryComponent from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage: React.FC = () => (
	<HomePageContainer>
		<Profiler
			id='DirectoryProfiler'
			onRender={(id, phase, actualDuration) => {
				console.log({ id, phase, actualDuration });
			}}>
			<DirectoryComponent />
		</Profiler>
	</HomePageContainer>
);

export default HomePage;
