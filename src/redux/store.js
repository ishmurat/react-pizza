import { createStore } from 'redux'; // 1:39 6 lesson reduxDevTools

import rootReducer from './redusers'

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;