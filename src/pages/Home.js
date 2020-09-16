import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Categories, SortPopup} from '../components/index';
import PizzasLoader from '../components/PizzasLoader';
import ActivePizzaItems from '../components/ActivePizzaItems';

const Home = () => {
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
				{state.isLoading ? (
					<ActivePizzaItems
						ollPizzas={state.ollPizza}
						activeCategory={state.activeCategory}
						activeSortBy={state.activeSortBy}
						pizzasInCart = {state.pizzasInCart}
					/>
				) : (
					[1, 2, 3, 4, 5, 6, 7, 8].map((el) => <PizzasLoader key={el} />)
				)}
			</div>
		</div>
	);
};

export default Home;

