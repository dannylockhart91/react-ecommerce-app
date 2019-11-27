import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { getCollection } from '../../store/shop/shop.selectors';
import { AppState } from '../../store/root.reducer';
import { ShopData } from '../../store/shop/shop.types';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionContainer } from './collection.styles';

interface CollectionPageProps extends RouteComponentProps {
	collection: ShopData;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionContainer className='collection-page-container'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item: any) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</CollectionContainer>
	);
};

const mapStateToProps = (state: AppState, ownProps: any) => ({
	collection: getCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
