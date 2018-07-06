import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

// LOOK THIS UP I DONT REMEMBER WHY I NEED THIS
const middleware = applyMiddleware(promiseMiddleware())
export default createStore(reducer, middleware)