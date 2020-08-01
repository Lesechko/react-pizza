import filterReducer from './filters';
import pizzasReducer from './pizzas';
import {combineReducers} from 'redux';

const mainReducer = combineReducers({
	filter: filterReducer,
	pizzas: pizzasReducer,
});

export default mainReducer;
