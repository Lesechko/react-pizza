import React, {useState} from 'react';
// import propTypes from 'prop-types';

import Button from './Button';
import PizzaModify from './PizzaModify';
import {addPizza} from '../redux/actions/cart';

const PizzaItem = ({pizzaElement, pizzasInCart, dispatch}) => {
	const {img, name, type, price, id} = pizzaElement;

	const getBtnCount = pizzasInCart[id] ? pizzasInCart[id].count : 0;

	const [activeSize, setActiveSize] = useState(type.size[0]);
	const [activeBasis, setActiveBasis] = useState(type.basis[0]);

	function onAddBtnClick() {
		dispatch(addPizza({id,name,price, img, activeSize, activeBasis}));
	}

	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={img} alt="Pizza" />
			<h4 className="pizza-block__title">{name}</h4>
			<PizzaModify
				type={type}
				activeBasis={activeBasis}
				activeSize={activeSize}
				setActiveBasis = {setActiveBasis}
				setActiveSize = {setActiveSize}
			/>
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
