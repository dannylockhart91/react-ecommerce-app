import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage: React.FC = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

const App: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
};

export default App;
