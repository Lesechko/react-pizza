import filterReducer from './filters';
import pizzasReducer from './pizzas';
import cartReducer from './cart'
import {combineReducers} from 'redux';

const mainReducer = combineReducers({
	filter: filterReducer,
	pizzas: pizzasReducer,
	cart: cartReducer,
});

export default mainReducer;
