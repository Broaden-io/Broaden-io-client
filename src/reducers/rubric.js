import {
  REQUEST_RUBRIC_BY_ID,
  RUBRIC_SUCCESS,
  RUBRIC_FAILURE
} from '../actions/rubric'

const rubricReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RUBRIC_BY_ID:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case RUBRIC_SUCCESS:
      return action.rubric
    case RUBRIC_FAILURE:
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default rubricReducer
