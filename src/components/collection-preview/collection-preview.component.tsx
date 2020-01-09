import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Item } from '../../store/cart/cart.types';
import { StyledCollectionPreviewContainer } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

interface CollectionPreviewProps extends RouteComponentProps {
	title: string;
	items: Item[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items, history, match }) => (
	<StyledCollectionPreviewContainer className='collection-preview'>
		<h1 className='title' onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
			{title.toUpperCase()}
		</h1>
		<div className='preview'>
			{items
				.filter((_item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</StyledCollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
