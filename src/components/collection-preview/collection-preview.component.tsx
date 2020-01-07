import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Item } from '../../store/cart/cart.types';
import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer } from './collection-preview.styles';

interface CollectionPreviewProps extends RouteComponentProps {
	title: string;
	items: Item[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items, history }) => (
	<CollectionPreviewContainer className='collection-preview'>
		<h1 className='title' onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
			{title.toUpperCase()}
		</h1>
		<div className='preview'>
			{items
				.filter((_item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
