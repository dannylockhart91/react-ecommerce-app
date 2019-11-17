import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../store/root.reducer';
import { Section } from '../../store/directory/directory.types';
import { getDirectorySections } from '../../store/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

interface DirectoryProps extends DirectorySelectors {}

const DirectoryComponent: React.FC<DirectoryProps> = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ title, imageUrl, id, size, linkUrl }) => (
			<MenuItem key={id} title={title} imageUrl={imageUrl} size={size ? size : ''} linkUrl={linkUrl} />
		))}
	</div>
);

interface DirectorySelectors {
	sections: Section[];
}

const mapStateToProps = createStructuredSelector<AppState, DirectorySelectors>({
    sections: getDirectorySections
});

export default connect(mapStateToProps)(DirectoryComponent);
