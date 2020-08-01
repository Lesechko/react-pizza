import {createStore} from 'redux';
import mainReducer from './reducers';

const devTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(mainReducer, devTool);
export default store;
