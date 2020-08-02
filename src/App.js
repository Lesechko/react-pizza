import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getInitialPizzaItem} from './redux/actions/pizzas';
import './scss/app.scss';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInitialPizzaItem());
	});

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
