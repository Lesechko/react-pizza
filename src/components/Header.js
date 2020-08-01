import React from 'react';
import logoSvg from '../assets/img/pizza-logo.svg';
import classes from '../App.module.scss';
import ButtonCart from './ButtonCart';

const Header = ({cart}) => (
	<div className="header">
		<div className="container">
			<div className="header__logo">
				<img width="38" src={logoSvg} alt="Pizza logo" />
				<div>
					<h1 className={classes.header__title}>React Pizza</h1>
					<p>самая вкусная пицца во вселенной</p>
				</div>
			</div>
			<ButtonCart totalCount={cart?.count} totalPrice={cart?.totalPrice} />
		</div>
	</div>
);

export default Header;
