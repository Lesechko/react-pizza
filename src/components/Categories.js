import React, {memo} from 'react';
import {useDispatch} from 'react-redux';

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

export default Categories;
