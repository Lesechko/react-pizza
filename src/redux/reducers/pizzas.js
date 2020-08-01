import {SET_PIZZAS} from '../types';

const initialState = {
	pizzas: [],
	isLoading: false,
};

function pizzasReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PIZZAS:
			return {...state, pizzas: action.payload};
		default:
			return state;
	}
}

export default pizzasReducer;
