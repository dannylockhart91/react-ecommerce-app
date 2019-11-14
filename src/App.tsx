import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { auth, createUserProfileDocument } from "./shared/config/firebase.utils";

import Header from "./components/header/header.component";

import Authentication from "./pages/authentication/authentication.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";

interface AppProps {
}

interface AppState {
    currentUser: any
}

class App extends React.Component<AppProps, AppState> {
    firebaseAuthListener$: any = null;

    constructor(props: AppState) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount(): void {
        this.firebaseAuthListener$ = auth.onAuthStateChanged(async (userAuthObject: any) => {
            if (userAuthObject) {
                const userRef = await createUserProfileDocument(userAuthObject);
                if (userRef) {
                    userRef.onSnapshot((snapshot => {
                        this.setState({
                            currentUser: {
                                id: snapshot.id,
                                ...snapshot.data()
                            }
                        });
                    }));
                }
            } else {
                this.setState({ currentUser: null });
            }
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
