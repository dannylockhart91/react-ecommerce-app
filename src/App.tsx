import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { auth } from "./shared/config/firebase.utils";

import Header from "./components/header/header.component";

import Authentication from "./pages/authentication/authentication.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";

interface AppProps {
}

interface AppState {
    isAuthenticated: boolean;
    currentUser: any
}

class App extends React.Component<AppProps, AppState> {
    firebaseAuthListener$: any = null;

    constructor(props: AppState) {
        super(props);
        this.state = {
            isAuthenticated: false,
            currentUser: null
        };
    }

    componentDidMount(): void {
        this.firebaseAuthListener$ = auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUser: user, isAuthenticated: true });
            } else {
                this.setState({ currentUser: null, isAuthenticated: false });
            }
            console.log(user);
        });
    }

    componentWillUnmount(): void {
        this.firebaseAuthListener$.unsubscribe();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <div className='page-container'>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/shop' component={ShopPage}/>
                        <Route exact path='/auth' component={Authentication}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
