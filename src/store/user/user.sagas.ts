import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActions } from './user.types';
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed } from "./user.actions";
import { googleProvider, auth, createUserProfileDocument } from '../../shared/config/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth: any) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailed(error));
    }

}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }: any) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        put(signInFailed(error));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        put(signOutFailed(error))
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(UserActions.GOOGLE_SIGN_IN, signInWithGoogle);
}

export function* onEmailSignIn() {
    yield takeLatest(UserActions.EMAIL_SIGN_IN, signInWithEmail);
}

export function* onSignOut() {
    yield takeLatest(UserActions.SIGN_OUT, signOut);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onSignOut)
    ]);
}
