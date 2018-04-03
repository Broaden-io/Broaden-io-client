import {
  REQUEST_RUBRICS_INDEX,
  RUBRICS_INDEX_SUCCESS,
  RUBRICS_FAILURE
} from '../actions/rubrics'

const initialState = {
  isFetching: false,
  rubrics: []
}

const rubricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RUBRICS_INDEX:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case RUBRICS_INDEX_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        rubrics: action.rubrics
      }
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
