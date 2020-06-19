import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { initialState } from './reducer/movieReducer';
const middlewares = [thunk];

export default function configureStore() {
    let store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
    return store
}
