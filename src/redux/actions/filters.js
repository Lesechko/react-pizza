import {
	SET_SORT_BY,
	SET_CATEGORIES,
	SET_SORT_ITEMS,
	SET_ACTIVE_CATEGORY,
} from '../types';

export function setSortBy(sortItem) {
	return {
		type: SET_SORT_BY,
		payload: sortItem,
	};
}

export function setCategories(categories) {
	return {
		type: SET_CATEGORIES,
		payload: categories,
	};
}

export function setSortItems(sortItems) {
	return {
		type: SET_SORT_ITEMS,
		payload: sortItems,
	};
}

export function setActiveCategory(category) {
	return {
		type: SET_ACTIVE_CATEGORY,
		payload: category,
	};
}
