import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/auth';
import rubricsReducer from '../reducers/rubrics';
import rubricReducer from '../reducers/rubric';
import assessmentReducer from '../reducers/assessment';
import assessmentsReducer from '../reducers/assessments';

// let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default () => {
  // Store creation
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      auth: authReducer,
      rubrics: rubricsReducer,
      rubric: rubricReducer,
      assessment: assessmentReducer,
      assessments: assessmentsReducer,
    }),
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )

  )
  // const store = createStoreWithMiddleware(
  //   combineReducers({
  //     auth: authReducer,
  //     rubrics: rubricsReducer,
  //     rubric: rubricReducer,
  //     assessment: assessmentReducer,
  //   })
  // );

  return store;
}
