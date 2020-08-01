import React from 'react';
import {Link} from 'react-router-dom';

const Cart = () => (
	<div>
		<h1>Cart Component</h1>
		<button className="btn">
			<Link to="/" style={{fontSize: '1.5rem'}}>
				Home
			</Link>
		</button>
	</div>
);

export default Cart;
