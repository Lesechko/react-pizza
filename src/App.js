import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {setPizzas} from './redux/actions/pizzas';
import {
	setCategories,
	setSortItems,
	setActiveCategory,
	setSortBy,
} from './redux/actions/filters';
import './scss/app.scss';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('http://localhost:3004/pizza').then(({data}) => {
			dispatch(setPizzas(data.ollPizza));
			dispatch(setSortItems(data.sortItems));
			dispatch(setCategories(data.categories));
			dispatch(setActiveCategory());
			dispatch(setSortBy());
		});
	}, []);
	return (
		<div className="wrapper">
			<Header />
			<Content />
		</div>
	);
};

export default App;

// function mapStateToProps(state) {
// 	return {
// 		pizzas: state.pizzas.pizzas,
// 	};
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		setPizzas: (pizzas) => dispatch(setPizzas(pizzas)),
// 	};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
