import axios from 'axios';

export function fetchPizzaData() {
	try {
		return axios.get('http://localhost:3004/pizza');
	} catch (e) {
		console.log('Little error' + e);
	}
}
