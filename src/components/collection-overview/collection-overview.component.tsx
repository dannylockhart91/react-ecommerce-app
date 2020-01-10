import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { AppState } from '../../store/root.reducer';
import { getShopCollections } from '../../store/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';
import { ShopData } from '../../store/shop/shop.types';

interface CollectionOverviewProps extends CollectionOverviewSelectors { }

const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => (
	<CollectionOverviewContainer className='collections-overview-container'>
		{collections
			? Object.values(collections).map((collection) => (
					<CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
			  ))
			: []}
	</CollectionOverviewContainer>
);

interface CollectionOverviewSelectors {
    collections: { [key: string]: ShopData } | null;
}

const mapStateToProps = createStructuredSelector<AppState, CollectionOverviewSelectors>({
	collections: getShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
