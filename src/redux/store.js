import { createStore, compose, applyMiddleware } from 'redux'; // 1:39 6 lesson reduxDevTools
import thunk from 'redux-thunk'

import rootReducer from './redusers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;