import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './utility/ScrollToTop/scrollToTop';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './store/store';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <ScrollToTop /> {/* Scroll to the top of the page on navigation */}
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
