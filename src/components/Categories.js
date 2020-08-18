import React, {memo} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {setActiveCategory} from '../redux/actions/filters';

const Categories = memo(({categories, activeCategory}) => {
	const dispatch = useDispatch();

	return (
		<div className="categories">
			<ul>
				{categories.map(({name, id}) => (
					<li
						key={id}
						onClick={() =>
							dispatch(setActiveCategory({id, name: categories[id].name}))
						}
						className={activeCategory.id === id ? 'active' : ''}
					>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object),
	activeCategory: PropTypes.object,
};

Categories.defaultProps = {
	categories: [{name: 'Is Apsent', id: 0}],
	activeCategory: {name: 'Все', id: 0},
};

export default Categories;
