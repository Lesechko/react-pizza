import {createStore, applyMiddleware, compose} from 'redux';
import mainReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnchancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(
	mainReducer,
	composeEnchancers(applyMiddleware(ReduxThunk, logger))
);
export default store;
