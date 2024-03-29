import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { getCollection } from '../../store/shop/shop.selectors';
import { AppState } from '../../store/root.reducer';
import { ShopData } from '../../store/shop/shop.types';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionStyleContainer } from './collection.styles';

interface CollectionPageProps extends RouteComponentProps {
    collection: ShopData | null;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
    let title = '';
    let items: any = [];
    if (collection) {
        title = collection.title;
        items = collection.items;
    }
    return (
        <CollectionStyleContainer className='collection-page-container'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item: any) => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </CollectionStyleContainer>
    );
};

const mapStateToProps = (state: AppState, ownProps: any) => ({
    collection: getCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
