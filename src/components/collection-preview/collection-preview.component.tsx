import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Item } from '../../store/cart/cart.types';
import { CollectionPreviewContainer, PreviewContainer } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

interface CollectionPreviewProps extends RouteComponentProps {
	title: string;
	items: Item[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items, history, match }) => (
	<CollectionPreviewContainer className='collection-preview'>
		<h1 className='title' onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
			{title.toUpperCase()}
		</h1>
		<PreviewContainer className='preview'>
			{items
				.filter((_item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
