import {ADD_PIZZA} from '../types';

export function addPizza(pizza) {
	return {
		type: ADD_PIZZA,
		payload: pizza,
	};
}
