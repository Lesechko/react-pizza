import React from 'react';
import {Route} from 'react-router-dom';

import Cart from '../pages/Cart.js';
import Home from '../pages/Home';

const Content = (contentProps) => (
	<div className="content">
		<Route path="/" component={Home} exact />
		<Route path="/cart" component={Cart} />
	</div>
);

export default Content;
