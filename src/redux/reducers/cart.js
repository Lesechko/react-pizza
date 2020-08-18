import {ADD_PIZZA} from '../types';

const initialState = {
	count: 0,
	pizzaOrder: [],
	totalPrice: 0,
};

function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PIZZA:
			const newPizzaOrder = [...state.pizzaOrder];
			newPizzaOrder.push(action.payload);
			const count = newPizzaOrder.length;
			const totalPrice = newPizzaOrder.reduce((ac, el) => ac + el.price, 0);
			return {...state, pizzaOrder: newPizzaOrder, count, totalPrice};
		default:
			return state;
	}
}

export default cartReducer;
