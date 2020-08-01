import React from 'react';
import {useSelector} from 'react-redux';
import {PizzaItem, Categories, SortPopup} from '../components/index';

const Home = () => {
	const state = useSelector(({pizzas, filter}) => {
		return {
			categories: filter.categories,
			sortItems: filter.sortItems,
			ollPizza: pizzas.pizzas,
			activeCategory: filter.activeCategory,
		};
	});

	return (
		<div className="container">
			<div className="content__top">
				<Categories {...state} />
				<SortPopup />
			</div>

			<h2 className="content__title">{state.activeCategory.name}</h2>
			<div className="content__items">
				{state.ollPizza.map((pizza) => {
					return pizza.categories.includes(state.activeCategory.id) ? (
						<PizzaItem {...pizza} key={pizza.id} />
					) : (
						''
					);
				})}
			</div>
		</div>
	);
};

export default Home;
