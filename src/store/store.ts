import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middleware = [];

middleware.push(thunk);
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

/* Used in order to persist store (during refresh etc) */
export const persistor = persistStore(store);

export default { store, persistor };
