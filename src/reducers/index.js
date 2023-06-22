import { combineReducers } from 'redux';

import fruitReducer from './reducer';

const rootReducer = combineReducers({
    fruitsState: fruitReducer
});

export default rootReducer;