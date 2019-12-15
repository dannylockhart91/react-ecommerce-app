import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { FetchCollectionsAsync } from '../../store/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from "../collection/collection.container";

interface ShopPageProps extends RouteComponentProps {
    updateCollections: any;
    fetchCollectionsAsync: any;
}

class ShopPage extends React.Component<ShopPageProps> {
    componentDidMount() {
        const { fetchCollectionsAsync } = this.props;
        fetchCollectionsAsync();
    }

    render() {
        const { match } = this.props;
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
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchCollectionsAsync: () => dispatch(FetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
