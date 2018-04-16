import {
  REQUEST_CREATE_LEARNING_ACTION,
  SUCCESS_CREATE_LEARNING_ACTION,
  FAILURE_CREATE_LEARNING_ACTION
} from '../actions/learningAction'

const learningActionReducer = (state = {
  isFetching: true,
  learningAction: {}
}, action) => {
  switch (action.type) {
    case REQUEST_CREATE_LEARNING_ACTION:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SUCCESS_CREATE_LEARNING_ACTION:
      return {...state, learningAction: action.action}
    case FAILURE_CREATE_LEARNING_ACTION:
      return {
        ...state,
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default learningActionReducer
