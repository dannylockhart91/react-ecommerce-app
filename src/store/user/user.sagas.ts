import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActions } from './user.types';
import {
    signInSuccess,
    signInFailed,
    signOutSuccess,
    signOutFailed, signUpFailed, signUpSuccess,
} from "./user.actions";
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../shared/config/firebase.utils';

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* getSnapshotFromUserAuth(userAuth: any, additionalData?: any) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
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
        yield put(signInFailed(error));
    }
}

export function* signUp({ payload: { displayName, email, password } }: any) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, displayName }));
    } catch (error) {
        yield put(signUpFailed(error));
    }
}

export function* signInAfterSignUp({ payload: { user, displayName } }: any) {
    yield getSnapshotFromUserAuth(user, {displayName});
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* onCheckIsUserAuthenticated() {
    yield takeLatest(UserActions.CHECK_IS_USER_AUTHENTICATED, isUserAuthenticated);
}

export function* onGoogleSignIn() {
    yield takeLatest(UserActions.GOOGLE_SIGN_IN, signInWithGoogle);
}

export function* onEmailSignIn() {
    yield takeLatest(UserActions.EMAIL_SIGN_IN, signInWithEmail);
}

export function* onSignUp() {
    yield takeLatest(UserActions.SIGN_UP, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActions.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOut() {
    yield takeLatest(UserActions.SIGN_OUT, signOut);
}

export function* userSagas() {
    yield all([
        call(onCheckIsUserAuthenticated),
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onSignUp),
        call(onSignUpSuccess),
        call(onSignOut)
    ]);
}
