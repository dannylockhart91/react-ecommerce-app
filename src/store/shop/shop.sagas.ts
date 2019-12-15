import { takeLatest, call, put } from 'redux-saga/effects';

import { ShopActionTypes } from "./shop.types";
import { FetchCollectionsFailed, FetchCollectionsSuccess } from "./shop.actions";
import { convertCollectionSnapshotToMap, firestore } from "../../shared/config/firebase.utils";

export function* FetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(FetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(FetchCollectionsFailed(error.message));
    }
}

export function* fetchCollections() {
    yield takeLatest(ShopActionTypes.FetchCollections, FetchCollectionsAsync);
}
