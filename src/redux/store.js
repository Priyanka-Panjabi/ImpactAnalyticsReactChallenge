import combinedReducers from './reducers/CombinedReducer';
import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore( combinedReducers,composeEnhancers(applyMiddleware(reduxThunk)) );
export default store ;