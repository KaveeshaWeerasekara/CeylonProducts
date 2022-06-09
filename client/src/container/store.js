import{createStore,applyMiddleware} from 'redux';
import {connect} from 'react-redux';
import rootReducer from './reducers';

//create new store
const store=createStore(rootReducer,applyMiddleware(connect));


export default store;
