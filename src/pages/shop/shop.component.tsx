import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { FetchCollections } from '../../store/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from "../collection/collection.container";

interface ShopPageProps extends RouteComponentProps {
    updateCollections: any;
    fetchCollections: any;
}

const ShopPage: React.FC<ShopPageProps> = ({ fetchCollections, match }) => {

    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                // @ts-ignore
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                // @ts-ignore
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchCollections: () => dispatch(FetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
