import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'
import authReducer from '../reducers/auth'
import rubricsReducer from '../reducers/rubrics'
import rubricReducer from '../reducers/rubric'
import assessmentReducer from '../reducers/assessment'
import assessmentsReducer from '../reducers/assessments'
import learningActionReducer from '../reducers/learningAction'
// import reduxCatch from 'redux-catch'
// import Raven from 'raven-js'
import { createLogger } from 'redux-logger'

// API key for Sentry (Phones home to report errors)
// const sentryKey = 'ac72c8f5f4ea4b11a10f452169652eb8'

// Instance of Raven for usage with Sentry
// Raven
//   .config(`https://${sentryKey}@app.getsentry.com/<project>`)
//   .install()

// Custom error handler
// const errorHandler = (error, getState, action) => {
//   Raven.context({
//     state: getState(),
//     action,
//   })
//   Raven.captureException(error)
// }

// Combine all reducers
const reducers = combineReducers({
  auth: authReducer,
  rubrics: rubricsReducer,
  rubric: rubricReducer,
  assessment: assessmentReducer,
  assessments: assessmentsReducer,
  learningAction: learningActionReducer,
})

// Middlewares
let middleware = [ thunkMiddleware ]
// Apply extra middlewares if in dev or testing environments
if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, promise(), createLogger() ]
}
const middlewares = applyMiddleware(...middleware)

// Create store object
export default () => {
  // Compose enhancers for redux devtools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducers,
    composeEnhancers(
      middlewares
    )
  )
  return store
}
