import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

import rootReducer from './root.reducer';

const middleware = [];

// middleware.push(thunk);
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

/* Used in order to persist store (during refresh etc) */
export const persistor = persistStore(store);

export default { store, persistor };
