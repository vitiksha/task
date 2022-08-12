import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import combineReducers from './Reducers/combineReducers';
import thunk from 'redux-thunk'

const configureStore = () => {
  return createStore(combineReducers, applyMiddleware(thunk, logger));
};

export default configureStore;

function logger({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch", action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}