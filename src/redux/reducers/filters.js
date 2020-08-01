import {
	SET_SORT_BY,
	SET_CATEGORIES,
	SET_SORT_ITEMS,
	SET_ACTIVE_CATEGORY,
} from '../types';

const initialState = {
	categories: [],
	activeCategory: {},
	sortItems: [],
	sortBy: {},
	isSortOpen: false,
};

function filterReducer(state = initialState, action) {
	switch (action.type) {
		case SET_SORT_BY:
			return {
				...state,
				sortBy: action?.payload ?? {id: 0, name: state.sortItems[0]},
			};
		case SET_CATEGORIES:
			return {...state, categories: action.payload};
		case SET_SORT_ITEMS:
			return {...state, sortItems: action.payload};
		case SET_ACTIVE_CATEGORY:
			return {...state, activeCategory: action.payload ?? {id: 0, name: 'Все'}};
		default:
			return state;
	}
}

export default filterReducer;
