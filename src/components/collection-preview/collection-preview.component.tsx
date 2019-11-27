import React from 'react';

import { Item } from '../../store/cart/cart.types';
import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer } from './collection-preview.styles';

interface CollectionPreviewProps {
	title: string;
	items: Item[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => (
	<CollectionPreviewContainer className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((_item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
