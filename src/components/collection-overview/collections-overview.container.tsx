import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from "reselect";

import { AppState } from '../../store/root.reducer';
import { getIsFetching } from '../../store/shop/shop.selectors';
import hocSpinner from '../withSpinner/hoc-spinner.components';
import CollectionOverview from "./collection-overview.component";

interface CollectionOverviewSelectors {
    isLoading: any;
}

const mapStateToProps = createStructuredSelector<AppState, CollectionOverviewSelectors>({
    isLoading: getIsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    hocSpinner
)(CollectionOverview) as React.ComponentType<any>;

export default CollectionsOverviewContainer;


// connect(mapStateToProps)(hocSpinner(CollectionOverview));
