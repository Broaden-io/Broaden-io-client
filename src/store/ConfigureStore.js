import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import rubricsReducer from '../reducers/rubrics';
import sidebarMiniReducer from '../reducers/sidebarMini';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default () => {
  // Store creation
  const store = createStoreWithMiddleware(
    combineReducers({
      auth: authReducer,
      rubrics: rubricsReducer,
      sidebarIsMini: sidebarMiniReducer,
    })
  );

  return store;
}
