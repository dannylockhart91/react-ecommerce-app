import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { createStructuredSelector } from "reselect";

import { getIsFetching } from '../../store/shop/shop.selectors';
import hocSpinner from '../../components/withSpinner/hoc-spinner.components';
import CollectionPage from "./collection.component";


interface CollectionSelectors {
    isLoading: any
}

const mapStateToProps = createStructuredSelector<null, CollectionSelectors>({
    isLoading: (state: any) => getIsFetching(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    hocSpinner
)(CollectionPage) as React.ComponentType<any>;

export default CollectionPageContainer;
