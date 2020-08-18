import React from 'react';
// import propTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import Button from './Button';
import PizzaModify from './PizzaModify';
import {addPizza} from '../redux/actions/cart';

const PizzaItem = ({pizzaElement, pizzasInCart}) => {
	const {img, name, type, price, id} = pizzaElement;

	const getBtnCount = pizzasInCart.reduce(
		(ac, el) => (el.id === id ? ac + 1 : ac),
		0
	);

	const dispatch = useDispatch();

	function onAddBtnClick() {
		dispatch(addPizza(pizzaElement));
	}

	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={img} alt="Pizza" />
			<h4 className="pizza-block__title">{name}</h4>
			<PizzaModify type={type} />
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<Button onBntClick={onAddBtnClick} btnCount={getBtnCount} />
			</div>
		</div>
	);
};

PizzaItem.defaultProps = {
	type: {size: [], basis: []},
	price: 0,
};

// PizzaItem.propTypes = {
// 	name: propTypes.string.isRequired,
// 	img: propTypes.string,
// 	type: propTypes.objectOf(propTypes.array),
// 	price: propTypes.number,
// };

export default PizzaItem;
