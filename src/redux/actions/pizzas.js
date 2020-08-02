import {SET_PIZZAS} from '../types';
import {fetchPizzaData} from '../../api';
import {
	setCategories,
	setSortItems,
	setActiveCategory,
	setSortBy,
} from '../actions/filters';

export function getInitialPizzaItem() {
	return (dispatch) => {
		fetchPizzaData().then(({data}) => {
			dispatch(setPizzas(data.ollPizza));
			dispatch(setSortItems(data.sortItems));
			dispatch(setCategories(data.categories));
			dispatch(setActiveCategory());
			dispatch(setSortBy());
		});
	};
}

export function setPizzas(pizzas) {
	return {
		type: SET_PIZZAS,
		payload: pizzas,
	};
}
