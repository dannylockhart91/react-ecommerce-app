import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { UpdateCollections } from '../../store/shop/shop.actions';

import { firestore, convertCollectionSnapshotToMap } from '../../shared/config/firebase.utils';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CategoryPage from '../collection/collection.component';

interface ShopPageProps extends RouteComponentProps {
	updateCollections: any;
}

class ShopPage extends React.Component<ShopPageProps> {
	unsubscribeFromCollections: any = null;

	componentDidMount() {
		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
			const mappedCollection = convertCollectionSnapshotToMap(snapshot);
			this.props.updateCollections(mappedCollection);
		});
	}

	componentWillUnmount() {
	}

	render() {
		const { match } = this.props;
		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route path={`${match.path}/:collectionId`} component={CategoryPage} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	updateCollections: (collection: any) => dispatch(UpdateCollections(collection))
});

export default connect(null, mapDispatchToProps)(ShopPage);
