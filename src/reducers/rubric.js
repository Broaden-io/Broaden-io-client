import {
  REQUEST_RUBRIC_BY_ID,
  RUBRIC_SUCCESS,
  RUBRIC_FAILURE,
  CREATE_RUBRIC,
  CREATE_RUBRIC_SUCCESS,
  CREATE_RUBRIC_FAILURE
} from '../actions/rubric'

const initialState = {
  isFetching: true,
  message: '',
  rubric: {
    id: '',
    name: '',
    description: '',
    userId: '',
    levelOne: '',
    levelTwo: '',
    levelThree: '',
    levelFour: '',
  }
}

const rubricReducer = (state = initialState, action) => {

  switch (action.type) {
  case 'UPDATE_INPUT':
    return {
      ...state,
      ...action,
    }
  case REQUEST_RUBRIC_BY_ID:
    return {
      ...state,
      ...action
    }
  case RUBRIC_SUCCESS:
    return {
      ...state,
      ...action
    }
  case RUBRIC_FAILURE:
    return {
      ...state,
      ...action
    }
  case CREATE_RUBRIC:
    return {
      ...state,
      ...action
    }
  case CREATE_RUBRIC_SUCCESS:
    return {
      ...state,
      ...action,
      rubric: {...action.rubric}
    }
  case CREATE_RUBRIC_FAILURE:
    return {
      ...state,
      ...action
    }
  default:
    return state
  }
}

export default rubricReducer
