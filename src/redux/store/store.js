import { createStore } from 'redux';
import IncReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(IncReducers,composeWithDevTools())
export default store;