import React, { useEffect, lazy, Suspense } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { FetchCollections } from '../../store/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error-boundry/error-boundry.component';

const CollectionsOverviewContainer = lazy(() =>
	import('../../components/collection-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

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
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					<Route
						exact
						path={`${match.path}`}
						// @ts-ignore
						component={CollectionsOverviewContainer}
					/>
				</ErrorBoundary>
				<ErrorBoundary>
					<Route
						path={`${match.path}/:collectionId`}
						// @ts-ignore
						component={CollectionPageContainer}
					/>
				</ErrorBoundary>
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	fetchCollections: () => dispatch(FetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
