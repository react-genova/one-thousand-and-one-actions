import { createStore, combineReducers } from 'redux';
import counter from '../counter/modules/reducer';

const store = createStore(combineReducers({
    counter,
}));

export default store;
