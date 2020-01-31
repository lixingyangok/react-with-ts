import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

declare global {
    function __REDUX_DEVTOOLS_EXTENSION__COMPOSE__(x:object):any
}

const theFn = (
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose
)

const store = createStore( 
    reducer,
    theFn(applyMiddleware(thunk)),
);

export default store;