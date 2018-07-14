import {
  REQUEST_CREATE_OPEN_GRAPH,
  SUCCESS_CREATE_OPEN_GRAPH,
  FAILURE_CREATE_OPEN_GRAPH
} from '../actions/learningAction'

const learningActionReducer = (state = {
  isFetching: false,
  learningAction: {}
}, action) => {
  switch (action.type) {
  case REQUEST_CREATE_OPEN_GRAPH:
    return {
      ...state,
      isFetching: action.isFetching
    }
  case SUCCESS_CREATE_OPEN_GRAPH:
    return {
      ...state, learningAction: action.action,
      isFetching: action.isFetching
    }
  case FAILURE_CREATE_OPEN_GRAPH:
    return {
      ...state,
      errorMessage: action.message
    }
  default:
    return state
  }
}

export default learningActionReducer
