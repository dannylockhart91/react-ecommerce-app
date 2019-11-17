import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CategoryPage from '../collection/collection.component';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div>
);

export default ShopPage;
