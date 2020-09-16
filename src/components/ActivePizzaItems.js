import React from 'react';
import PizzaItem from './PizzaItem';
import {useDispatch} from 'react-redux';

export default function ActivePizzaItems({
	ollPizzas = [],
	activeCategory,
	activeSortBy,
	pizzasInCart,
}) {
	const displayPizzas = [...ollPizzas];

	const dispatch = useDispatch();

	const sortFunction = [
		(a, b) => b.popularityIdx - a.popularityIdx,
		(a, b) => a.price - b.price,
		(a, b) => a.name[0] > b.name[0],
	];

	displayPizzas.sort(sortFunction[activeSortBy.id]);

	return displayPizzas.map((pizza) => {
		return (
			pizza.categories.includes(activeCategory.id) && (
				<PizzaItem
					pizzaElement={pizza}
					key={pizza.id}
					pizzasInCart={pizzasInCart}
					dispatch={dispatch}
				/>
			)
		);
	});
}

