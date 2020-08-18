import axios from 'axios';

export async function fetchPizzaData() {
	try {
		return axios.get('http://localhost:3004/pizza');
	} catch (e) {
		console.log('My axios error' + e);
	}
}
