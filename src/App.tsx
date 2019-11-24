import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from './store/root.reducer';
import { getCurrentUser } from './store/user/user.selectors';
import { setCurrentUser } from './store/user/user.actions';
import { auth, createUserProfileDocument } from './shared/config/firebase.utils';

import Header from './components/header/header.component';

import Authentication from './pages/authentication/authentication.component';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.scss';

interface AppProps {
    currentUser: any | null;
    setCurrentUser: any;
}

class App extends React.Component<AppProps> {
    firebaseAuthListener$: any = null;

    componentDidMount(): void {
        const { setCurrentUser } = this.props;

        this.firebaseAuthListener$ = auth.onAuthStateChanged(async (userAuthObject: any) => {
            if (userAuthObject) {
                const userRef = await createUserProfileDocument(userAuthObject);
                if (userRef) {
                    userRef.onSnapshot((snapshot) => {
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                        });
                    });
                }
            } else {
                setCurrentUser(null);
            }
        });
    }

    componentWillUnmount(): void {
        this.firebaseAuthListener$.unsubscribe();
    }

    render() {
        return (
            <div>
                <Header />
                <div className='page-container'>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route
                            exact
                            path='/auth'
                            render={() => (this.props.currentUser ? <Redirect to={'/'} /> : <Authentication />)}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

interface appSelectors {
    currentUser: any | null;
}
const mapStateToProps = createStructuredSelector<AppState, appSelectors>({
    currentUser: getCurrentUser
});

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
