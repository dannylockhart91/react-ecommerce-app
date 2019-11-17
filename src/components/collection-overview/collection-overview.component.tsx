import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { AppState } from '../../store/root.reducer';
import { getShopCollections } from '../../store/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewProps, CollectionOverviewSelectors } from './collection-overview.types';
import './collection-overview.styles.scss';

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => (
	<div className='collections-overview-container'>
		{Object.values(collections).map((collection) => (
			<CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector<AppState, CollectionOverviewSelectors>({
	collections: getShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
