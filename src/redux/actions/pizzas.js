import {SET_PIZZAS} from '../types';

export function setPizzas(pizzas) {
	return {
		type: SET_PIZZAS,
		payload: pizzas,
	};
}
