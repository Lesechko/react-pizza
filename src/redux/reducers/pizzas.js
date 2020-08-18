import {SET_PIZZAS, SET_LOADING} from '../types';

const initialState = {
	pizzas: [],
	isLoading: false,
};

function pizzasReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PIZZAS:
			return {...state, pizzas: action.payload, isLoading: true};
		case SET_LOADING:
			return {...state, isLoading: action.payload};
		default:
			return state;
	}
}

export default pizzasReducer;
