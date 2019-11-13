import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className='page-container'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/auth' component={Authentication}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
