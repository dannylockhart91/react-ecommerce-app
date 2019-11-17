import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ShopData } from '../../store/shop/shop.types';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { AppState } from '../../store/root.reducer';
import { getShopCollections } from '../../store/shop/shop.selectors';

interface ShopPageProps extends ShopPageSelectors {}

const ShopPage: React.FC<ShopPageProps> = ({ collections }) => (
	<div className='shop-page'>
		{collections.map((collection) => (
			<CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
		))}
	</div>
);

interface ShopPageSelectors {
	collections: ShopData[];
}
const mapStateToProps = createStructuredSelector<AppState, ShopPageSelectors>({
	collections: getShopCollections
});

export default connect(mapStateToProps)(ShopPage);
