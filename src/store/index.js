import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import myApp from '../reducers/reducer.js';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    myApp,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;