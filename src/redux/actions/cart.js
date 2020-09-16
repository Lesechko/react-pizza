import {ADD_PIZZA, ADD_CLICK, SUB_CLICK} from '../types';

export function addPizza(pizza) {	
	return {
		type: ADD_PIZZA,
		payload: pizza,
	};
}

export function onAddClick(id) {
	return {
		type: ADD_CLICK,
		payload: id,
	};
}

export function onSubClick(id) {
	return {
		type: SUB_CLICK,
		payload: id,
	};
}

