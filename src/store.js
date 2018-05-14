import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import weightBmiReducer from './reducers/weightbmi';
import eventsDataReducer from './reducers/events';
import waterReducer from './reducers/water';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        eventsData: eventsDataReducer,
        weightBmi: weightBmiReducer,
        water: waterReducer
    }),composeWithDevTools(
    applyMiddleware(thunk)
));

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
