import {
  REQUEST_ASSESSMENTS,
  ASSESSMENTS_SUCCESS,
  ASSESSMENTS_FAILURE
} from '../actions/assessments'

const assessmentsReducer = (state = {
  isFetching: true,
  assessmentsObject: []
}, action) => {
  switch (action.type) {
  case REQUEST_ASSESSMENTS:
    return {
      ...state,
      isFetching: action.isFetching
    }
  case ASSESSMENTS_SUCCESS:
    return {
      ...state,
      errorMessage: '',
      isFetching: action.isFetching,
      assessmentsObject: action.assessments
    }
  case ASSESSMENTS_FAILURE:
    return {
      ...state,
      errorMessage: action.message,
      isFetching: action.isFetching
    }
  default:
    return {...state}
  }
}

export default assessmentsReducer
