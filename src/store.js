import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers/index'
import thunk from 'redux-thunk';

const store = createStore(rootReducer,  applyMiddleware(thunk)
);

export default store;