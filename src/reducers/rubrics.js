import {
  REQUEST_RUBRICS_INDEX,
  RUBRICS_INDEX_SUCCESS,
  RUBRICS_FAILURE
} from '../actions/rubrics'

const rubricsReducer = (state = [], action) => {
  switch (action.type) {
    case REQUEST_RUBRICS_INDEX:
      return {
        ...state,
        isFetch: action.isFetching
      }
    case RUBRICS_INDEX_SUCCESS:
      return action.rubrics
    case RUBRICS_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      }
    default:
      return state
  }
}

export default rubricsReducer
