import {ADD_PIZZA, ADD_CLICK, SUB_CLICK} from '../types';

//// Сделать pizzaOrder обьектом чтобы подсчитывать количество одинаковых пиц
///// Реализовать выбор размера и вида теста

const initialState = {
	count: 0,
	pizzaOrder: {},
	totalPrice: 0,
};

function cartReducer(state = initialState, action) {
	function getNewState(pizzaOrder) {
		let count = 0;
		let totalPrice = 0;

		Object.values(pizzaOrder).forEach((el) => {
			count += el.count;
			totalPrice += el.pizzaItem.price * el.count;
		});
		return {
			count,
			pizzaOrder,
			totalPrice,
		};
	}
	switch (action.type) {
		case ADD_PIZZA:
			const newPizzaOrder = {...state.pizzaOrder};
			const id = action.payload.id;

			newPizzaOrder[id]
				? newPizzaOrder[id].count++
				: (newPizzaOrder[id] = {count: 1, pizzaItem: action.payload});

			return getNewState(newPizzaOrder);
		case ADD_CLICK:
			const stateWithAddCount = {...state.pizzaOrder};
			stateWithAddCount[action.payload].count++;

			return getNewState(stateWithAddCount);
		case SUB_CLICK:
			const stateWithSubCount = {...state.pizzaOrder};
			stateWithSubCount[action.payload].count === 1
				? delete stateWithSubCount[action.payload]
				: stateWithSubCount[action.payload].count--;
			return getNewState(stateWithSubCount);
		default:
			return state;
	}
}

export default cartReducer;
