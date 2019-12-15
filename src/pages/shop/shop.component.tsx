import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { FetchCollections } from '../../store/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from "../collection/collection.container";

interface ShopPageProps extends RouteComponentProps {
    updateCollections: any;
    FetchCollections: any;
}

class ShopPage extends React.Component<ShopPageProps> {
    componentDidMount() {
        const { FetchCollections } = this.props;
        FetchCollections();
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
    FetchCollections: () => dispatch(FetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
