import React from 'react';
import propTypes from 'prop-types';

import Button from './Button';
import PizzaModify from './PizzaModify';

const PizzaItem = ({img, name, type, price}) => (
	<div className="pizza-block">
		<img className="pizza-block__image" src={img} alt="Pizza" />
		<h4 className="pizza-block__title">{name}</h4>
		<PizzaModify type={type} />
		<div className="pizza-block__bottom">
			<div className="pizza-block__price">от {price} ₽</div>
			<Button />
		</div>
	</div>
);

PizzaItem.defaultProps = {
	type: {size: [], basis: []},
	price: 0,
};

PizzaItem.propTypes = {
	name: propTypes.string.isRequired,
	img: propTypes.string,
	type: propTypes.objectOf(propTypes.array),
	price: propTypes.number,
};

export default PizzaItem;
