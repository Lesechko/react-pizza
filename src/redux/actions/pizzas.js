import {SET_PIZZAS, SET_LOADING} from '../types';
import {fetchPizzaData} from '../../api';
import {
	setCategories,
	setSortItems,
	setActiveCategory,
	setSortBy,
} from '../actions/filters';

export function getInitialPizzaItem() {
	return (dispatch) => {
		dispatch(setLoading());
		fetchPizzaData()
			.then(({data}) => {
				dispatch(setPizzas(data.ollPizza));
				dispatch(setSortItems(data.sortItems));
				dispatch(setCategories(data.categories));
				dispatch(setActiveCategory());
				dispatch(setSortBy());
			})
			.catch((e) => {
				console.log('My Promise error: ' + e);
			});
	};
}

export function setPizzas(pizzas) {
	return {
		type: SET_PIZZAS,
		payload: pizzas,
	};
}

export function setLoading(pizzas) {
	return {
		type: SET_LOADING,
		payload: false,
	};
}
