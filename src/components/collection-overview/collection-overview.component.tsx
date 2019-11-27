import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { AppState } from '../../store/root.reducer';
import { getShopCollections } from '../../store/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';
import { CollectionOverviewProps, CollectionOverviewSelectors } from './collection-overview.types';

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => (
	<CollectionOverviewContainer className='collections-overview-container'>
		{Object.values(collections).map((collection) => (
			<CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
		))}
	</CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector<AppState, CollectionOverviewSelectors>({
	collections: getShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
