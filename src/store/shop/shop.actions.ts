import { ShopActionTypes, ShopActions, ShopData } from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../shared/config/firebase.utils';

export const UpdateCollections = (collection: any): ShopActions => ({
    type: ShopActionTypes.UpdateCollections,
    payload: collection
});

export const FetchCollections = (): ShopActions => ({
    type: ShopActionTypes.FetchCollections
});

export const FetchCollectionsSuccess = (data: { [key: string]: ShopData }): ShopActions => ({
    type: ShopActionTypes.FetchCollectionsSuccess,
    payload: data
});

export const FetchCollectionsFailed = (data: string): ShopActions => ({
    type: ShopActionTypes.FetchCollectionsFailed,
    payload: data
});

export const FetchCollectionsAsync = () => {
    return (dispatch: any) => {
        const collectionRef = firestore.collection('collections');
        dispatch(FetchCollections());

        collectionRef.get()
            .then((snapShot: firebase.firestore.QuerySnapshot) => {
                const collectionsMap = convertCollectionSnapshotToMap(snapShot);
                dispatch(FetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => {
                dispatch(FetchCollectionsFailed(error.message));
            });
    };
};
