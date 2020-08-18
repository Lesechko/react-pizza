import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {PizzaItem, Categories, SortPopup} from '../components/index';
import PizzasLoader from '../components/PizzasLoader';

const Home = () => {
	function getDisplayPizzas(ollPizzas = [], activeCategory, activeSortBy) {
		const displayPizzas = [...ollPizzas];

		const sortFunction = {
			0: (a, b) => b.popularityIdx - a.popularityIdx,
			1: (a, b) => a.price - b.price,
			2: (a, b) => a.name[0] > b.name[0],
		};

		displayPizzas.sort(sortFunction[activeSortBy.id]);

		return displayPizzas.map((pizza) => {
			return (
				pizza.categories.includes(activeCategory.id) && (
					<PizzaItem
						pizzaElement={pizza}
						key={pizza.id}
						pizzasInCart={state.pizzasInCart}
					/>
				)
			);
		});
	}

	const state = useSelector(({pizzas, filter, cart}) => {
		return {
			categories: filter.categories,
			sortItems: filter.sortItems,
			ollPizza: pizzas.pizzas,
			activeCategory: filter.activeCategory,
			isLoading: pizzas.isLoading,
			activeSortBy: filter.sortBy,
			pizzasInCart: cart.pizzaOrder,
		};
	});

	useEffect(() => {}, [state.isLoading]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories {...state} />
				<SortPopup />
			</div>

			<h2 className="content__title">{state.activeCategory.name}</h2>
			<div className="content__items">
				{state.isLoading
					? getDisplayPizzas(
							state.ollPizza,
							state.activeCategory,
							state.activeSortBy
					  )
					: [1, 2, 3, 4, 5, 6, 7, 8].map((el) => <PizzasLoader key={el} />)}
			</div>
		</div>
	);
};

export default Home;
